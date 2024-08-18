import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios.get('https://bot-project-backend.vercel.app/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const handleSort = (key) => {
    const sorted = [...filteredTransactions].sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setFilteredTransactions(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="App bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Recent Transactions</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="mb-4 flex space-x-4">
        <button onClick={() => handleSort('description')} className="bg-gray-200 p-2 rounded">
          Sort by Description
        </button>
        <button onClick={() => handleSort('date')} className="bg-gray-200 p-2 rounded">
          Sort by Date
        </button>
      </div>
      <TransactionList transactions={filteredTransactions} onDelete={handleDelete} />
    </div>
  );
}

export default App;
