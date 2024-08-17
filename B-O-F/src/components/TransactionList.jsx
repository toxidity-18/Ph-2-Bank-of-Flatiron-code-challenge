import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDelete }) {
  return (
    <ul className="space-y-4">
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TransactionList;
