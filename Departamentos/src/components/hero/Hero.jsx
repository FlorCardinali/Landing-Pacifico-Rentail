import styles from "./Hero.module.css"

const Hero = () => {
    return ( 
    <section id="hero-section" className={styles.section}>
          
        <div className={styles.img}>
        </div>
        
        <div className={styles.textContainer}>
            <div className={styles.h1Container}>
                <h1 className={styles.h1}>Pacifico</h1>
                <h1  className={`${styles.h1} ${styles.moverH1}`}>Rental</h1>
                <p className={styles.subtitle}>Departamentos por dia</p>         
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