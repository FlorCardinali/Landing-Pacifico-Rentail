import styles from "./Hero.module.css"

const Hero = () => {
    return ( 
    <section id="hero" className={styles.section}>
          
        <div className={styles.img}>
        </div>
        
        <div className={styles.textContainer}>
                <div>
                    <h1 className={styles.h1}>Departamentos<br></br> Por dia</h1>
                </div>
                <p className={styles.subtitle}>Bahía Blanca, Buenos Aires.</p>         

                <div className={styles.buttonsContainer}>
                    <a className={styles.conoce} href="">Conoce más</a>
                    <a className={styles.res}>
                        Reservas
                    </a>
                </div>
        </div>
    </section> 
    );
}
 
export default Hero;