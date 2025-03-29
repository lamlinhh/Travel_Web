import React from "react";
import { Card } from "antd";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { ArrowUpOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const AnalyticsWidgetSummary = ({
  icon,
  title,
  total,
  percent,
  chart,
  backgroundColor,
}: any) => {
  return (
    <Card className={styles.widgetCard} style={{ backgroundColor }}>
      {/* Icon */}
      <div className={styles.widgetIcon}>{icon}</div>

      <div className={styles.trending}>
        <ArrowUpOutlined />
        <span>+{percent}%</span>
      </div>

      {/* Nội dung */}
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <h2 className={styles.total}>{total.toLocaleString()}k</h2>
        </div>
        <div className={styles.chart}>
          <ResponsiveContainer width={90} height={50}>
            <LineChart
              data={chart.series.map((value: any, index: any) => ({
                x: index,
                y: value,
              }))}>
              <Line
                type="monotone"
                dataKey="y"
                stroke="#0044CC"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default AnalyticsWidgetSummary;
