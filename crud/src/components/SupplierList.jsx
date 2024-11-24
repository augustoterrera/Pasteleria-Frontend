import React from "react";
import SupplierForm from "./SupplierForm";

const SupplierList = ({
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
  return (
    <>
      <table className="responsive-table color #f3e5f5 purple lighten-5 highlight">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Ubicación</th>
            <th>Redes Sociales</th>
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
                <SupplierForm
                  item={currentItem}
                  onSave={onSave}
                  onCancel={onCancel}
                />
              </td>
            </tr>
          )}
          {data.map((d, index) => (
    <React.Fragment key={d._id}>
      <tr>
        <td>{d.name}</td>
        <td>{d.address}</td>
        {/* Mostrar el primer contacto si existe */}
        <td>
          {d.contacts && d.contacts.length > 0 ? d.contacts[0].phoneNumber : 'No disponible'}
        </td>
        <td>
          {d.contacts && d.contacts.length > 0 ? d.contacts[0].email : 'No disponible'}
        </td>
        <td>
          {d.contacts && d.contacts.length > 0 ? d.contacts[0].location : 'No disponible'}
        </td>
        {/* Mostrar los socialMedia si existen */}
        <td>
          {d.contacts && d.contacts.length > 0 && d.contacts[0].socialMedia.length > 0 
            ? d.contacts[0].socialMedia.join(', ') 
            : 'No disponible'}
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
            <SupplierForm
              item={currentItem}
              onSave={onSave}
              onCancel={onCancel}
            />
          </td>
        </tr>
      )}
    </React.Fragment>
  ))}
        </tbody>
      </table>
    </>
  );
};

export default SupplierList;
