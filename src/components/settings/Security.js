import { Lock, Eye, EyeOff, Check, X } from "lucide-react"; // Import Eye and EyeOff icons
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
    const [twoFactor, setTwoFactor] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const handleSaveChanges = () => {
        // Logic to save the new password goes here
        console.log("Current Password:", currentPassword);
        console.log("New Password:", newPassword);
        // Reset fields and close the password change form
        setCurrentPassword("");
        setNewPassword("");
        setIsChangingPassword(false);
    };

    const handleCancelChanges = () => {
        // Reset fields and close the password change form
        setCurrentPassword("");
        setNewPassword("");
        setIsChangingPassword(false);
    };

    return (
        <SettingSection icon={Lock} title={"Security"}>
            <ToggleSwitch
                label={"Two-Factor Authentication"}
                isOn={twoFactor}
                onToggle={() => setTwoFactor(!twoFactor)}
            />
            <div className='mt-4'>
                {!isChangingPassword ? (
                    <button
                        className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
                        transition duration-200 focus:outline-none'
                        onClick={() => setIsChangingPassword(true)}
                    >
                        Change Password
                    </button>
                ) : (
                    <div className='flex flex-col mt-4'>
                        <div className='relative mb-2'>
                            <input
                                type={showCurrentPassword ? 'text' : 'password'}
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className='bg-gray-700 text-white rounded-lg p-2 w-full'
                                placeholder='Current Password'
                            />
                            <button
                                type='button'
                                className='absolute right-2 top-2 bg-transparent text-indigo-400 hover:text-indigo-300 focus:outline-none'
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            >
                                {showCurrentPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>
                        <div className='relative mb-2'>
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className='bg-gray-700 text-white rounded-lg p-2 w-full'
                                placeholder='New Password'
                            />
                            <button
                                type='button'
                                className='absolute right-2 top-2 bg-transparent text-indigo-400 hover:text-indigo-300 focus:outline-none'
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>
                        <div className='flex space-x-2'>
                            <button
                                className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded 
                                transition duration-200 focus:outline-none'
                                onClick={handleSaveChanges}
                            >
                                    <Check size={ 25 }/>
                            </button>
                            <button
                                className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
                                transition duration-200 focus:outline-none'
                                onClick={handleCancelChanges}
                            >
                                <X size={ 25 }/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </SettingSection>
    );
};

export default Security;