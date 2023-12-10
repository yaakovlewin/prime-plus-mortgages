"use client";
import React, { useState } from "react";

export default function MortgageCalculator() {
    const [principal, setPrincipal] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [years, setYears] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState("");

    const calculateMortgage = (e) => {
        e.preventDefault();

        const principalAmount = parseFloat(principal);
        const calculatedInterest = parseFloat(interestRate) / 100 / 12;
        const calculatedPayments = parseFloat(years) * 12;

        // Monthly payment formula
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principalAmount * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            setMonthlyPayment(monthly.toFixed(2));
        } else {
            setMonthlyPayment("Invalid input");
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-center mb-6">
                Mortgage Calculator
            </h2>
            <form onSubmit={calculateMortgage} className="max-w-xl mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Principal Amount (£)
                    </label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Interest Rate (%)
                    </label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Loan Term (Years)
                    </label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                    Calculate
                </button>
                {monthlyPayment && (
                    <div className="mt-4">
                        <label className="block text-gray-700">
                            Monthly Payment:
                        </label>
                        <div className="px-3 py-2 border rounded">
                            £{monthlyPayment}
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
