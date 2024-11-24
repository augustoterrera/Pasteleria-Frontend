import { useState, useEffect } from 'react';
import { getTopSuppliers } from '../services/methods/dashboard';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend, 
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopSuppliers = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchTopSuppliers = async () => {
      try {
        const data = await getTopSuppliers();
        if (data?.length > 0) {
          const labels = data.map((item) => item.name);
          const values = data.map((item) => item.productsCount);
          setChartData({
            labels,
            datasets: [
              {
                label: 'Productos por Proveedor',
                data: values,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching top suppliers:', error);
      }
    };

    fetchTopSuppliers();
  }, []);

  if (!chartData) return <h1>Cargando...</h1>;
  return <Pie data={chartData} />;
};

export default TopSuppliers;
