import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: faGoogle,
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: faFacebook,
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: faXTwitter,
		},
	]);

	const [showModal, setShowModal] = useState(false);
	const [newAccountName, setNewAccountName] = useState("");
	const [newAccountIcon, setNewAccountIcon] = useState("");

	const handleToggleConnection = (id) => {
		setConnectedAccounts(
			connectedAccounts.map((acc) => {
				if (acc.id === id) {
					return {
						...acc,
						connected: !acc.connected,
					};
				}
				return acc;
			})
		);
	};

	const handleAddAccount = () => {
		if (newAccountName && newAccountIcon) {
			setConnectedAccounts([
				...connectedAccounts,
				{
					id: connectedAccounts.length + 1,
					name: newAccountName,
					connected: false,
					icon: newAccountIcon,
				},
			]);
			setNewAccountName("");
			setNewAccountIcon("");
			setShowModal(false);
		}
	};

	return (
		<SettingSection icon={HelpCircle} title={"Connected Accounts"}>
			{connectedAccounts.map((account) => (
				<div key={account.id} className='flex items-center justify-between py-3'>
					<div className='flex items-center gap-2'>
						<FontAwesomeIcon 
							icon={account.icon} 
							size={25} 
							className={`${
								account.name === "Google" ? "text-red-500" :
								account.name === "Facebook" ? "text-blue-600" :
								account.name === "Twitter" ? "text-blue-400" :
								"text-gray-400"
							}`} 
						/>
						<span className='text-gray-300'>{account.name}</span>
					</div>
					<button
						className={`text-white font-bold py-1 px-3 rounded 
                        transition duration-200 focus:outline-none ${
							account.connected ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-600 hover:bg-gray-700"
						}`}
						onClick={() => handleToggleConnection(account.id)}
					>
						{account.connected ? "Connected" : "Connect"}
					</button>
				</div>
			))}
			<button 
				className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200 bg-transparent focus:outline-none'
				onClick={() => setShowModal(true)}
			>
				<Plus size={18} className='mr-2' /> Add Account
			</button>

			{/* Modal for Adding New Account */}
			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded shadow-lg">
						<h2 className="text-lg font-bold mb-4 text-indigo-600">Add New Account</h2>
						<input
							type="text"
							placeholder="Platform Name"
							value={newAccountName}
							onChange={(e) => setNewAccountName(e.target.value)}
							className="border border-gray-300 rounded p-2 mb-4 w-full text-black"
						/>
						<input
							type="text"
							placeholder="Platform Icon (faGoogle, faFacebook, faXTwitter)"
							value={newAccountIcon}
							onChange={(e) => setNewAccountIcon(e.target.value)}
							className="border border-gray-300 rounded p-2 mb-4 w-full text-black"
						/>
						<div className="flex justify-end">
							<button 
								className="bg-indigo-600 text-white px-4 py-2 rounded mr-2"
								onClick={handleAddAccount}
							>
								Add
							</button>
							<button 
								className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
								onClick={() => setShowModal(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</SettingSection>
	);
};

export default ConnectedAccounts;