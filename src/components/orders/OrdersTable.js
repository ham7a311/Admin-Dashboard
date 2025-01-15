import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Edit, X, Check, Trash2 } from "lucide-react";

const orderData = [
	{ id: "ORD001", customer: "ham7a311", total: 837.3, status: "Delivered", date: "01/01/2025" },
	{ id: "ORD002", customer: "John Doe", total: 412.0, status: "Processing", date: "01/01/2025" },
	{ id: "ORD003", customer: "Mohammed Ahmed", total: 162.5, status: "Shipped", date: "01/01/2025" },
	{ id: "ORD004", customer: "Faris", total: 750.2, status: "Pending", date: "02/01/2025" },
	{ id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "03/01/2025" },
	{ id: "ORD006", customer: "Alex", total: 310.75, status: "Processing", date: "04/01/2025" },
	{ id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "06/01/2025" },
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);
    const [editingOrder, setEditingOrder] = useState(null);
    const [tempOrder, setTempOrder] = useState({ id: "", customer: '', total: 0, status: '', date: '' });

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = orderData.filter(
            (order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
        );
        setFilteredOrders(filtered);
    };

    const handleEditClick = (order) => {
        setEditingOrder(order.id);
        setTempOrder(order);
    };

    const handleDeleteClick = (id) => {
        const updatedOrders = filteredOrders.filter(order => order.id !== id);
        setFilteredOrders(updatedOrders);
    };

    const handleSaveClick = () => {
        const updatedOrders = filteredOrders.map(order => 
            order.id === tempOrder.id ? tempOrder : order
        );
        setFilteredOrders(updatedOrders);
        setEditingOrder(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target; // Use name attribute to identify the field
        setTempOrder(prev => ({ ...prev, [name]: value }));
    };


	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search orders...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Order ID
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Customer
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Total
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Date
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide divide-gray-700'>
                    {filteredOrders.map((order) => (
                            <motion.tr
                                key={order.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                        {order.id}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                    {editingOrder === order.id ? (
                                        <input
                                            type='text'
                                            name='customer'
                                            value={tempOrder.customer}
                                            onChange={handleChange}
                                            className='bg-gray-700 text-white rounded-lg p-2'
                                        />
                                    ) : (
                                        order.customer
                                    )}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                    {`${order.total.toFixed(2)}`}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    {editingOrder === order.id ? (
                                        <select
                                            name='status'
                                            value={tempOrder.status}
                                            onChange={handleChange}
                                            className='bg-gray-700 text-white rounded-lg p-2'
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Pending">Pending</option>
                                        </select>
                                    ) : (
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                order.status === "Delivered"
                                                    ? "bg-green-300 text-green-800"
                                                    : order.status === "Processing"
                                                    ? "bg-yellow-300 text-yellow-800"
                                                    : order.status === "Shipped"
                                                    ? "bg-blue-300 text-blue-800"
                                                    : "bg-red-300 text-red-800"
                                            }`}
                                        >
                                            {order.status}
                                        </span>
                                    )}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    {editingOrder === order.id ? (
                                        <input
                                            type='text'
                                            name='date'
                                            value={tempOrder.date}
                                            onChange={handleChange}
                                            className='bg-gray-700 text-white rounded-lg p-2'
                                        />
                                    ) : (
                                        order.date
                                    )}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    {editingOrder === order.id ? (
                                        <>
                                            <button className='text-green-400 hover:text-green-300 mr-2 bg-transparent focus:outline-none' onClick={handleSaveClick}>
                                                <Check size={21} />
                                            </button>
                                            <button className='text-red-400 hover:text-red-300 bg-transparent focus:outline-none' onClick={() => setEditingOrder(null)}>
                                                <X size={21} />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className='text-indigo-400 hover:text-indigo-300 mr-2 bg-transparent focus:outline-none' onClick={() => handleEditClick(order)}>
                                                <Edit size={18} />
                                            </button>
                                            <button className='text-red-400 hover:text-red-300 bg-transparent focus:outline-none' onClick={() => handleDeleteClick(order.id)}>
                                                <Trash2 size={18} />
                                            </button>
                                        </>
                                    )}
                                </td>
                            </motion.tr>
                        ))}

					</tbody>
                </table>
                
                
			</div>
            
		</motion.div>
	);
};
export default OrdersTable;
