import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const WeeklyActivityChart = ({ data = [] }) => {
  const labels = data?.map((item) => item?.days) ?? [];
  const depositData = data?.map((item) => item?.deposit ?? 0) ?? [];
  const withdrawData = data?.map((item) => item?.withdraw ?? 0) ?? [];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Deposit",
        data: depositData,
        backgroundColor: "#1814f3",
        borderWidth: 0,
        maxBarThickness: 15,
        borderRadius: 7.5,
        borderSkipped: false,
      },
      {
        label: "Withdraw",
        data: withdrawData,
        backgroundColor: "#16dbcc",
        borderWidth: 0,
        maxBarThickness: 15,
        borderRadius: 7.5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          font: {
            family: "Inter",
            size: 14,
          },
          usePointStyle: true,
          pointStyle: "circle",
          boxHeight: 10,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "Inter",
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 100,
          font: {
            family: "Inter",
            size: 12,
          },
        },
        grid: {
          lineWidth: 1,
          drawOnChartArea: true,
          color: "#F3F3F5",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} height={270} />;
};

export default WeeklyActivityChart;
