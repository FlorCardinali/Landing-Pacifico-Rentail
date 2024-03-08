import css from "../deptos/Deptos.module.css"
import React, { useState } from 'react';

const Departamento = ({images, titulo, comodidades, detalles}) => {
    const [activeImage, setActiveImage] = useState(1);

    const handleClick = (imageId) => {
        setActiveImage(imageId+1 > images.length ? 1 : imageId+1 );
    };
   
   return (
         <div className={css.container}>
            {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className={activeImage === image.id ? css.imgActive : css.imgHidden}
                        onClick={() => handleClick(image.id)}
                    />  
                ) 
            )} 
            
            <aside className={css.textContainer}>
                <h3 className={css.titulo}>{titulo}</h3>
                <span>
                    Comodidades: 
                    <br></br>
                    {comodidades}
                </span>
                <span>
                    {detalles}
                </span>
            </aside>
            
        </div> 
    );
}


const Deptos = () => {


   
    const imagenesDepto1 = [
        { id: 1, src: 'es5.webp', alt: 'departamento calle España' },
        { id: 2, src: 'es2.webp', alt: 'departamento calle España' },
        { id: 3, src: 'es3.webp', alt: 'departamento calle España' },
        { id: 4, src: 'es4.webp', alt: 'departamento calle España' },
        { id: 5, src: 'es1.webp', alt: 'departamento calle España' },
    ];
    return ( 
        <section>
            <Departamento
            images={imagenesDepto1}
            titulo={"Depto. España"}
            comodidades={"TV - INTERNET - AIRE ACONDICIONADO"}
            detalles={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, magnam, vel fugit odio libero perferendis rem iste voluptas alias nostrum veritatis necessitatibus? Consectetur incidunt, consequuntur reiciendis illum eos provident perferendis.
            Tenetur, assumenda itaque. Dicta corporis velit pariatur obcaecati magni ipsum aliquid soluta impedit illum omnis. Tempore fuga minus quod sit nobis hic quisquam. Eius necessitatibus, deserunt neque culpa explicabo alias!`
            }  
            />
            
        </section>
     );
}
 
export default Deptos;