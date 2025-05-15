import React, { useState } from 'react';
import axios from 'axios';
export default function WithdrawAmount() {
const [amount, setAmount] = useState('');
const handleSubmit = async e => {
e.preventDefault();
try {
await axios.post('http://localhost:8080/api/transactions/withdraw', { amount
});
alert('Amount withdrawn!');
} catch (err) {
console.error(err);
alert('Withdrawal failed');
}
};
return (
<form onSubmit={handleSubmit}>
<h2>Withdraw Amount</h2>
<input
type="number"
placeholder="Enter amount"
value={amount}
onChange={e => setAmount(e.target.value)}
required
/>
<button type="submit">Withdraw</button>
</form>
);
}