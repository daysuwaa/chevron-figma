import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Payment from "./components/Payment/Payment";
import Schedules from "./components/Schedule/Schedules";
import Beneficiaries from "./components/Beneficiary/Beneficiaries";
import Approvals from "./components/Approvals/Approvals";
import Users from "./components/Users/Users";
import Analytics from "./components/Analytics/Analytics";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar";
import Error from "./components/Error";

function App() {
  return (
    <Router basename="/">
      {/* to make the side bar at the , yk ,side, lol */}
      <div className="app flex h-screen">
        <Sidebar />
        <div className="content max-h-full overflow-y-auto" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
