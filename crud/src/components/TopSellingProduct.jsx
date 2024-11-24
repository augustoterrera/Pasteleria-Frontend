import { useEffect, useState } from 'react';
import { getTopProducts } from '../services/methods/dashboard';

const TopSellingProduct = () => {
  const [productData, setProductData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const data = await getTopProducts();
        console.log(data); // Verifica que los datos lleguen correctamente
        setProductData(data || []); // Si no hay datos, establece un array vacío
      } catch (error) {
        console.error('Error fetching top products:', error);
      }
    };

    fetchTopProducts();
  }, []);

  if (productData.length === 0) return <h1>Cargando...</h1>;

  // Limitar a los top 5 productos
  const top5Products = productData.slice(0, 5);

  return (
    <div>
      <button
        onClick={() => setShow(!show)} // Alternar entre mostrar/ocultar
        className="reset-button"
      >
        {show ? 'Ocultar' : 'Mostrar Top 5 Productos'}
      </button>

      {show && (
        <ul>
          {top5Products.map((product, index) => (
            <li key={product._id}>
              <p><strong>{index + 1}. {product.name || 'Producto no registrado'}</strong></p>
              <p><strong>Total Vendido:</strong> {product.totalSold}</p>
              <p><strong>Ganancias Totales:</strong> {product.totalEarnings} USD</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopSellingProduct;
