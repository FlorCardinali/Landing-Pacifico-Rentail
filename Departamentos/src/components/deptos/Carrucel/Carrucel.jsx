import css from "./Carrucel.module.css"
import { useRef } from 'react';

const Carrucel = ({images}) => {

    const containerRef = useRef(null);

    const handleScroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };


    return (  
    <div className={css.container}>
        <button className={`${css.btn} ${css.left}`} onClick={() => handleScroll(-100)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
            </svg>
        </button>
        
        <aside className={css.imgContainer} ref={containerRef}>
            {images.map(
                (img) => 
                <img className={css.img} src={img} alt="" />
            ) }
        </aside>
    
        <button className={`${css.btn} ${css.right}`} onClick={() => handleScroll(100)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
            </svg>
        </button>
    </div>
     );
}
export default Carrucel;