import React, { useState } from "react";
import data from "../../data/FAQ.json";
import css from "./Faq.module.css";

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
        <section className={css.section}>
            {data.preguntas.map((item, indice) => (
                <div key={indice} className={css.contenedor}>
                    <button className={css.pregunta} onClick={() => handleClick(indice)}>
                        {item.pregunta}
                    </button>
                    <p className={`${abierto === indice ? css.respuesta : "hidden"}`}>
                        {item.respuesta}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default Faq;
