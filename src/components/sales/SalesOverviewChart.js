import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

// Sample sales data for different time ranges
const weeklySalesData = [
	{ day: "Mon", sales: 1200 },
	{ day: "Tue", sales: 1500 },
	{ day: "Wed", sales: 800 },
	{ day: "Thu", sales: 2000 },
	{ day: "Fri", sales: 1700 },
	{ day: "Sat", sales: 2200 },
	{ day: "Sun", sales: 1900 },
];

const monthlySalesData = [
	{ month: "Jan", sales: 7621 },
	{ month: "Feb", sales: 2012 },
	{ month: "Mar", sales: 2201 },
	{ month: "Apr", sales: 1029 },
	{ month: "May", sales: 5322 },
	{ month: "Jun", sales: 5093 },
	{ month: "Jul", sales: 7432 },
	{ month: "Aug", sales: 6100 },
	{ month: "Sep", sales: 4800 },
	{ month: "Oct", sales: 7200 },
	{ month: "Nov", sales: 8500 },
	{ month: "Dec", sales: 9000 },
];

const quarterlySalesData = [
	{ quarter: "Q1 2024", sales: 11834 }, // Jan + Feb + Mar
	{ quarter: "Q2 2024", sales: 11444 }, // Apr + May + Jun
	{ quarter: "Q3 2024", sales: 18632 }, // Jul + Aug + Sep
	{ quarter: "Q4 2024", sales: 22700 }, // Oct + Nov + Dec
];

const yearlySalesData = [
	{ year: "2019", sales: 7621 },
	{ year: "2020", sales: 11290 },
	{ year: "2021", sales: 20304 },
	{ year: "2022", sales: 33021 },
	{ year: "2023", sales: 41092 },
	{ year: "2024", sales: 67982 },
	{ year: "2025", sales: 7432 },
];

const SalesOverviewChart = () => {
	const [selectedTimeRange, setSelectedTimeRange] = useState("Month");
	let chartData;

	// Determine which dataset to use based on the selected time range
	switch (selectedTimeRange) {
		case "Week":
			chartData = weeklySalesData;
			break;
		case "Month":
			chartData = monthlySalesData;
			break;
		case "Quarter":
			chartData = quarterlySalesData;
			break;
		case "Year":
			chartData = yearlySalesData;
			break;
		default:
			chartData = monthlySalesData; // Default to monthly if something goes wrong
	}

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>

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

			<div className='w-full h-80'>
				<ResponsiveContainer>
					<AreaChart data={chartData}>
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
						<Area type='monotone' dataKey='sales' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default SalesOverviewChart;