// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
// import 'chartjs-plugin-filler';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ labels, data }) => {
  // Data for the chart
  const chartData = {
    labels: labels || [],
    datasets: [
      {
        label: 'Views',
        data: data || [],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Chart options for responsiveness
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: Math.max(...(data || []), 600), // Dynamic max value
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <div className="lg:w-full w-[325px] h-52 p-2">
      <h2 className="mb-2 text-sm sm:text-lg md:text-xl font-semibold">
        View Accommodation
      </h2>
      <div className="h-full">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
