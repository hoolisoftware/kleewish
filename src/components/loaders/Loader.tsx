import css from './index.module.scss'

export default function Loader() {
    return <div className={ css.wrapper }>
        <div className={ css.loader }>
            <div className={ css.shadow }></div>
            <div className={ css.box }></div>
        </div>
    </div>
}