import s from './CatalogWhiteBtn.module.css'

export default function CatalogWhiteBtn({text='Button'}){
    return(
        <button className={s.btn}>{text}</button>
    )
}