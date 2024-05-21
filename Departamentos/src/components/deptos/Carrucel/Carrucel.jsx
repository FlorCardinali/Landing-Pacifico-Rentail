import React, { useRef, useEffect, useState } from 'react';
import css from "./Carrucel.module.css";

const Carrucel = ({images,estilos}) => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        setCurrentIndex(0);
        if (containerRef.current) {
            containerRef.current.scrollTo({ left: 0, behavior: 'auto' });
        }
    }, [containerRef]);

    return (  
        <div className={`${css.generalContainer} ${estilos}`}>
            <button className={`${css.btn} ${css.left}`} onClick={() => handleScroll(-100)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
            </button>
            
            <aside className={css.imgContainer} ref={containerRef}>
                {images.map((img, index) => 
                    <img key={index} className={css.img} src={img} alt="imagenes de los departamentos" />
                )}
            </aside>
        
            <button className={`${css.btn} ${css.right}`} onClick={() => handleScroll(400)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            </button>
        </div>
    );
}

export default Carrucel;
