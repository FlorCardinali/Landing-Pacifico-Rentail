import React, { useState } from "react";
import data from "../../data/FAQ.json";
import css from "./Faq.module.css";
import Titulo from "../reutilizables/Titulo";

const Faq = () => {
    const [abierto, setAbierto] = useState(-1); 

    const handleClick = (indice) => {
        if (indice === abierto) {
            setAbierto(-1); 
        } else {
            setAbierto(indice);
        }
    };

    return (
        <>
        <section  className={css.section}>
            <Titulo
            texto="Preguntas frecuentes"
            color="#4c3f37"
            colorC="#2b221d" 
            />
            <div className={css.contenedorGeneral}>
                {data.preguntas.map((item, indice) => (
                    <button 
                    key={indice} 
                    onClick={() => handleClick(indice)} 
                    className={css.contenedor}
                    >
                        <div className={css.pregunta} >
                            {item.pregunta}
                        </div>
                        <div className={`${abierto === indice ? css.contRespuesta : "hidden"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-return-right translate-x-3 min-h-[20px] min-w-[20px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"/>
                            </svg>
                            <p className={css.respuesta}>
                                {item.respuesta}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
        </>
    );
};

export default Faq;
