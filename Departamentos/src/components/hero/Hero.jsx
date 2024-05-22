import styles from "./Hero.module.css"

const Hero = () => {
    return ( 
    <section id="hero" className={styles.section}>
          
        <img alt="imagen del inicio de la pagina" className={styles.img} src="./H.webp">
        </img>
        
        <div className={styles.textContainer}>

                <h1 className={styles.h1}>
                    <span className="lg:flex hidden">Departamentos</span>
                    <span className="lg:hidden flex">Deptos.</span>  
                Por dia</h1>
                <p className={styles.subtitle}>Bahía Blanca, Buenos Aires.</p>         

                <div className={`${styles.buttonsContainer} ${"md:flex-row-reverse md:scale-100 scale-[85%]"}`}>
                    <a className={styles.res}>
                        Reservas
                    </a>
                    <a className={styles.conoce} href="">Conoce más</a>
                </div>
        </div>
    </section> 
    );
}
 
export default Hero;