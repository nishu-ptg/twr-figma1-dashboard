import React, { useRef } from "react";
import { Chart, LineElement, PointElement, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineElement, PointElement, Filler);

const BalanceHistoryChart = ({ data }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        data: data.map((item) => item.value),
        borderColor: "#1814f3",
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          if (!chart.chartArea) return "transparent";

          const { ctx: canvasCtx, chartArea } = chart;
          const gradient = canvasCtx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "#cbd8ff");
          gradient.addColorStop(1, "#cbd8ff00");

          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: { display: false },
      tooltip: {
        displayColors: false,
      },
    },
    scales: {
      x: {
        border: {
          dash: [4, 4],
        },
        grid: {
          color: "#eff2f6",
          lineWidth: 2,
        },
        ticks: {
          font: {
            size: 14,
            family: "Inter",
          },
          color: "#718EBF",
        },
      },
      y: {
        border: {
          dash: [4, 4],
        },
        grid: {
          color: "#eff2f6",
          lineWidth: 2,
        },
        ticks: {
          stepSize: 200,
          font: {
            size: 12,
            family: "Inter",
          },
          color: "#718EBF",
        },
      },
    },
  };

  return (
    <div className="w-full h-[225px]">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default BalanceHistoryChart;
