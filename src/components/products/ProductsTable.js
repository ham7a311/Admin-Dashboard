
import { motion } from "framer-motion";
import { Edit, Search, Trash2, X, Check } from "lucide-react";
import { useState } from "react";


const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200, image: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww" },
	{ id: 2, name: "Real Madrid Jersey", category: "Sports", price: 39.99, stock: 89, sales: 3405, image: "data:image/jpeg;base64,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"},
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650, image: "data:image/jpeg;base64,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" },
	{ id: 4, name: "Barcelona Jersey", category: "Sports", price: 29.99, stock: 210, sales: 2034, image: "data:image/jpeg;base64,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" },
	{ id: 5, name: "Real Madrid Cap", category: "Sports", price: 79.99, stock: 78, sales: 832, image: "data:image/jpeg;base64,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" },
];

const ProductsTable = () => {
    
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
    const [editingProductId, setEditingProductId] = useState(null);
    const [editedProduct, setEditedProduct] = useState({ name: '', category: '', price: 0, stock: 0, sales: 0 });

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearch(term);
        const filtered = PRODUCT_DATA.filter(
            product => product.name.toLowerCase().includes(term) ||
                        product.category.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
    };

    const handleDelete = (id) => {
        // Filter out the product with the given id
        const updatedProducts = filteredProducts.filter(product => product.id !== id);
        setFilteredProducts(updatedProducts);
    };

    const handleEditClick = (product) => {
        setEditingProductId(product.id);
        setEditedProduct({ ...product }); // Copy the entire product object for editing
    };

    const handleSaveEdit = (id) => {
        const updatedProducts = filteredProducts.map(product => 
            product.id === id ? { ...product, ...editedProduct } : product
        );
        setFilteredProducts(updatedProducts);
        setEditingProductId(null); // Reset editing state
    };

    const handleCancelEdit = () => {
        setEditingProductId(null); // Reset editing state
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prev => ({
            ...prev,
            [name]: name === 'price' || name === 'stock' || name === 'sales' ? parseFloat(value) : value
        }));
    };

	return (
		<motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
                <div className='relative'>
                    <input
                        type='text'
                        placeholder='Search products...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={handleSearch}
                        value={search}
                    />
                    <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
                </div>
            </div>

            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Category</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Price</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Stock</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Sales</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-700'>
                    {filteredProducts.map((product) => (
                        <motion.tr
                            key={product.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                            {editingProductId === product.id ? (
                                    <input
                                        type='text'
                                        name='name'
                                        value={editedProduct.name}
                                        onChange={handleChange}
                                        className='bg-gray-600 text-white rounded-lg pl-2 pr-2 py-1'
                                    />
                                ) : (
                                        <>
                                    <img
                                    src={ product.image }
										alt='Product img'
										className='size-10 rounded-full'
									/>
									{product.name}
                                            </>
                                )}
								</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {
                                    product.category
                                }
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {editingProductId === product.id ? (
                                    <input
                                        type='number'
                                        name='price'
                                        value={editedProduct.price}
                                        onChange={handleChange}
                                        className='bg-gray-600 text-white rounded-lg pl-2 pr-2 py-1'
                                    />
                                ) : (
                                    `${product.price.toFixed(2)}`
                                )}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {editingProductId === product.id ? (
                                    <input
                                        type='number'
                                        name='stock'
                                        value={editedProduct.stock}
                                        onChange={handleChange}
                                        className='bg-gray-600 text-white rounded-lg pl-2 pr-2 py-1'
                                    />
                                ) : (
                                    product.stock
                                )}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {editingProductId === product.id ? (
                                    <input
                                        type='number'
                                        name='sales'
                                        value={editedProduct.sales}
                                        onChange={handleChange}
                                        className='bg-gray-600 text-white rounded-lg pl-2 pr-2 py-1'
                                    />
                                ) : (
                                    product.sales
                                )}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {editingProductId === product.id ? (
                                    <>
                                        <button 
                                            className='text-green-400 hover:text-green-300 bg-transparent focus:outline-none mr-2'
                                            onClick={() => handleSaveEdit(product.id)}
                                        >
                                            <Check size={21} />
                                        </button>
                                        <button 
                                            className='text-red-400 hover:text-red-300 bg-transparent focus:outline-none'
                                            onClick={handleCancelEdit}
                                        >
                                            <X size={ 21 }/>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button 
                                            className='text-indigo-400 hover:text-indigo-300 mr-2 bg-transparent focus:outline-none'
                                            onClick={() => handleEditClick(product)}
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button 
                                            className='text-red-400 hover:text-red-300 bg-transparent focus:outline-none'
                                            onClick={() => handleDelete(product.id)}
                                        >
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
export default ProductsTable;