import { useState } from 'react';
import { motion } from "framer-motion";
import { Edit, Search, Trash2, Check, X } from "lucide-react";



const userData = [
	{ id: 1, name: "ham7a311", email: "hamza@example.com", role: "Admin", status: "Active" },
	{ id: 2, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 3, name: "Mohammed Ahmed", email: "moh@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Faris", email: "faris@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Alex", email: "alex@example.com", role: "Moderator", status: "Inactive" },
];


function UsersTable() {
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(userData);
    const [editingUser, setEditingUser] = useState(null);
    const [tempUser, setTempUser] = useState({ name: '', email: '', role: '', status: '' });

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearch(term);
        const filtered = userData.filter(
            (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    };

    const handleEditClick = (user) => {
        setEditingUser(user.id);
        setTempUser(user);
    };

    const handleDeleteClick = (id) => {
        const updatedUsers = filteredUsers.filter(user => user.id !== id);
        setFilteredUsers(updatedUsers);
    };

    const handleSaveClick = () => {
        const updatedUsers = filteredUsers.map(user => 
            user.id === tempUser.id ? tempUser : user
        );
        setFilteredUsers(updatedUsers);
        setEditingUser(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Users</h2>
                <div className='relative'>
                    <input
                        type='text'
                        placeholder='Search Users...'
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
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Email</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Role</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-700'>
                        {filteredUsers.map((user) => (
                            <motion.tr
                                key={user.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    {editingUser === user.id ? (
                                        <input
                                            type='text'
                                            name='name'
                                            value={tempUser.name}
                                            onChange={handleChange}
                                            className='bg-gray-700 text-white rounded-lg p-1'
                                        />
                                    ) : (
                                        <div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
												{user.name.charAt(0)}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-gray-100'>{user.name}</div>
										</div>
									</div>
                                    )}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    {editingUser === user.id ? (
                                        <input
                                            type='email'
                                            name='email'
                                            value={tempUser.email}
                                            onChange={handleChange}
                                            className='bg-gray-700 text-white rounded-lg p-1'
                                        />
                                    ) : (
                                        <div className='text-sm text-gray-300'>{user.email}</div>
                                    )}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    {editingUser === user.id ? (
                                        <input
                                            type='text'
                                            name='role'
                                            value={tempUser.role}
                                            onChange={handleChange}
                                            className='bg-gray-700 text-white rounded-lg p-1'
                                        />
                                    ) : (
                                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
                                            {user.role}
                                        </span>
                                    )}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    {editingUser === user.id ? (
                                        <select
                                            name='status'
                                            value={tempUser.status}
                                            onChange={handleChange}
                                            className='bg-gray-700 text-white rounded-lg p-1'
                                        >
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    ) : (
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "Active" ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"}`}>
                                            {user.status}
                                        </span>
                                    )}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    {editingUser === user.id ? (
                                        <>
                                            <button className='text-green-400 hover:text-green-300 mr-2 bg-transparent focus:outline-none' onClick={handleSaveClick}><Check size={ 21 }/></button>
                                            <button className='text-red-400 hover:text-red-300 bg-transparent focus:outline-none' onClick={() => setEditingUser(null)}><X size={ 21 }/></button>
                                        </>
                                    ) : (
                                        <>
                                            <button className='text-indigo-400 hover:text-indigo-300 mr-2 bg-transparent focus:outline-none' onClick={() => handleEditClick(user)}><Edit size={18} /></button>
                                            <button className='text-red-400 hover:text-red-300 bg-transparent focus:outline-none' onClick={() => handleDeleteClick(user.id)}><Trash2 size={18} /></button>
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
}

export default UsersTable
