import Image from 'next/image'
import { useDispatch } from 'react-redux'

import css from './index.module.scss'
import { setModalDeposit } from '@/features/modals'
import mora from './mora.svg'
import Button from '@/components/core/Button'

export default function ButtonMora() {
    const dispatch = useDispatch()

    return <Button
        onClick={ () => dispatch(setModalDeposit(true)) }
        className={ css.button }
        size='sm'
        iconStart={
            <Image src={ mora } height={14} alt='mora'/>
        }
    >
        342
    </Button>
}
