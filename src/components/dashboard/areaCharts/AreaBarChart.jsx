import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    loss: 70,
    profit: 100,
  },
  {
    month: "Feb",
    loss: 55,
    profit: 85,
  },
  {
    month: "Mar",
    loss: 35,
    profit: 90,
  },
  {
    month: "April",
    loss: 90,
    profit: 70,
  },
  {
    month: "May",
    loss: 55,
    profit: 80,
  },
  {
    month: "Jun",
    loss: 30,
    profit: 50,
  },
  {
    month: "Jul",
    loss: 32,
    profit: 75,
  },
  {
    month: "Aug",
    loss: 62,
    profit: 86,
  },
  {
    month: "Sep",
    loss: 55,
    profit: 78,
  },
];

const AreaBarChart = () => {
  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };
  return (
    <div className="bar-chart-wrapper">
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" axisLine={false} />
          <YAxis tickFormatter={formatYAxisLabel} tickCount={6} axisLine={false} />
          <Tooltip formatter={formatTooltipValue} />
          <Legend
            iconType="circle"
            iconSize={10} // Customize legend icon size using CSS styling
            // layout="vertical" // Position legend to top right of the chart
            verticalAlign="top"
            align="right"
          />
          <Bar
            dataKey="profit"
            fill="#475BE8"
            radius={[5, 5, 0, 0]}
            barSize={24}
          />
          <Bar
            dataKey="loss"
            fill="#E3E7FC"
            radius={[5, 5, 0, 0]}
            barSize={24}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaBarChart;
