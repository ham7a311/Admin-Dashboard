
import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const weeklySalesData = [
	{ day: "Mon", revenue: 1093, target: 1000 },
	{ day: "Tue", revenue: 505, target: 750 },
	{ day: "Wed", revenue: 500, target: 1000 },
	{ day: "Thu", revenue: 2937, target: 1000 },
	{ day: "Fri", revenue: 3092, target: 5500 },
	{ day: "Sat", revenue: 405, target: 1000 },
	{ day: "Sun", revenue: 250, target: 500 },
];

const monthlySalesData = [
	{ month: "Jan", revenue: 20938, target: 10000 },
	{ month: "Feb", revenue: 10948, target: 5000 },
	{ month: "Mar", revenue: 8734, target: 4500 },
	{ month: "Apr", revenue: 9821, target: 4200 },
	{ month: "May", revenue: 4092, target: 5500 },
	{ month: "Jun", revenue: 5342, target: 5800 },
	{ month: "Jul", revenue: 2984, target: 6500 },
	{ month: "Aug", revenue: 1038, target: 3000 },
	{ month: "Sep", revenue: 3028, target: 2000 },
	{ month: "Oct", revenue: 3402, target: 5000 },
	{ month: "Nov", revenue: 5432, target: 6000 },
	{ month: "Dec", revenue: 9017, target: 8000 },
];
const quarterlySalesData = [
	{ quarter: "Q1 2024", revenue: 76353, target: 59580 },
	{ quarter: "Q2 2024", revenue: 60821, target: 24058 },
	{ quarter: "Q3 2024", revenue: 29844, target: 70958 },
	{ quarter: "Q4 2024", revenue: 10947, target: 20959 },
];
const yearlySalesData = [
	{ year: "2019", revenue: 109832, target: 10000 },
	{ year: "2020", revenue: 208453, target: 100000 },
	{ year: "2021", revenue: 298470, target: 200000 },
	{ year: "2022", revenue: 209471, target: 300000 },
	{ year: "2023", revenue: 309829, target: 350000 },
	{ year: "2024", revenue: 600928, target: 400000 },
	{ year: "2025", revenue: 7836, target: 6500 },
];

const RevenueChart = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("Month");
    
    let revenueData;

	// Determine which dataset to use based on the selected time range
	switch (selectedTimeRange) {
		case "Week":
			revenueData = weeklySalesData;
			break;
		case "Month":
			revenueData = monthlySalesData;
			break;
		case "Quarter":
			revenueData = quarterlySalesData;
			break;
		case "Year":
			revenueData = yearlySalesData;
			break;
		default:
			revenueData = monthlySalesData; // Default to monthly if something goes wrong
	}

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Revenue vs Target</h2>
				<select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={selectedTimeRange}
					onChange={(e) => setSelectedTimeRange(e.target.value)}
				>
					<option>Week</option>
					<option>Month</option>
					<option>Quarter</option>
					<option>Year</option>
				</select>
			</div>

			<div style={{ width: "100%", height: 400 }}>
				<ResponsiveContainer>
					<AreaChart data={revenueData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis 
							dataKey={
								selectedTimeRange === "Week" ? "day" : 
								selectedTimeRange === "Quarter" ? "quarter" : 
								selectedTimeRange === "Month" ? "month" : 
								"year"
							} 
							stroke='#9CA3AF' 
						/>
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Area type='monotone' dataKey='revenue' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
						<Area type='monotone' dataKey='target' stroke='#10B981' fill='#10B981' fillOpacity={0.3} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default RevenueChart;
