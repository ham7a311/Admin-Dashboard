
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const userActivityData = [
	{ name: "Mon", "0-4": 50, "4-8": 20, "8-12": 39, "12-16": 190, "16-20": 90, "20-24": 40 },
	{ name: "Tue", "0-4": 90, "4-8": 40, "8-12": 43, "12-16": 89, "16-20": 190, "20-24": 53 },
	{ name: "Wed", "0-4": 82, "4-8": 80, "8-12": 89, "12-16": 79, "16-20": 187, "20-24": 42 },
	{ name: "Thu", "0-4": 91, "4-8": 71, "8-12": 103, "12-16": 90, "16-20": 149, "20-24": 41 },
	{ name: "Fri", "0-4": 192, "4-8": 189, "8-12": 187, "12-16": 144, "16-20": 134, "20-24": 155 },
	{ name: "Sat", "0-4": 81, "4-8": 61, "8-12": 79, "12-16": 110, "16-20": 109, "20-24": 103 },
	{ name: "Sun", "0-4": 193, "4-8": 192, "8-12": 155, "12-16": 91, "16-20": 166, "20-24": 82 },
];

const UserActivityHeatmap = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Activity Heatmap</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={userActivityData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='0-4' stackId='a' fill='#6366F1' />
						<Bar dataKey='4-8' stackId='b' fill='#8B5CF6' />
						<Bar dataKey='8-12' stackId='c' fill='#EC4899' />
						<Bar dataKey='12-16' stackId='d' fill='#10B981' />
						<Bar dataKey='16-20' stackId='e' fill='#F59E0B' />
						<Bar dataKey='20-24' stackId='f' fill='#3B82F6' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserActivityHeatmap;
