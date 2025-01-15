import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const salesData = [
	{ name: "May", sales: 5467 },
	{ name: "Jun", sales: 6774 },
	{ name: "Jul", sales: 7881 },
	{ name: "Aug", sales: 6444 },
	{ name: "Sep", sales: 4533 },
	{ name: "Oct", sales: 7332 },
	{ name: "Nov", sales: 4330 },
    { name: "Dec", sales: 5222 },
    {name: "Jan", sales: 6253},
];

const sales = salesData.map(item => item.sales);
let sum = 0;
sales.map(sale => sum += sale);
let overallSales = sum.toLocaleString();
export { overallSales };

const SalesOverviewChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
            
            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
            
            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                        <XAxis dataKey={"name"} stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Line
                        type='monotone'
                        dataKey='sales'
                        stroke='dodgerblue'
                        strokeWidth={3}
                        dot={{ fill: "dodgerblue", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, strokeWidth: 2 }}
                    />
                    </LineChart>
                </ResponsiveContainer>
        </div>

		</motion.div>
	);
};
export default SalesOverviewChart;