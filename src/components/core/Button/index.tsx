import { Color } from '@/components/core/Colors'
import css from './index.module.scss'


export type ButtonVariant = 'default' | 'blank'
export type ButtonColor = Color
export type ButtonSize = 'sm' | 'md' | 'lg'


interface Props extends React.HTMLAttributes<HTMLButtonElement>
{
    variant?: ButtonVariant
    color?: ButtonColor
    size?: ButtonSize
    fullWidth?: boolean
    iconStart?: React.ReactNode
    iconEnd?: React.ReactNode
    animated?: boolean,
    disabled?: boolean
}

export default function Button({
    variant = 'default',
    color = 'primary-gradient',
    size = 'md',
    children,
    className,
    onClick,
    fullWidth,
    iconStart,
    iconEnd,
    animated,
    disabled
}: Props) {
    const getClassName = () => {
        return [
            css.button,
            className,
            css[`button--${variant}`],
            css[`button--${color}`],
            css[`button--${size}`],
            fullWidth && css.fullWidth,
            animated && css.animated
        ].join(' ')
    }

    return <button
        className={ getClassName() }
        onClick={ onClick }
        disabled={ disabled }
    >
        { iconStart &&
            <div className={ css.icon }>
                { iconStart }
            </div>
        } 
        {
            children &&
                <span>{ children }</span>
        }
        { iconEnd &&
            <div className={ css.icon }>
                { iconEnd }
            </div>
        } 
    </button>
}