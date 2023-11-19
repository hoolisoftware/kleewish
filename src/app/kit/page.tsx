import css from './index.module.scss'
import Link from 'next/link'

export default function Kit() {
    return <div className={css.container}>
        <Link href='./button'>Typography</Link>
        <Link href='./button'>Card</Link>
        <Link href='./button'>Button</Link>
        <Link href='./button'>Form Control</Link>
        <Link href='./button'>Link</Link>
    </div>
    
}