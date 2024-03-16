import styles from "./Hero.module.css"

const Hero = () => {
    return ( 
    <section id="hero-section" className={styles.section}>
          
        <div className={styles.img}>
        </div>
        
        <div className={styles.textContainer}>
            <div className={styles.h1Container}>
                <div>
                    <h1 className={styles.h1}>Alquiler </h1>
                    <h1  className={`${styles.h1} ${styles.moverH1}`}>por día</h1>
                </div>
                <p className={styles.subtitle}>Bahía Blanca, Buenos Aires.</p>         

                <div className={styles.buttonsContainer}>
                    <a className={styles.res}>
                        RESERVAS 
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="translate-y-[1px]  bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg>
                    </a>
                    <a className={styles.conoce} href="">Conoce más</a>
                </div>
            
            </div>
            
        </div>
    </section> 
    );
}
 
export default Hero;