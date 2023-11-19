import CloseIcon from '@mui/icons-material/Close';

import css from './index.module.scss'
import Blur from '../Blur';
import Button from '../Button';

interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    active: boolean
    setActive: CallableFunction
}


export default function Modal({
    active,
    children,
    setActive,
    style,
    className
}: Props) {

    const getClassName = () => {
        return [
            css.modal,
            className
        ].join(' ')
    }

    if (active) {
        return <div className={ css.container }>
            <Blur onClick={ () => setActive(false) }/>
            <div
                className={ getClassName() }
                style={ style }
            >
                { children }
            </div>
        </div>
    }
    return ''
}


export function ButtonClose({
    onClick
}: React.HTMLAttributes<HTMLButtonElement>) {
    return <Button
        onClick={ onClick }
        className={ css.buttonClose }
        color='gray'
        iconStart={<CloseIcon/>}
    />
}