import css from "../navbar/Navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const  handleClick = () => {
        setOpen(!open);
        console.log(open);
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return ( 
        <div className={`${css.container} ${isScrolled ? css.navbarScrolled : "" }`}>
            {/* marca */}
            <div className={css.marca}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                </svg>
                <span>Pacifico Rentail</span>
            </div>

           

            {/* menu lg */}
            <nav className={`${open ? "hidden" : css.contNav} `}>
                <a className={`${css.link} ${css.home}`} href="#hero">Home</a>
                <a className={css.link} href="#about">Sobre Nosotros</a>
                <a className={css.link} href="#deptos">Departamentos</a>
                <a className={css.link} href="">Servicio</a>
                <a className={css.link} href="">Contacto</a>
            </nav>
            
            {/* menu hamburguesa */}
            <nav className={`${open ? css.openNav : "hidden"}`}>
                <a className={`${css.link} ${css.home}`} href="#hero">Home</a>
                <a className={css.link} href="#about">Sobre Nosotros</a>
                <a className={css.link} href="#deptos">Departamentos</a>
                <a className={css.link} href="">Servicio</a>
                <a className={css.link} href=""></a>
            </nav>
             {/* boton hamburgesa */}
             <button onClick={handleClick} className={`${open ? css.openButton :  css.close}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
            </button>

        </div>
        
     );
}
 
export default Navbar;