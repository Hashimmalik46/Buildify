import React from 'react';
import { Search, Filter, Download, MoreVertical } from 'lucide-react';

const AllEmployees = () => {
  const employees = [
    { id: 'EQ-001', name: 'John Doe', branch: 'US', dept: 'Engineering', score: 95, burnout: 'Low' },
    { id: 'EQ-002', name: 'Jane Smith', branch: 'Kashmir', dept: 'Design', score: 88, burnout: 'High' },
    { id: 'EQ-003', name: 'Mike Johnson', branch: 'US', dept: 'Product', score: 92, burnout: 'Medium' },
    { id: 'EQ-004', name: 'Sarah Wilson', branch: 'Kashmir', dept: 'Engineering', score: 85, burnout: 'Low' },
  ];

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Employee Database</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage and analyze workforce talent.</p>
        </div>
        <button className="btn-secondary" style={{ width: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Download size={16} /> Export CSV
        </button>
      </header>

      <div className="glass-panel" style={{ padding: '24px' }}>
        {/* Filters */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search style={{ position: 'absolute', top: '12px', left: '16px', color: 'var(--text-secondary)' }} size={20} />
            <input 
              type="text" 
              className="glass-input" 
              style={{ width: '100%', paddingLeft: '48px' }}
              placeholder="Search employees by name, ID, or skills..."
            />
          </div>
          <button className="btn-secondary" style={{ width: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Employee</th>
                <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Branch</th>
                <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Department</th>
                <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Perf. Score</th>
                <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Burnout Risk</th>
                <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                        {emp.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{emp.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{emp.id}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px' }}>{emp.branch}</td>
                  <td style={{ padding: '16px' }}>{emp.dept}</td>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '60px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                        <div style={{ width: `${emp.score}%`, height: '100%', background: 'var(--accent-blue)', borderRadius: '3px' }}></div>
                      </div>
                      <span style={{ fontSize: '14px' }}>{emp.score}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ 
                      padding: '4px 12px', borderRadius: '20px', fontSize: '12px',
                      background: emp.burnout === 'High' ? 'rgba(239,68,68,0.1)' : emp.burnout === 'Medium' ? 'rgba(234,179,8,0.1)' : 'rgba(52,211,153,0.1)',
                      color: emp.burnout === 'High' ? '#ef4444' : emp.burnout === 'Medium' ? '#eab308' : '#34d399'
                    }}>
                      {emp.burnout}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEmployees;
