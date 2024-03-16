import css from "../servicios/Servicios.module.css"
import React, { Children } from 'react';

const Service = ({children, title}) => {
    return (
        <div className={css.card}>
            <div className={css.content}>
                {/* svg */}
                <div className={css.front}>
                    <div className={css.svgContainer}>
                        {children}
                    </div>
                </div>
                
                <div className={css.back}>
                    <h2 className={css.title}>{title}</h2>
                </div>     
            </div> 
        </div>

     );
}
 


const Servicios = () => {
    

    return ( 
        <section className={css.section}>
            <div className="container px-5 py-24 mx-auto">
                {/* text */}
                <div className="text-center mb-20">
                    <h2 className={css.h2}>Nuestros Servicios</h2>
                    
                </div>

                <div className={css.container}>

                <Service
                    title="WI-FI"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-14 h-14 bi bi-wifi" viewBox="0 0 16 16">
                            <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049"/>
                            <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                        </svg>
                    </Service>


                    <Service 
                        title="Televisión"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-14 h-14 bi bi-display" viewBox="0 0 16 16">
                            <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/>
                        </svg>
                    </Service>

                    <Service
                         title="A/A"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-snow w-14 h-14" viewBox="0 0 16 16">
                            <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/>
                        </svg>
                    </Service>

                   
                    <Service
                        title="Calefacción"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-14 h-14 bi bi-thermometer-half" viewBox="0 0 16 16">
                            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
                            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
                        </svg>
                    </Service>
                    <Service
                    title="Vajilla Completa"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" class="bi bi-cup-fill h-14 w-14" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899z"/>
                        </svg>
                    </Service>
                    <Service
                    title="Ropa de Cama"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24">
                        <path d="M0,0h24v24H0V0z" fill="none"/><path d="M21,10.78V8c0-1.65-1.35-3-3-3h-4c-0.77,0-1.47,0.3-2,0.78C11.47,5.3,10.77,5,10,5H6C4.35,5,3,6.35,3,8v2.78 C2.39,11.33,2,12.12,2,13v6h2v-2h16v2h2v-6C22,12.12,21.61,11.33,21,10.78z M14,7h4c0.55,0,1,0.45,1,1v2h-6V8C13,7.45,13.45,7,14,7 z M5,8c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v2H5V8z M4,15v-2c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1v2H4z"/></svg>
                    </Service>
                
                </div>
                 




            </div>
        </section>
     );
}
 
export default Servicios;

