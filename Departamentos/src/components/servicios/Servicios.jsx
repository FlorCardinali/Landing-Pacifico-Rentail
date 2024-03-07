import css from "../servicios/Servicios.module.css"

const Servicios = () => {
    return (  
            <div className={css.card}>
                <div className={css.content}>
                    <div className={css.front}>
                        <h3 className={css.title}>Hey</h3>
                        <p className={css.subtitle}>Hover me :)</p>
                    </div>

                    <div className={css.back}>
                        <p className={css.description}>
                            Cool description so you can read it too my friend
                        </p>
                    </div>
                </div>
            </div>
    );
}
 
export default Servicios;