import React, { useState } from 'react';
import axios from 'axios';
export default function AddUser() {
const [form, setForm] = useState({ name: '', email: '', password: '' });
const handleChange = e => {
setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = async e => {
e.preventDefault();
try {
await axios.post('http://localhost:8080/api/users', form);
alert('User registered!');
} catch (err) {
console.error(err);
alert('Registration failed');
}
};
return (
<form onSubmit={handleSubmit}>
<h2>Register</h2>
<input name="name" placeholder="Name" onChange={handleChange} required />
<input name="email" placeholder="Email" type="email" onChange={handleChange}
required />
<input name="password" placeholder="Password" type="password"
onChange={handleChange} required />
<button type="submit">Register</button>
</form>
);
}