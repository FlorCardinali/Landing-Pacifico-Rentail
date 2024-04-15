import data from "../../data/dataDeptos.json"


const Departamentos = () => {

    const depas = Object.values(data);
    return ( 
        <section>
            <div>
               {depas.map((depto,index) => 
                    <p key={index} styles="color:red;">
                        {depto.direccion}
                        {depto.comodidades.cochera ? "pajaro ": "uwu"}
                    </p>
                )} 
            </div>
        </section>
     );
}
 
export default Departamentos;