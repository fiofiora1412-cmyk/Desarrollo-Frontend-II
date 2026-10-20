
const preguntas = [
  {
    id: 1,
    pregunta: "¿Cómo se controla el inventario?",
    respuesta: "Nuestro sistema permite visualizar los productos, sus precios y las cantidades disponibles."
  },
  {
    id: 2,
    pregunta: "¿Qué significa stock?",
    respuesta: "El stock representa la cantidad de unidades disponibles de un producto."
  },
  {
    id: 3,
    pregunta: "¿Cómo sabemos si un producto está disponible?",
    respuesta: "Un producto está disponible cuando su cantidad en stock es mayor que cero."
  },
  {
    id: 4,
    pregunta: "¿Por qué es importante gestionar el inventario?",
    respuesta: "Porque permite conocer las existencias, evitar faltantes y organizar los productos."
  }
];

function PreguntasFrecuentes() {
  return (
    <section>
      <h2>Preguntas frecuentes</h2>
      <p>Resolvemos algunas dudas sobre nuestro inventario.</p>

      <div className="preguntas-lista">
        {preguntas.map((item) => (
          <details key={item.id} className="pregunta">
            <summary>{item.pregunta}</summary>
            <p>{item.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default PreguntasFrecuentes;
