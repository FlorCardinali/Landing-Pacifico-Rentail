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
        <section className={css.section}>
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
                            <p className={css.respuesta}>{item.respuesta}</p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
        </>
    );
};

export default Faq;
