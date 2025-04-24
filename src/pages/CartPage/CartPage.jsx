import { products } from "../../products"
import s from "./CartPage.module.css"

export default function CartPage ({cart}){
    const cartProducts = cart.map(id=>products.find(product=>product.id==id));
    const allPrice = cartProducts.reduce((sum, item)=>sum + item.price, 0);

    return(
        <div className="container">
            <h2>Итого к оплате: {allPrice}</h2>
            <div className="cart_items">
                {
                    cartProducts.map(item=>{
                        return(
                            <div className={s.card}>
                                <img src={item.imagePath} alt="" className={s.card_img} />
                                <h2>{item.name}</h2>
                                <h2>{item.price}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}