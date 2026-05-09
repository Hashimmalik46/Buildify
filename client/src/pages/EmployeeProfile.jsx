import React from 'react';
import { Mail, Phone, MapPin, Edit3, Award, Clock } from 'lucide-react';
import { SkillsRadarChart } from '../components/Charts';

const EmployeeProfile = () => {
  return (
    <div className="animate-fade-in">
      {/* Profile Header */}
      <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px', position: 'relative' }}>
        <button className="btn-secondary" style={{ position: 'absolute', top: '40px', right: '40px', width: 'auto', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}>
          <Edit3 size={16} /> Edit Profile
        </button>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ 
            width: '120px', height: '120px', borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-electric))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '40px', fontWeight: 'bold'
          }}>
            JD
          </div>
          <div>
            <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>John Doe</h1>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '14px' }}>EMP-8950</span>
              <span style={{ padding: '4px 12px', background: 'rgba(0,210,255,0.1)', color: 'var(--accent-blue)', borderRadius: '20px', fontSize: '14px' }}>Engineering</span>
              <span style={{ padding: '4px 12px', background: 'rgba(58,123,213,0.1)', color: '#3a7bd5', borderRadius: '20px', fontSize: '14px' }}>Senior Frontend Dev</span>
            </div>
            <div style={{ display: 'flex', gap: '24px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Kashmir Branch</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> john.doe@equiwork.ai</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} color="var(--accent-blue)" /> Skill Proficiency
            </h3>
            <SkillsRadarChart />
          </div>
          
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>About</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '14px' }}>
              Passionate software engineer with 5+ years of experience building scalable SaaS applications. Strong advocate for component-driven architecture and web performance.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={20} color="var(--accent-electric)" /> Recent Achievements
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Project Alpha Completed', date: 'Oct 2025', desc: 'Delivered the core dashboard UI ahead of schedule.' },
                { title: 'AWS Certified Solutions Architect', date: 'Aug 2025', desc: 'Achieved associate level certification.' }
              ].map((ach, i) => (
                <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderLeft: '2px solid var(--accent-blue)', borderRadius: '4px 12px 12px 4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h4 style={{ margin: 0 }}>{ach.title}</h4>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{ach.date}</span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
