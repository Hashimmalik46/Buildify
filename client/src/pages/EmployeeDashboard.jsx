import React from 'react';
import { Activity, Briefcase, Zap, AlertTriangle, Star, CheckCircle, Lightbulb } from 'lucide-react';
import { PerformanceChart, SkillsRadarChart } from '../components/Charts';

const MetricCard = ({ title, value, icon, color, subtitle }) => (
  <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px' }}>{title}</p>
        <h3 style={{ fontSize: '28px', margin: 0 }}>{value}</h3>
      </div>
      <div style={{ padding: '12px', background: `rgba(${color}, 0.1)`, borderRadius: '12px', color: `rgb(${color})` }}>
        {icon}
      </div>
    </div>
    {subtitle && <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{subtitle}</p>}
  </div>
);

const EmployeeDashboard = () => {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Welcome back, Alex</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Here's your workforce intelligence overview.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00d2ff', boxShadow: '0 0 10px #00d2ff' }}></span>
            Grade: Senior Engineer
          </div>
        </div>
      </header>

      {/* Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <MetricCard title="Performance Score" value="95/100" icon={<Star size={24} />} color="0, 210, 255" subtitle="+2% from last month" />
        <MetricCard title="Active Projects" value="3" icon={<Briefcase size={24} />} color="58, 123, 213" subtitle="1 high priority" />
        <MetricCard title="Completion Rate" value="92%" icon={<CheckCircle size={24} />} color="34, 197, 94" subtitle="Top 10% in branch" />
        <MetricCard title="Burnout Risk" value="Low" icon={<AlertTriangle size={24} />} color="234, 179, 8" subtitle="Workload is balanced" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '40px' }}>
        {/* Productivity Trends */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={20} color="var(--accent-blue)" /> Productivity Trends
          </h3>
          <PerformanceChart />
        </div>

        {/* AI Recommendations */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lightbulb size={20} color="#eab308" /> AI Recommendations
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
            {[
              { text: "Learn GraphQL to match upcoming project requirements.", skill: "GraphQL" },
              { text: "Your collaboration score is excellent. Consider mentoring juniors.", skill: "Leadership" }
            ].map((rec, i) => (
              <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <p style={{ fontSize: '14px', lineHeight: '1.5', marginBottom: '12px' }}>{rec.text}</p>
                <span style={{ fontSize: '12px', padding: '4px 12px', background: 'rgba(0,210,255,0.1)', color: 'var(--accent-blue)', borderRadius: '20px' }}>
                  {rec.skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={20} color="var(--accent-electric)" /> Skill Growth
          </h3>
          <SkillsRadarChart />
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '24px' }}>Active Projects</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { name: 'Migration to Next.js', progress: 75, due: '2 weeks' },
              { name: 'AI Recommendation Engine API', progress: 40, due: '1 month' }
            ].map((proj, i) => (
              <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontWeight: 600 }}>{proj.name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Due in {proj.due}</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${proj.progress}%`, height: '100%', background: 'var(--accent-blue)', borderRadius: '3px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
