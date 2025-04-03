import Card from "./Card/Card"
import BlueBtn from "../../components/BlueBtn/BlueBtn"
import CatalogWhiteBtn from '../CatalogPage/CatalogWhiteBtn/CatalogWhiteBtn'
import s from './CatalogPage.module.css'
import { products } from "../../products"
import { useState } from "react"
import Search from "../../components/Search/Search"

export default function CatalogPage(){
    const [search, setSearch] = useState('');
    function handleChange(e){
        setSearch(e.target.value);
    }
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

    return(
            <section className={s.catalog}>
                <div className="container">
                    <div className={s.catalog_inner}>
                        <h2 className={s.title}>Каталог товаров</h2>
                        <Search handleChange={handleChange}/>
                        <div className={s.nav}>
                            <p className={s.text}>Категории:</p>
                            <BlueBtn text="Все товары"/>
                            <CatalogWhiteBtn text="Шины/колеса"/>
                            <CatalogWhiteBtn text="Масла"/>
                            <CatalogWhiteBtn text="Ароматизаторы"/>
                        </div>
                        <div className={s.cards}>
                            {
                                filteredProducts.length
                                ?
                                filteredProducts.map(product=><Card {...product}/>)
                                :
                                <p>По запросу "{search}" ничего не найдено</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
    )
}