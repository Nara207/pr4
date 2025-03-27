import s from './Form.module.css'
import BlueBtn from '../BlueBtn/BlueBtn'

export default function Form(){
    return(
        <>
            <section className={s.form}>
                <div className="container">
                    <div className="s form_inner">
                        <h2 className="title">Будь в курсе</h2>
                        <p className="text">
                            Подпишись на рассылку, чтобы не пропускать самые выгодные предложения и акции!
                        </p>
                        <div className="s form_sub">
                            <div className="s search">

                            </div>
                            <BlueBtn text='Подписаться' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}