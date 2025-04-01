"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import styles from "./styles.module.scss";
import { ApexOptions } from "apexcharts";
import SaleCard from "@/components/SaleCard";
import PeopleIcon from "@mui/icons-material/People";
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
  const chartData = {
    series: [100, 200, 150, 250, 300, 350, 280],
  };
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.cards}>
        <SaleCard
          icon={<PeopleIcon fontSize="large" />}
          title="Tổng số user"
          total={714}
          percent={2.6}
          chart={chartData}
<<<<<<< HEAD
=======
          backgroundColor="#46b8da"
>>>>>>> 38ae0f2e7e9c5029da5b34db238a3d4841cb457d
        />
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
