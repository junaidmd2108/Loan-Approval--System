import React from 'react';
import { Link } from 'react-router-dom';
export default function HomePage() {
return (
<div>
<h1>Loan Approval System</h1>
<nav>
<ul>
<li><Link to="/register">Add User</Link></li>
<li><Link to="/add-amount">Add Amount</Link></li>
<li><Link to="/withdraw">Withdraw Amount</Link></li>
<li><Link to="/apply-loan">Apply for Loan</Link></li>
<li><Link to="/validate-score">Validate Score</Link></li>
<li><Link to="/history">Transaction History</Link></li>
</ul>
</nav>
</div>
);
}