import WhiteBtn from "../../components/WhiteBtn/WhiteBtn";
import s from './HomePage.module.css'

export default function HomePage(){
    return(
        <>
            <section className={s.banner}>
                <WhiteBtn text="О компании АвтоТорг" />
            </section>
        </>

    )
}