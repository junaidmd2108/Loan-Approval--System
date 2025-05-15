import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import AddAmount from './components/AddAmount';
import WithdrawAmount from './components/WithdrawAmount';
import ApplyLoan from './components/ApplyLoan';
import ScoreValidation from './components/ScoreValidation';
import HistoryAnalysis from './components/HistoryAnalysis';
import HomePage from './pages/Homepage';
function App() {
return (
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/register" element={<AddUser />} />
<Route path="/add-amount" element={<AddAmount />} />
<Route path="/withdraw" element={<WithdrawAmount />} />
<Route path="/apply-loan" element={<ApplyLoan />} />
<Route path="/validate-score" element={<ScoreValidation />} />
<Route path="/history" element={<HistoryAnalysis />} />
</Routes>
);
}
export default App;