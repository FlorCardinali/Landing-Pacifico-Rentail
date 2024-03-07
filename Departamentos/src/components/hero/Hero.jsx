import styles from "./Hero.module.css"

const Hero = () => {
    return ( 
    <section id="hero-section" className={styles.section}>
          
        <div className={styles.img}>
        </div>
        
        <div className={styles.textContainer}>
            <div className={styles.h1Container}>
                <div>
                    <h1 className={styles.h1}>Alquiler</h1>
                    <h1  className={`${styles.h1} ${styles.moverH1}`}>por dia</h1>
                </div>
                <p className={styles.subtitle}>Bahia Blanca, Buenos Aires.</p>         
            </div>
            <div className={styles.buttonsContainer}>
                <a className={styles.res}>
                    RESERVAS
                </a>
                <a className={styles.conoce} href="">Conoce mas -{'>'} </a>
            </div>
        </div>
    </section> 
    );
}
 
export default Hero;