"use client";
import React, { useState } from "react";
import Heading2 from "../Heading2";

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
    <div className="container mx-auto px-4 2xl:py-12">
      <Heading2>Calculate Your Mortgage repayments</Heading2>
      <form onSubmit={calculateMortgage} className="mx-auto max-w-xl">
        <div className="mb-4">
          <label className="block text-gray-700">Loan Amount (£)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Loan Term (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-cyan-500 px-4 py-2 font-bold text-white hover:bg-cyan-600"
        >
          Calculate
        </button>
        {monthlyPayment && (
          <div className="mt-4">
            <label className="block text-gray-700">Monthly Payment:</label>
            <div className="rounded border px-3 py-2">£{monthlyPayment}</div>
          </div>
        )}
      </form>
    </div>
  );
}
