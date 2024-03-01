import styles from "./Hero.module.css"

const Hero = () => {
    return ( 
    <section id="hero-section" className={styles.section}>
        <div className={styles.img}>
        </div>
        
        <div className={styles.container}>
            <h1 className={styles.h1}>Titulo Principal</h1>
            <h3 className={styles.subtitle}>Subtitulo</h3>
        </div>
    </section> 
    );
}
 
export default Hero;