import s from './Card.module.css'
import { Link } from 'react-router-dom'
import BlueBtn from '../../../components/BlueBtn/BlueBtn'

export default function Card(props){
    return(
        <Link to={`${props.id}`}>
            <section className={s.card}>
                <div className={s.card_img}>
                    <img src={props.imagePath} alt="#"/>
                </div>
                <div className={s.inner}>
                    <div className={s.title}>{props.name}</div>
                    <div className={s.card_btn}>
                        <p className={s.price}>{props.price} ₽</p>
                        <BlueBtn text='Подробнее'/>
                    </div>
                </div>
            </section>
        </Link>
    )
}
