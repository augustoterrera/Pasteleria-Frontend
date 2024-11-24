import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { useEffect, useState } from 'react';
import { getSalesTrends } from '../services/methods/dashboard';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const SalesTrends = () => {
    const [chartData, setChartData]= useState(null);
    useEffect(()=>{
        const fetchSalesTrends = async()=>{
            try {
                const data = await getSalesTrends();
                if (data?.length > 0){
                    const labels = data.map((item) => item._id);
                    const values = data.map((item) => item.dailyEarnings);
                    setChartData({
                        labels,
                        datasets:[{
                            label:'Ganancias diarias',
                            data: values,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.4,
                        }]
                    })
                }
            } catch (error) {
                console.error('Error fetching sales trends: ', error);
            }
        }
        fetchSalesTrends();
    },[])
    if (!chartData) return <h1>Cargando...</h1>;
    return <Line data={chartData} />;

}

export default SalesTrends