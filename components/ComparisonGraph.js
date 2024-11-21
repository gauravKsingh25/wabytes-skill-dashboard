"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ComparisonGraph() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // To store the Chart instance

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy existing Chart instance before creating a new one
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [0, 20, 40, 60, 80, 100],
          datasets: [
            {
              label: "Students",
              data: [0, 20, 60, 40, 30, 10],
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart instance on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Comparison Graph</h2>
      <p className="mb-4">
        You scored 30% percentile which is lower than the average percentile 72%
        of all the engineers who took this assessment
      </p>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}
