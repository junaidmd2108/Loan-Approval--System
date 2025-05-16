import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function HistoryAnalysis() {
const [transactions, setTransactions] = useState([]);
useEffect(() => {
const fetchHistory = async () => {
try {
const res = await axios.get('http://localhost:8080/api/history');
setTransactions(res.data);
} catch (err) {
console.error(err);
}
};

fetchHistory();
}, []);
return (
<div>
<ul>
<h2>Transaction History</h2>
{transactions.map((txn, index) => (
<li key={index}>
{txn.date} - {txn.type} - ${txn.amount}
</li>
))}
</ul>
</div>
);
}