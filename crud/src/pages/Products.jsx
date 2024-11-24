import { useState, useEffect } from 'react';
import { getProducts, updateProduct, deleteProduct, addProduct } from '../services/methods/products.js';
import ProductList from '../components/ProductList';

const Products = () => {
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [formPosition, setFormPosition] = useState(null);

  const fetchingProducts = async () => {
    const products = await getProducts();
    console.log(products);
    setData(products);
  };

  useEffect(() => {
    fetchingProducts();
  }, []);

  const handleEdit = (item, index) => {
    setCurrentItem(item);
    setIsFormOpen(true);
    setFormPosition(index + 1);
  };

  const handleAdd = () => {
    setCurrentItem(null);
    setIsFormOpen(true);
    setFormPosition(0);
  };

  const handleSave = async (item) => {
    if (item._id) {
      await updateProduct(item._id, item);
    } else {
      await addProduct(item);
    }
    setIsFormOpen(false); 
    fetchingProducts(); 
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchingProducts();
  };

  return (
    <ProductList
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
  );
};

export default Products;
