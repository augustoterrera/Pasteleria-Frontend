import { useState, useEffect } from 'react';
import { getMarginProduct } from '../services/methods/dashboard';

const AverageMargin = () => {
  const [avgMargin, setAvgMargin] = useState(null);

  useEffect(() => {
    const fetchAvgMargin = async () => {
      try {
        const data = await getMarginProduct();
        setAvgMargin(data?.avgMargin || 0);
      } catch (error) {
        console.error('Error fetching average margin:', error);
      }
    };

    fetchAvgMargin();
  }, []);

  if (avgMargin === null) return <h1>Cargando...</h1>;

  return (
    <div>
      <p>{avgMargin.toFixed(2)} USD</p>
    </div>
  );
};

export default AverageMargin;
