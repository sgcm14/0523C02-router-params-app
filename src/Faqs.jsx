import { Link } from "react-router-dom";
import preguntas from "./pregunta.js";

function Faqs() {
  return (
    <div>
      <h1>Faqs</h1>
      <ol>
        {preguntas.map((pregunta) => (
         <Link key={pregunta.id} to={`${pregunta.id}`} >
         <li>
         {pregunta.title}
         </li>
         </Link>
        ))}
      </ol>
    </div>
  );
}

export default Faqs;
