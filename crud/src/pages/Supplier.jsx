import React, { useState, useEffect } from "react";
import { getSuppliers, addSupplier, updateSupplier, deleteSupplier } from "../services/methods/suppliers";
import SupplierList from "../components/SupplierList";

const Supplier = () => {
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [formPosition, setFormPosition] = useState(null);

  // Obtener la lista de proveedores
  const fetchingSuppliers = async () => {
    const inventory = await getSuppliers();
    console.log(inventory);
    setData(inventory);
  };

  useEffect(() => {
    fetchingSuppliers();
  }, []);

  // Editar un proveedor
  const handleEdit = (item, index) => {
    setCurrentItem(item);
    setIsFormOpen(true);
    setFormPosition(index + 1);
  };

  // Agregar un nuevo proveedor
  const handleAdd = () => {
    setCurrentItem(null);
    setIsFormOpen(true);
    setFormPosition(0);
  };

  // Guardar un proveedor
  const handleSave = async (item) => {
    if (item._id) {
      await updateSupplier(item._id, item);
    } else {
      await addSupplier(item);
    }
    setIsFormOpen(false); // Cerrar el formulario después de guardar
    fetchingSuppliers();  // Volver a obtener la lista de proveedores actualizada
  };

  // Eliminar un proveedor
  const handleDelete = async (id) => {
    await deleteSupplier(id);
    fetchingSuppliers();
  };

  return (
    <>
      <SupplierList
        data={data}
        onEdit={handleEdit}
        onAdd={handleAdd}
        isFormOpen={isFormOpen}
        formPosition={formPosition}
        currentItem={currentItem}
        onSave={handleSave}
        onCancel={() => setIsFormOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

export default Supplier;
