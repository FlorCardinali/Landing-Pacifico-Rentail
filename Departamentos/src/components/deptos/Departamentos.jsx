import data from "../../data/dataDeptos.json"
import css from "../deptos/Departamentos.module.css"
import Carrucel from "./Carrucel/Carrucel";


const Departamentos = () => {

    const depas = Object.values(data);
    return ( 
        <section className={css.section}>
               {depas.map((depto,index) => 
                <div key={Math.random()} className={css.deptoContainer}>
                    <Carrucel images={depto.fotos}></Carrucel>
                    <p key={index} styles="color:red;">
                            {depto.direccion}
                            {depto.comodidades.cochera ? "pajaro ": "uwu"}
                    </p>
                    
                </div>
               )}      
        </section>
     );
}
 
export default Departamentos;