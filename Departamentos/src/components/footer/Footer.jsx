import css from "./Footer.module.css"

const Footer = () => {
    return ( 
    <>
        <div className="w-screen md:max-h-[200px] bg-light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#74634c" fillOpacity="1" d="M0,96L1440,32L1440,320L0,320Z"></path></svg>
        </div>
        
        <footer className={css.footer}>
            <div className={css.contenedorSuperior}>
                <div className={css.logo}>
                        <h3 className={css.marca}>Pacific Rentail</h3>
                        <span className="pl-2 font-[Laila] text-sm text-[#e7e5da]">Bahia Blanca</span>
                </div>
                <div className={css.uls}>
                    <div className="flex flex-col">   
                        <p className={css.subtitulo}>Contacto</p>
                        <a href="" className={css.li}>WhatsApp</a>
                        <a href="" className={css.li}>Facebook</a>
                        <a href="" className={css.li}>Instagram</a>
                    </div>

                    <div className="flex flex-col">
                        <p className={css.subtitulo}>Interes</p>
                        <a href="" className={css.li}>Localidad</a>
                        <a href="" className={css.li}>Pais</a>
                        <a href="" className={css.li}>Maps</a> 
                    </div>
               </div>
                    
                    
            </div>

            <div className={css.barra}>
                <p className={css.programador}>
                    © 2024 Florencia Paula Cardinali
                </p>

                <div className={css.contenedorRedes}>
                    <a className={css.red} href="https://www.linkedin.com/in/florencia-cardinali/">
                        <img alt="linkdln" className="hover:scale-110" src="png/linkedin.png"></img>
                    </a>
                    <a className={css.red} href="https://github.com/FlorCardinali">
                        <img alt="github" className="hover:scale-110" src="png/github.png"></img>
                    </a>
                </div>
                
            </div>
        </footer>
    </> 
    );
}
 
export default Footer;