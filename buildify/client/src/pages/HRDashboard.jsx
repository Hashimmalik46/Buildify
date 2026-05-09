import React from 'react';
import { Users, TrendingUp, AlertCircle, FileCheck, Map, Activity, BarChart2 } from 'lucide-react';
import { PerformanceChart } from '../components/Charts';

const HRDashboard = () => {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Executive HR Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)' }}>AI-powered workforce intelligence overview.</p>
        </div>
        <button className="btn-primary" style={{ width: 'auto' }}>Generate Report</button>
      </header>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        {[
          { title: "Total Employees", value: "1,248", icon: <Users />, color: "#00d2ff" },
          { title: "Avg Productivity", value: "88%", icon: <TrendingUp />, color: "#34d399" },
          { title: "Burnout Alerts", value: "12", icon: <AlertCircle />, color: "#ef4444" },
          { title: "Project Success", value: "94%", icon: <FileCheck />, color: "#a855f7" }
        ].map((kpi, i) => (
          <div key={i} className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>{kpi.title}</span>
              <div style={{ color: kpi.color }}>{kpi.icon}</div>
            </div>
            <h2 style={{ fontSize: '32px', margin: 0 }}>{kpi.value}</h2>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '40px' }}>
        {/* Branch Workload Comparison */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Map size={20} color="var(--accent-blue)" /> Branch Fairness Distribution (US vs Kashmir)
          </h3>
          <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '40px', padding: '20px 40px' }}>
            {/* Mock bar chart */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '100%', height: '80%', background: 'linear-gradient(to top, rgba(0,210,255,0.2), rgba(0,210,255,0.8))', borderRadius: '8px 8px 0 0', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-25px', width: '100%', textAlign: 'center' }}>82%</span>
              </div>
              <span>US Branch</span>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '100%', height: '85%', background: 'linear-gradient(to top, rgba(58,123,213,0.2), rgba(58,123,213,0.8))', borderRadius: '8px 8px 0 0', position: 'relative' }}>
                 <span style={{ position: 'absolute', top: '-25px', width: '100%', textAlign: 'center' }}>85%</span>
              </div>
              <span>Kashmir Branch</span>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={20} color="#eab308" /> AI Insights
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '4px 12px 12px 4px' }}>
              <h4 style={{ color: '#ef4444', marginBottom: '8px', fontSize: '14px' }}>High Burnout Risk Detected</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Engineering team in Kashmir showing 15% increase in working hours.</p>
            </div>
            <div style={{ padding: '16px', background: 'rgba(52, 211, 153, 0.1)', borderLeft: '4px solid #34d399', borderRadius: '4px 12px 12px 4px' }}>
              <h4 style={{ color: '#34d399', marginBottom: '8px', fontSize: '14px' }}>Skill Gap Closing</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Recent AWS training program improved cloud deployment speeds by 22%.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
