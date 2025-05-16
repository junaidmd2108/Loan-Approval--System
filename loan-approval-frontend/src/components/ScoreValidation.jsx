import React, { useState } from 'react';
import axios from 'axios';
export default function ScoreValidation() {
const [userId, setUserId] = useState('');
const handleCheck = async () => {
try {
const res = await axios.get(`http://localhost:8080/api/score/${userId}`);
alert(`Credit Score: ${res.data.score}`);
} catch (err) {
console.error(err);
alert('Failed to fetch score');
}
};
return (
<div>
<h2>Validate Credit Score</h2>
<input placeholder="Enter User ID" value={userId} onChange={e =>
setUserId(e.target.value)} />
<button onClick={handleCheck}>Check Score</button>
</div>
);
}