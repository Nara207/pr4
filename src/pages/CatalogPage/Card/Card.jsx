import s from './Card.module.css'
import { Link } from 'react-router-dom'
import BlueBtn from '../../../components/BlueBtn/BlueBtn'

export default function Card(props){
    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Button clicked for product:', id);
        addToCart();
      };
      
    return(
        
            <section className={s.card}>
                <div className={s.card_img}>
                    <img src={props.imagePath} alt="#"/>
                </div>
                <div className={s.inner}>
                    <div className={s.title}>{props.name}</div>
                    <div className={s.card_btn}>
                        <p className={s.price}>{props.price} ₽</p>
                        <Link to={`${props.id}`}>
                            <BlueBtn text='Подробнее'/>
                        </Link>
                        
                    </div>
                </div>
                <button onClick={props.addToCart}><BlueBtn text='Добавить в корзину'/></button>
            </section>
    )
}
