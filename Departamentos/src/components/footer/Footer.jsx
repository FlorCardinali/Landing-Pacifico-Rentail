import css from "./Footer.module.css"

const Footer = () => {
    return ( 
    <>
        <div className="w-screen md:max-h-[200px] bg-light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#655443" fillOpacity="1" d="M0,96L1440,32L1440,320L0,320Z"></path></svg>
        </div>
        
        <footer className={css.footer}>
            <div className={css.contenedorSuperior}>
                <div className={css.logo}>
                        <h4 className={css.marca}>Pacific Rentail</h4>
                        <span className="pl-2 font-[Laila] text-sm text-[#b6ab8e]">Bahia Blanca</span>
                </div>
                <div className={css.uls}>
                    <ul>   
                        <p className={css.subtitulo}>Contacto</p>
                        <a href=""><li className={css.li}>WhatsApp</li></a>
                        <a href=""><li className={css.li}>Facebook</li></a>
                        <a href=""><li className={css.li}>Instagram</li> </a>
                    </ul>

                    <ul>
                        <p className={css.subtitulo}>Interes</p>
                        <a href=""><li className={css.li}>Localidad</li></a>
                        <a href=""><li className={css.li}>Pais</li></a>
                        <a href=""><li className={css.li}>Maps</li></a> 
                    </ul>
               </div>
                    
                    
            </div>

            <div className={css.barra}>
                <p className={css.programador}>
                    © 2024 Florencia Paula Cardinali
                </p>

                <div className={css.contenedorRedes}>
                    <a className={css.red} href="https://www.linkedin.com/in/florencia-cardinali/">
                        <img className="hover:scale-110" src="png/linkedin.png"></img>
                    </a>
                    <a className={css.red} href="https://www.linkedin.com/in/florencia-cardinali/">
                        <img className="hover:scale-110" src="png/github.png"></img>
                    </a>
                </div>
                
            </div>
        </footer>
    </> 
    );
}
 
export default Footer;