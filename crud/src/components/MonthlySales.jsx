import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { getMothlySales } from '../services/methods/dashboard';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlySales = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMonthlySales = async () => {
      try {
        const data = await getMothlySales();
        if (data?.length > 0) {
          const labels = data.map((item) => item._id);
          const values = data.map((item) => item.totalEarnings);
          setChartData({
            labels,
            datasets: [
              {
                label: 'Ganancias Mensuales',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonthlySales();
  }, []);

  if (loading) return <h1>Cargando...</h1>;
  return <Bar data={chartData} />;
};

export default MonthlySales;
