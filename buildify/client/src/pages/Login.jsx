import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('employee');
  const [email, setEmail] = useState('john.doe@equiwork.ai');
  const [password, setPassword] = useState('password123');

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setEmail(newRole === 'hr' ? 'admin@equiwork.ai' : 'john.doe@equiwork.ai');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'hr') {
      navigate('/hr/dashboard');
    } else {
      navigate('/employee/dashboard');
    }
  };

  return (
    <AuthLayout>
      <div className="animate-fade-in">
        <h1 style={{ fontSize: '36px', marginBottom: '12px' }}>Welcome back</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '16px' }}>
          Enter your credentials to access the EquiWork Portal.
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '4px' }}>
            <button 
              type="button"
              onClick={() => handleRoleChange('employee')}
              style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: role === 'employee' ? 'var(--accent-blue)' : 'transparent', color: role === 'employee' ? 'white' : 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
            >
              Employee
            </button>
            <button 
              type="button"
              onClick={() => handleRoleChange('hr')}
              style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: role === 'hr' ? 'var(--accent-blue)' : 'transparent', color: role === 'hr' ? 'white' : 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
            >
              HR Admin
            </button>
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-secondary)' }} size={20} />
              <input 
                type="email" 
                className="glass-input" 
                style={{ width: '100%', paddingLeft: '48px' }}
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="flex justify-between items-center">
              <label className="input-label">Password</label>
              <a href="#" style={{ color: 'var(--accent-blue)', fontSize: '14px', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-secondary)' }} size={20} />
              <input 
                type="password" 
                className="glass-input" 
                style={{ width: '100%', paddingLeft: '48px' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" id="remember" style={{ accentColor: 'var(--accent-blue)', width: '16px', height: '16px', cursor: 'pointer' }} />
            <label htmlFor="remember" style={{ color: 'var(--text-secondary)', fontSize: '14px', cursor: 'pointer' }}>Remember me</label>
          </div>

          <button type="submit" className="btn-primary mt-4">
            Sign In to Portal
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-8 text-center" style={{ color: 'var(--text-secondary)' }}>
          Don't have an account?{' '}
          <button 
            onClick={() => navigate('/signup')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--accent-blue)', 
              fontWeight: '600', 
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Create an account
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
