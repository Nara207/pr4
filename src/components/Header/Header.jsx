import { Link, NavLink } from 'react-router-dom'
import headlogo from "../../../public/header_logo.svg"
import BlueBtn from '../BlueBtn/BlueBtn'
import s from './Header.module.css'

export default function Header(){
    return(
        <header>
            <div className="container">
                <div className={s.header_inner}>
                    <nav className={s.nav}>
                        <NavLink to="/" className={`${s.nav_item} nav_item`}>О нас</NavLink>
                        <NavLink to="/catalog" className={`${s.nav_item} nav_item`}>Каталог</NavLink>
                        <NavLink to="/about_us" className={`${s.nav_item} nav_item`}>Где нас найти</NavLink>
                        <NavLink to="/users" className={`${s.nav_item} nav_item`}>Пользователи</NavLink>
                        <NavLink to="/cart" className={`${s.nav_item} nav_item`}>Корзина</NavLink>
                    </nav>
                    <img src={headlogo} alt="#" className={s.logo}/>
                    <div className={s.nav_btn}>
                        <BlueBtn text='Регистрация' />
                        <BlueBtn text='Вход' />
                    </div>
                </div>
            </div>
        </header>
    )
}