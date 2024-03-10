import css from "../deptos/Deptos.module.css"
import React, { useState } from 'react';


const Deptos = () => {
    const [open, setOpen] = useState(1);
    
    const imagenesDepto1 = [
        { id: 1, src: 'es5.webp', alt: 'departamento calle España' },
        { id: 2, src: 'es2.webp', alt: 'departamento calle España' },
        { id: 3, src: 'es3.webp', alt: 'departamento calle España' },
        { id: 4, src: 'es4.webp', alt: 'departamento calle España' },
        { id: 5, src: 'es1.webp', alt: 'departamento calle España' },
    ];

    return ( 
       <section className={css.container}>
            
            <h2 className={css.text}>Nuestros Departamentos</h2>

            <div className={css.imgContainer}>
                <a className={css.btn} onClick={() => setOpen(open-1 < 1 ? open : open-1 )} >
                    {`<`}
                </a>
                {imagenesDepto1.map(
                    (img) => {
                        return (
                            <div key={img.id} className={`${img.id === open ? css.open : css.close} ${css.image}`} 
                            style={{ backgroundImage: `url(${img.src})` }} 
                            >
                            </div>
                        )
                    }
                )}

                <a className={css.btn} onClick={() => setOpen(open+1 >imagenesDepto1.length ? open : open+1 )}>
                    {`>`}
                </a>                
            </div>
           
       </section>
     );
}
 
export default Deptos;

