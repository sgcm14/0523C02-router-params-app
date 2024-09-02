import { useParams } from "react-router-dom";
import preguntas from "./pregunta.js";

const Faq = () => {
  const params = useParams();
  //Utilizamos parseInt solamente para pasar el id al tipo number
  const pregunta = preguntas.find(
    (pregunta) => pregunta.id === parseInt(params.id)
  );

  return (
    <div>
      <h1>FAQ: desde la pregunta específica {params.id}</h1>
      <section>
        <h3>{pregunta?.title}</h3>
        <p>{pregunta?.descripcion}</p>
      </section>
      {/* <img src={faq} alt="faq" /> */}
    </div>
  );
};

export default Faq;
