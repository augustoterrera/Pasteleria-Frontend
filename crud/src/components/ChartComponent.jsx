import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const ChartComponent = ({ type, data, options }) => {
    const Chart = type === 'bar' ? Bar : type === 'line' ? Line : Pie;

    return <Chart data={data} options={options} />;
};

export default ChartComponent;
