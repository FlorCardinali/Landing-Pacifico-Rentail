import Titulo from "../reutilizables/Titulo";
import css from "./About.module.css"
import React, { Children } from 'react';


 


const About = () => {
            

    return (
        <>
            <section id="about" className={css.section}>
                <div className={css.textContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-bgColor mb-8" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <span className={css.p}>
                        <Titulo
                            texto="Bienvenidos"
                            color="#655443"
                            colorC="#2b221d"
                        />
                        <br />
                        <br />
                        Somos una empresa <span className={css.span}>familiar</span> especializada en el alquiler de departamentos por día. Desde 2016, nos hemos dedicado a proporcionar un servicio directo para satisfacer las necesidades de nuestros clientes durante su estadía en nuestra ciudad.
                        <br />
                        Nos esforzamos por ofrecer un alojamiento <span className={css.span}>cómodo y accesible</span> para aquellos que buscan una opción práctica durante su viaje.
                        <br />
                        Nuestros departamentos están diseñados para ofrecer un espacio funcional donde pueda sentirse como en casa durante su estadía. Valoramos la transparencia y la comodidad en nuestro servicio, creando un ambiente acogedor para nuestros huéspedes al <span className={css.span}>precio mas bajo</span> .
                        <br />
                        <br />
                      </span>   
                    <hr className="h-[0.2rem] w-[20%] m-auto mb-4 bg-gray-800/40 border-none"></hr>

                    <span className={css.small}>Gracias por considerar Pacífico Rentail para su próxima visita.</span>
                                    
                </div>
            <div id="deptos" className="w-screen lg:h-[200px] h-[150px] bg-details">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-screen " viewBox="0 0 1440 320"><path fill="#ddddd2" fillOpacity="1" d="M0,96L1440,32L1440,0L0,0Z"></path></svg>
                
            </div>
            </section>
            
        </>
     );
}
 
export default About;

