import styles from "./Hero.module.css"

const Hero = () => {
    return ( 
    <section id="hero-section" className={styles.section}>
        <div className={styles.containerImg}>      
            <div className={`${styles.img2} ${styles.img}`}>
            </div>
            <div className={`${styles.img1} ${styles.img}`}>
            </div>
        </div>
        
        <div className={styles.textContainer}>
            <div className={styles.h1Container}>
                <h1 className={styles.h1}>Pacifico</h1>
                <h1  className={`${styles.h1} ${styles.secH1}`}>Rental</h1>
               
            </div>
            <p className={styles.subtitle}>Departamentos</p> 
            <div className={styles.buttonsContainer}>
                <a className={styles.res}>
                    Reservas
                </a>
                <a href="">Conoce mas</a>
            </div>
        </div>
    </section> 
    );
}
 
export default Hero;