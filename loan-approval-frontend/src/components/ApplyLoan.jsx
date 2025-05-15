import axios from 'axios';
export default function ApplyLoan() {
const [loanData, setLoanData] = useState({
amount: '',
duration: '',
purpose: ''
});
const handleChange = e => {
setLoanData({ ...loanData, [e.target.name]: e.target.value });
};
const handleSubmit = async e => {
e.preventDefault();
try {
await axios.post('http://localhost:8080/api/loans/apply', loanData);
alert('Loan application submitted!');
} catch (err) {
console.error(err);
alert('Loan application failed');
}
};
return (
<form onSubmit={handleSubmit}>
<h2>Apply for Loan</h2>
<input name="amount" placeholder="Amount" onChange={handleChange} required />
<input name="duration" placeholder="Duration (months)" onChange={handleChange}
required />
<input name="purpose" placeholder="Purpose" onChange={handleChange} required
/>
<button type="submit">Apply</button>
</form>
);
}