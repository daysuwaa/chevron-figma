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
import Sidebar from "./components/Stuff/Sidebar";
import Error from "./components/Stuff/Error";
import Details from "./components/Payment/Details";
import Scheduletable from "./components/Schedule/Schedule-table";
import UploadSchedule from "./components/Schedule/UploadSchedule";
import Schedule_payments from "./components/Schedule/Schedule_payments";
import Beneficiarytable from "./components/Beneficiary/Beneficiary_Table";
import BeneficiaryDetails from "./components/Beneficiary/BeneficiaryDetails";
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
            <Route path="/scheduletable" element={<Scheduletable />} />
            <Route path="/uploadschedule" element={<UploadSchedule />} />
            <Route path="/details" element={<Details />} />
            <Route path="/schedulepayments" element={<Schedule_payments />} />
            <Route path="/beneficiarytable" element={<Beneficiarytable />} />
            <Route
              path="/beneficiarypayments"
              element={<BeneficiaryDetails />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
