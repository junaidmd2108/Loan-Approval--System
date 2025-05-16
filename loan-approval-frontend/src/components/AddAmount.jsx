import React, { useState } from 'react';
import axios from 'axios';
export default function AddAmount() {
const [amount, setAmount] = useState('');
const handleSubmit = async e => {
e.preventDefault();
try {
await axios.post('http://localhost:8080/api/transactions/add', { amount });
alert('Amount added successfully!');
} catch (err) {
console.error(err);
alert('Error adding amount');
}
};
return (
<div>
<form onSubmit={handleSubmit}>
<h2>Add Amount</h2>
<input
type="number"
placeholder="Enter amount"
value={amount}
onChange={e => setAmount(e.target.value)}
required
/>
</form>
<button type="submit">Add</button>
</div>
);
}