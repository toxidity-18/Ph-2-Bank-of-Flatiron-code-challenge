import React from 'react';

function TransactionItem({ transaction, onDelete }) {
  const { date, description, amount } = transaction;
  return (
    <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <div className="text-gray-600">{date}</div>
        <div className="font-semibold">{description}</div>
      </div>
      <span className={`text-lg ${amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
        {amount < 0 ? `-${Math.abs(amount).toFixed(2)}` : `+${amount.toFixed(2)}`}
      </span>
      <button onClick={() => onDelete(transaction.id)} className="text-red-500 hover:underline">
        Delete
      </button>
    </li>
  );
}

export default TransactionItem;
