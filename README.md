
# Transaction Tracker(B-O-F:Bank of flatiron)
Description

  Transaction Tracker is a React application designed to manage and view bank transactions. It provides a user interface to display, add, search, and manage transactions. The app integrates with a local JSON server to fetch transaction data.
  Features

    View Transactions: Display a list of all recent transactions.
    Add Transactions: Submit a form to add new transactions to the table.
    Search Transactions: Filter transactions by description using a search bar.
    Bonus Features:
        Sort Transactions: Sort transactions by category or description.
        Delete Transactions: Remove transactions from the table.

## Project Setup
   Prerequisites

    Node.js and npm (Node Package Manager) installed on your system.
    json-server for running the local server.

  Installation

    Clone the Repository:

    terminal:command

  git clone <git@github.com:toxidity-18/Ph-2-Bank-of-Flatiron-code-challenge.git>
  cd transactions-app

## Install Dependencies:

   terminal:command

   npm install

   Set Up JSON Server:

    Create a db.json file in the project root with initial transaction data (see Project Setup & Pre-requisite Data).
    Start JSON Server:

    sh

    npx json-server --watch db.json --port 8001

## Start the React Application:

    terminal:command

    npm run dev

    The application will be available at http://localhost:5173.

  Usage

    View Transactions:
        Transactions are displayed in a table format.

    Add Transactions:
        Use the form to enter the description, amount, and category of the transaction.
        Click "Add Transaction" to include it in the table.

    Search Transactions:
        Type into the search bar to filter transactions by description.

    Bonus Features:
        Sort Transactions: Click on the table headers to sort by category or description.
        Delete Transactions: Click the delete button next to a transaction to remove it from the table.

API Endpoints

    Fetch Transactions:
        GET http://localhost:8001/transactions
        Retrieves a list of all transactions.

Project Structure

    src/
        components/
            TransactionItem.jsx - Displays the transaction items.
            TransactionForm.jsx- Form for adding new transactions.
            SearchBar.jsx - Search bar for filtering transactions.
            Transaction.jsx-Shows the list of transaction made.
            
        App.jsx - Main application component.


Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    React - JavaScript library for building user interfaces.
    JSON Server - Provides a full fake REST API for development and prototyping.

