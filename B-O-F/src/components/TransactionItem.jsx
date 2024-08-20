import React from 'react';

function TransactionItem({ transaction, onDelete }) {
  const { date, description, amount } = transaction;

  // Ensure amount is a number
  const numericAmount = parseFloat(amount);
  const formattedAmount = !isNaN(numericAmount) ? numericAmount.toFixed(2) : '0.00';

  return (
    <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <div className="text-gray-600">{date}</div>
        <div className="font-semibold">{description}</div>
      </div>
      <span className={`text-lg ${numericAmount < 0 ? 'text-red-500' : 'text-green-500'}`}>
        {`$${formattedAmount}`}
      </span>
      <button onClick={() => onDelete(transaction.id)} className="text-red-500 hover:underline">
        Delete
      </button>
    </li>
  );
}

export default TransactionItem;
