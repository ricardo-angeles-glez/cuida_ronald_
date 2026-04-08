/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import HospitalPortal from "./pages/HospitalPortal";
import FamilyApp from "./pages/FamilyApp";
import AdminDashboard from "./pages/AdminDashboard";
import DonorPortal from "./pages/DonorPortal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hospital" element={<HospitalPortal />} />
        <Route path="/family" element={<FamilyApp />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/donor" element={<DonorPortal />} />
      </Routes>
    </Router>
  );
}
