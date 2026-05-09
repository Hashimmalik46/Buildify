import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './components/DashboardLayout';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeProfile from './pages/EmployeeProfile';
import HRDashboard from './pages/HRDashboard';
import AllEmployees from './pages/AllEmployees';
import SkeletonPage from './pages/SkeletonPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Employee Routes */}
        <Route path="/employee" element={<DashboardLayout role="employee" />}>
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="profile" element={<EmployeeProfile />} />
          <Route path="skills" element={<SkeletonPage title="Skill Analysis" description="Analyze categorized technical and soft skills, circular skill progress charts, AI skill gap analysis widget." />} />
          <Route path="experience" element={<SkeletonPage title="Experience Timeline" description="Vertical career timeline, project history cards, technologies used, promotions." />} />
          <Route path="projects" element={<SkeletonPage title="Assigned Projects" description="Project cards with title, progress bar, deadlines, and skill requirements." />} />
        </Route>

        {/* HR Routes */}
        <Route path="/hr" element={<DashboardLayout role="hr" />}>
          <Route path="dashboard" element={<HRDashboard />} />
          <Route path="employees" element={<AllEmployees />} />
          <Route path="trends" element={<SkeletonPage title="Trends Analytics" description="Workforce trend graphs, demand forecasting, attrition prediction." />} />
          <Route path="projects/add" element={<SkeletonPage title="Add Project" description="Create a new enterprise project and set required skills." />} />
          <Route path="projects/assign" element={<SkeletonPage title="Assign Projects" description="AI-assisted project assignment with employee recommendations and workload balancing." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
