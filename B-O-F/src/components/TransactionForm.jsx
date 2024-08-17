import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
// TODO: Add validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      date,
      description,
      amount: parseFloat(amount),
    };
    onAddTransaction(newTransaction);
    setDate('');
    setDescription('');
    setAmount('');
  };
// TODO: Add validation
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="grid gap-4 md:grid-cols-3 mb-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
