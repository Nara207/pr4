import s from './Card.module.css'
import BlueBtn from '../../../components/BlueBtn/BlueBtn'

export default function Card(props){
    return(
        <section className={s.card}>
            <div className={s.card_img}>
                <img src={props.imagePath} alt="#" />
            </div>
            <div className={s.inner}>
                <div className={s.title}>{props.name}</div>
                <div className={s.card_btn}>
                    <p className={s.price}>{props.price} ₽</p>
                    <BlueBtn text='Добавить в корзину'/>
                </div>
            </div>
        </section>
    )
}
