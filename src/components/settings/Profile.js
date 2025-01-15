import { User, Check, X } from "lucide-react";
import SettingSection from "./SettingSection";
import { useState } from "react";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("ham7a311");
    const [email, setEmail] = useState("hamza@example.com");
    const [originalName, setOriginalName] = useState(name);
    const [originalEmail, setOriginalEmail] = useState(email);

    const handleEditClick = () => {
        setOriginalName(name); // Store original values to revert if needed
        setOriginalEmail(email);
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Here you can also add logic to save the updated name and email to a backend or local storage if needed
    };

    const handleCancelClick = () => {
        setName(originalName); // Revert to original values
        setEmail(originalEmail);
        setIsEditing(false);
    };

    return (
        <SettingSection icon={User} title={"Profile"}>
            <div className='flex flex-col sm:flex-row items-center mb-6'>
                <img
                    src={'https://randomuser.me/api/portraits/men/3.jpg'}
                    alt='Profile'
                    className='rounded-full w-20 h-20 object-cover mr-4'
                />

                <div className='flex flex-col'>
                    {isEditing ? (
                        <>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='bg-gray-700 text-white rounded-lg p-2 mb-2'
                                placeholder='Enter your name'
                            />
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-gray-700 text-white rounded-lg p-2'
                                placeholder='Enter your email'
                            />
                        </>
                    ) : (
                        <>
                            <h3 className='text-lg font-semibold text-gray-100'>{name}</h3>
                            <p className='text-gray-400'>{email}</p>
                        </>
                    )}
                </div>
            </div>

            {isEditing ? (
                <div className='flex space-x-2'>
                    <button
                        className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto focus:outline-none'
                        onClick={handleSaveClick}
                    >
                        <Check size={ 25 }/>
                    </button>
                    <button
                        className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto focus:outline-none'
                        onClick={handleCancelClick}
                    >
                        <X size={ 25 }/>
                    </button>
                </div>
            ) : (
                <button
                    className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto focus:outline-none'
                    onClick={handleEditClick}
                >
                    Edit Profile
                </button>
            )}
        </SettingSection>
    );
};

export default Profile;