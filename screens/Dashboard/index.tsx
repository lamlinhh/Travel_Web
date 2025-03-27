"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import styles from "./styles.module.scss";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const dataUsers = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 150 },
  { month: "Mar", users: 180 },
  { month: "Apr", users: 200 },
  { month: "May", users: 250 },
  { month: "Jun", users: 300 },
  { month: "Jul", users: 280 },
  { month: "Aug", users: 320 },
  { month: "Sep", users: 310 },
];

const dataTours = [
  { label: "Asia", value: 400 },
  { label: "Europe", value: 300 },
  { label: "America", value: 500 },
  { label: "Africa", value: 200 },
];

const Index = () => {
  const theme = useTheme();

  const chartColors = [
    theme.palette.primary.main,
    theme.palette.warning.main,
    theme.palette.secondary.dark,
    theme.palette.error.main,
  ];

  const pieChartOptions: ApexOptions = {
    chart: { sparkline: { enabled: true } },
    labels: dataTours.map((item) => item?.label),
    colors: chartColors,
    stroke: { width: 0 },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      y: {
        formatter: (value: number) => value.toLocaleString(),
        title: { formatter: (seriesName: string) => `${seriesName}` },
      },
    },
    plotOptions: { pie: { donut: { labels: { show: false } } } },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        size: 8,
      },
    },
  };

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.cards}>
        <div className={styles.card} style={{ background: "#f3f4f6" }}>
          <h3>Total Users</h3>
          <p>1.35M</p>
        </div>
        <div className={styles.card} style={{ background: "#fef3c7" }}>
          <h3>Total Tours</h3>
          <p>1.72M</p>
        </div>
      </div>

      <div className={styles.charts}>
        <div className={styles.chartContainer}>
          <h3>Users Growth</h3>
          <Chart
            type="bar"
            series={[
              { name: "Users", data: dataUsers.map((item) => item.users) },
            ]}
            options={{
              chart: { id: "users-bar-chart" },
              xaxis: { categories: dataUsers.map((item) => item.month) },
            }}
            width="100%"
            height={300}
          />
        </div>
        <div className={styles.chartContainer}>
          <h3>Tour Distribution</h3>
          <Chart
            type="pie"
            series={dataTours.map((item) => item.value)}
            options={pieChartOptions}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
