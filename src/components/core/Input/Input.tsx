import Typography from '../Typography'

import css from './index.module.scss'
import { InputProps } from '.'


interface Props extends InputProps, React.HTMLAttributes<HTMLInputElement>
{
    type?: string
}


export default function Input({
    size = 'md',
    variant = 'contained',
    placeholder = '',
    className,
    style,
    type,
    onChange,
    onInput,
    onClick,
    defaultValue,
    value,
    label,
    error,
    required,
    disabled,
    fullWidth
}: Props) {

    const getClassName = () => {
        return [
            css.input,
            css[`input--${size}`],
            css[`input--${variant}`],
            fullWidth && css.fullWidth,
            className,
        ].join(' ')
    }

    return <div className={ css.container }>
        { label &&  <Typography variant='div' className={ css.label }>{`${label}${required ? '*' : ''}`}</Typography>}
        <input
            className={ getClassName() }
            style={ style }
            type={ type }
            onClick={ onClick }
            onChange={ onChange }
            onInput={ onInput }
            defaultValue={ defaultValue }
            value={ value }
            placeholder={ `${placeholder}${required ? '*' : ''}` }
            required={ required }
            disabled={ disabled }
        />
        { error &&  <Typography color='error' variant='div' className={ css.error }>{ error }</Typography>}
    </div> 
}