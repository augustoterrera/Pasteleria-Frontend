import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { getWeeklySales } from '../services/methods/dashboard';
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

const WeeklySales = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchWeeklySales = async () => {
      try {
        const data = await getWeeklySales();
        if (data?.length > 0) {
          const labels = data.map((item) => `Semana ${item._id.week} (${item._id.year})`);
          const values = data.map((item) => item.totalEarnings);
          setChartData({
            labels,
            datasets: [
              {
                label: 'Ganancias Semanales',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchWeeklySales();
  }, []);

  if (!chartData) return <h1>Cargando...</h1>;
  return <Bar data={chartData} />;
};

export default WeeklySales;
