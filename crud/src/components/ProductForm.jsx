import { useState, useEffect } from "react";
const ProductForm = ({ item, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      name: '',
      category: '',
      price: 0,
      description: '',
      stock: 0,
      image: ''
    });
  
    useEffect(() => {
      if (item) {
        setFormData({
          name: item.name || '',
          category: item.category || '',
          price: item.price || 0,
          description: item.description || '',
          stock: item.stock || 0,
          image: item.image || ''
        });
      }
    }, [item]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const updatedItem = {
          ...formData,
          _id: item?._id, 
        };
      
        onSave(updatedItem);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del producto:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Imagen URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="waves-effect waves-light btn-small #4caf50 green">
          Guardar
        </button>
        <button type="button" className="waves-effect waves-light btn-small #d50000 red accent-4" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    );
};

export default ProductForm;
