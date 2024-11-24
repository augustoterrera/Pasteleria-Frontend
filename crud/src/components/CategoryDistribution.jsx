import { Pie } from 'react-chartjs-2';
import {  Chart as ChartJS,ArcElement,Tooltip,Legend,} from 'chart.js';
import { useEffect, useState } from 'react';
import { getCategoryDistribution } from '../services/methods/dashboard';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryDistribution = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(()=>{
        const fetchCategory = async()=>{
            try {
                const data = await getCategoryDistribution();
                if (data?.length > 0) {
                    const labels = data.map((item) => item._id);
                    const values = data.map((item) => item.count);
                    setChartData({
                      labels,
                      datasets: [
                        {
                          label: 'Productos por categoría',
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
                onsole.error('Error fetching category distribution:', error);
            }
        }

        fetchCategory();
    },[])

    if (!chartData) return <h1>Cargando...</h1>;
    return <Pie data={chartData} />;
}

export default CategoryDistribution