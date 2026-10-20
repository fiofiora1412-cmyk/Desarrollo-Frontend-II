
function Inventario({ productos, onCambiarStock }) {
  return (
    <section>
      <h2>Productos disponibles</h2>

      <ul className="productos-grid">
        {productos.map((producto) => (
          <li
            key={producto.id}
            className="producto-card"
          >
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock} unidades</p>

            <div className="stock-controles">
            <button
                type="button"
                onClick={() => onCambiarStock(producto.id, -1)}
                disabled={producto.stock === 0}
            >
                - Disminuir
            </button>

            <button
                type="button"
                onClick={() => onCambiarStock(producto.id, 1)}
            >
                + Aumentar
            </button>
            </div>

          </li>
        ))}
      </ul>
    </section>
  );
}

export default Inventario;
