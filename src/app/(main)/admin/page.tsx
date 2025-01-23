'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const VITALS_GRADIENTS = {
    DEFAULT: "bg-[radial-gradient(circle_at_top_left,_#FBFFFF,_#80E9FE)]",
    NORMAL: "bg-[radial-gradient(circle_at_top_left,_#34D399,_#059669)]",
    HIGH_BP: "bg-[radial-gradient(circle_at_top_left,_#FACC15,_#CA8A04)]",
    LOW_BP: "bg-[radial-gradient(circle_at_top_left,_#60A5FA,_#2563EB)]",
    HIGH_HR: "bg-[radial-gradient(circle_at_top_left,_#F87171,_#B91C1C)]",
    LOW_HR: "bg-[radial-gradient(circle_at_top_left,_#A78BFA,_#6D28D9)]",
    SEVERE: "bg-[radial-gradient(circle_at_top_left,_#EF4444,_#991B1B)]",
};

const AdminPage = () => {
    const [bloodPressure, setBloodPressure] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [gradient, setGradient] = useState(VITALS_GRADIENTS.DEFAULT);
    const [statusMessage, setStatusMessage] = useState('Waiting for Input');
    const [isAbnormal, setIsAbnormal] = useState(false);

    const handleToggle = () => {
        setIsEnabled(!isEnabled);
        if (!isEnabled) {
            setGradient(VITALS_GRADIENTS.DEFAULT);
            setStatusMessage('Waiting for Input');
            setIsAbnormal(false);
            setBloodPressure('');
            setHeartRate('');
        }
    };

    const handleVitalsChange = () => {
        const bp = parseInt(bloodPressure, 10);
        const hr = parseInt(heartRate, 10);

        if (isNaN(bp) || isNaN(hr) || bp < 50 || bp > 250 || hr < 30 || hr > 200) {
            setGradient(VITALS_GRADIENTS.DEFAULT);
            setStatusMessage('Waiting for Input');
            setIsAbnormal(false);
            return;
        }

        // Severe Conditions (extremely high or low)
        if (bp > 200 || hr > 150) {
            setGradient(VITALS_GRADIENTS.SEVERE);
            setStatusMessage('Abnormal: Severe Condition');
            setIsAbnormal(true);
        }
        // High Blood Pressure (but not severe)
        else if (bp > 180) {
            setGradient(VITALS_GRADIENTS.HIGH_BP);
            setStatusMessage('Abnormal: High Blood Pressure');
            setIsAbnormal(true);
        }
        // Low Blood Pressure (but not severe)
        else if (bp < 60) {
            setGradient(VITALS_GRADIENTS.LOW_BP);
            setStatusMessage('Abnormal: Low Blood Pressure');
            setIsAbnormal(true);
        }
        // High Heart Rate
        else if (hr > 100) {
            setGradient(VITALS_GRADIENTS.HIGH_HR);
            setStatusMessage('Abnormal: High Heart Rate');
            setIsAbnormal(true);
        }
        // Low Heart Rate
        else if (hr < 60) {
            setGradient(VITALS_GRADIENTS.LOW_HR);
            setStatusMessage('Abnormal: Low Heart Rate');
            setIsAbnormal(true);
        }
        // Normal BP and HR
        else if (bp >= 90 && bp <= 120 && hr >= 60 && hr <= 100) {
            setGradient(VITALS_GRADIENTS.NORMAL);
            setStatusMessage('Normal');
            setIsAbnormal(false);
        }
        // Any other cases that don't fit into the above (combination cases)
        else {
            setGradient(VITALS_GRADIENTS.DEFAULT);
            setStatusMessage('Waiting for Input');
            setIsAbnormal(false);
        }
    };

    // Real-time validation trigger on each input change
    useEffect(() => {
        if (isEnabled) {
            handleVitalsChange();
        }
    }, [bloodPressure, heartRate, isEnabled]);

    return (
        <div className={clsx("flex flex-col items-center justify-center w-full h-full p-8 text-center", gradient)}>
            <div className="flex items-center space-x-4 mb-8">
                <span className="text-lg font-medium text-black">Accept Inputs</span>
                <button
                    onClick={handleToggle}
                    className={clsx(
                        "w-12 h-6 rounded-full p-1 transition-all",
                        isEnabled ? "bg-green-500" : "bg-gray-600"
                    )}
                >
                    <span
                        className={clsx(
                            "block w-4 h-4 bg-white rounded-full transition-transform",
                            isEnabled ? "translate-x-6" : "translate-x-0"
                        )}
                    />
                </button>
            </div>

            {isEnabled && (
                <form className="flex flex-col items-center bg-white/10 p-8 rounded-lg shadow-xl space-y-4 w-full max-w-md">
                    <div className="flex flex-col w-full">
                        <label htmlFor="bloodPressure" className="text-left text-sm mb-1 text-black">
                            Blood Pressure (mmHg)
                        </label>
                        <input
                            type="number"
                            id="bloodPressure"
                            value={bloodPressure}
                            onInput={(e) => setBloodPressure((e.target as HTMLInputElement).value)}
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-black outline-none"
                            placeholder="Enter Blood Pressure"
                            min="50" max="250"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="heartRate" className="text-left text-sm mb-1 text-black">
                            Heart Rate (bpm)
                        </label>
                        <input
                            type="number"
                            id="heartRate"
                            value={heartRate}
                            onInput={(e) => setHeartRate((e.target as HTMLInputElement).value)}
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-black outline-none"
                            placeholder="Enter Heart Rate"
                            min="30" max="200"
                        />
                    </div>

                    <div className="flex flex-col w-full mt-4">
                        <span className="text-lg font-medium text-black">
                            Status: {statusMessage}
                        </span>
                    </div>

                    {isAbnormal && (
                        <button
                            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700"
                            onClick={() => alert("Contacting helpline...")}
                        >
                            Contact Helpline
                        </button>
                    )}
                </form>
            )}
        </div>
    );
};

export default AdminPage;
