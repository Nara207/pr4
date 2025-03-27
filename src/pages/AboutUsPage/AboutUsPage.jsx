import s from './AboutUsPage.module.css'
import icon1 from '../../../public/icon_map.png'
import icon2 from '../../../public/icon_phone.png'
import icon3 from '../../../public/icon_email.png'

export default function AboutUsPage(){
    return(
        <>
            <section className={s.about_us}>
                <div className="container">
                    <h1 className={s.title}>Где нас найти</h1>
                    <div className={s.map}>
                        <div className={s.contacts}>
                            <h2 className={s.cont_title}>Контакты</h2>
                            <div className={s.cont_btn_text}>
                                <div className={s.cont_btn}>
                                    <img src={icon1} alt="#" />
                                    <img src={icon2} alt="#" />
                                    <img src={icon3} alt="#" />
                                </div>
                                <div className={s.cont_text}>
                                    <p>г. Казань, ул. Ю. Фучика 136</p>
                                    <p>+7(960)058-22-93</p>
                                    <p>Auto1Torg@mail.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}