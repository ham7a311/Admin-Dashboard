import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const DangerZone = ({ onDelete }) => {
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleDeleteClick = () => {
		setShowConfirmation(true);
	};

	const confirmDelete = () => {
		if (onDelete) {
			onDelete(); // Call the delete function passed as a prop
		}
		// Log the user out after deletion
		logoutUser();
	};

	const cancelDelete = () => {
		setShowConfirmation(false);
	};

	const logoutUser = () => {
		// Clear user data (e.g., from local storage)
		localStorage.removeItem("userToken"); // Example: remove user token
		// Redirect to login page or home page
		window.location.href = "/login"; // Change this to your login route
	};

	return (
		<motion.div
			className='bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className='flex items-center mb-4'>
				<Trash2 className='text-red-400 mr-3' size={24} />
				<h2 className='text-xl font-semibold text-gray-100'>Danger Zone</h2>
			</div>
			<p className='text-gray-300 mb-4'>Permanently delete your account and all of your content.</p>
			<button
				className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200 focus:outline-none'
				onClick={handleDeleteClick}
			>
				Delete Account
			</button>

			{/* Confirmation Modal */}
			{showConfirmation && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded shadow-lg">
						<h2 className="text-lg font-bold mb-4 text-red-600">Confirm Deletion</h2>
						<p className="mb-4 text-black">Are you sure you want to permanently delete your account? This action cannot be undone.</p>
						<div className="flex justify-end">
							<button
								className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2'
								onClick={confirmDelete}
							>
								Yes, Delete
							</button>
							<button
								className='bg-gray-300 text-gray-700 px-4 py-2 rounded'
								onClick={cancelDelete}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default DangerZone;