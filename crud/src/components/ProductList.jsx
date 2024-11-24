import React from "react";
import ProductForm from "./ProductForm";

const ProductList = ({
  data,
  onEdit,
  onAdd,
  isFormOpen,
  formPosition,
  currentItem,
  onSave,
  onCancel,
  onDelete,
}) => {
  // Si data es undefined o no es un arreglo, devolvés un aviso para que no explote todo.
  if (!Array.isArray(data)) {
    return <div>No hay productos disponibles</div>;
  }

  return (
    <>
      <table className="responsive-table color #f3e5f5 purple lighten-5 highlight">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>
              <button
                className="waves-effect waves-light btn-small #4caf50 green"
                onClick={onAdd}
              >
                Agregar
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {isFormOpen && formPosition === 0 && (
            <tr>
              <td colSpan="6">
                <ProductForm
                  item={currentItem}
                  onSave={onSave}
                  onCancel={onCancel}
                />
              </td>
            </tr>
          )}
          {data.length > 0 ? (
            data.map((d, index) => (
              <React.Fragment key={d._id}>
                <tr>
                  <td>{d.name}</td>
                  <td>{d.category}</td>
                  <td>{d.price}</td>
                  <td>{d.description}</td>
                  <td>{d.stock}</td>
                  <td>
                    <img src={d.image} alt={d.name} width={50} />
                  </td>
                  <td>
                    <button
                      className="waves-effect waves-light btn-small #c51162 pink accent-4"
                      onClick={() => onEdit(d, index)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="waves-effect waves-light btn-small #d50000 red accent-4"
                      onClick={() => onDelete(d._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>

                {isFormOpen && formPosition === index + 1 && (
                  <tr>
                    <td colSpan="6">
                      <ProductForm
                        item={currentItem}
                        onSave={onSave}
                        onCancel={onCancel}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="7">No hay productos para mostrar</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
