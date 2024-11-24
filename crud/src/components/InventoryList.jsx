import InventoryForm from "./InventoryForm";

const InventoryList = ({ data, onEdit, onAdd, isFormOpen, formPosition, currentItem, onSave, onCancel, onDelete, suppliers }) => {

    return (
        <>
            <table className="responsive-table color #f3e5f5 purple lighten-5 highlight">
                <thead>
                    <tr>
                        <th>Nombre del ingrediente</th>
                        <th>Cantidad</th>
                        <th>Proveedor</th>
                        <th></th>
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
                                <InventoryForm
                                    item={currentItem}
                                    onSave={onSave}
                                    onCancel={onCancel}
                                />
                            </td>
                        </tr>
                    )}
                    {data.map((d, index) => (
                        <>
                            <tr key={d._id}>
                                <td>{d.name}</td>
                                <td>{d.quantity}</td>
                                <td>
                                {d.suppliers && d.suppliers.name ? d.suppliers.name : 'Sin proveedor registrado'}
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
                                    <button className="waves-effect waves-light btn-small #d50000 red accent-4"
                                    onClick={()=>{onDelete(d._id)}}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        
                            {isFormOpen && formPosition === index + 1 && (
                                <tr>
                                    <td colSpan="6">
                                        <InventoryForm
                                            item={currentItem}
                                            onSave={onSave}
                                            onCancel={onCancel}
                                            suppliers1={suppliers}
                                        />
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default InventoryList
