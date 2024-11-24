import { Pie } from 'react-chartjs-2';
import {  Chart as ChartJS,ArcElement,Tooltip,Legend,} from 'chart.js';
import { useEffect, useState } from 'react';
import { getPaymentMethods } from '../services/methods/dashboard';


const PaymentMethods = () => {
    const [chartData, setChartData] = useState(null);
    useEffect(()=>{
        const fetchPaymentData = async()=>{
            try {
                const data = await getPaymentMethods();
                if (data?.length > 0) {
                    const labels = data.map((item) => item._id);
                    const values = data.map((item) => item.total);
                    setChartData({
                      labels,
                      datasets: [
                        {
                          label: 'Métodos de pagos más usados',
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
                console.error('Error fetching data: ', error);
            }
        }
        fetchPaymentData();
    },[])
    if (!chartData) return <h1>Cargando...</h1>;
    return <Pie data={chartData} />;
}

export default PaymentMethods