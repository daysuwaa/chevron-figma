import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Payment from "./components/Payment/Payment";
import Schedules from "./components/Schedule/Schedules";
import Beneficiaries from "./components/Beneficiary/Beneficiaries";
import Approvals from "./components/Approvals/Approvals";
import Users from "./components/Users/Users";
import Analytics from "./components/Analytics/Analytics";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Layout/Sidebar";
import Error from "./components/Layout/Error";
import Details from "./components/Payment/Details";
import Scheduletable from "./components/Schedule/Schedule-table";
import UploadSchedule from "./components/Schedule/UploadSchedule";
import Schedulepayments from "./components/Schedule/Schedule_payments";
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
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace={true} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/schedules/table" element={<Scheduletable />} />
            <Route path="/uploadschedule" element={<UploadSchedule />} />
            <Route path="/details" element={<Details />} />
            <Route path="/schedules/payments" element={<Schedulepayments />} />
            <Route path="/beneficiaries/table" element={<Beneficiarytable />} />
            <Route
              path="/beneficiaries/payments"
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
