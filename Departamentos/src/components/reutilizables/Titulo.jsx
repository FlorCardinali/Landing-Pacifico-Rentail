const Titulo = ({ texto, color, colorC }) => {
    return (
      <h2
        className={`first-line:tracking-widest
          font-[Laila] 
          font-semibold
          first-letter:text-7xl 
          first-letter:font-bold   
          first-letter:float-none  
          text-4xl 
          drop-shadow-md`}
        style={{ color }}
      >
        <span style={{ color: colorC }}>{texto.charAt(0)}</span>
        {texto.slice(1)}
      </h2>
    );
  };
  
  export default Titulo;
  