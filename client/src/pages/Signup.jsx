import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Briefcase, UserCircle, Code, Shield, CheckCircle2, Lock } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';
import { supabase } from '../lib/supabase';

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '30px' }}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div 
          key={index} 
          style={{ 
            height: '4px', 
            flex: 1, 
            borderRadius: '2px',
            background: index + 1 <= currentStep ? 'var(--accent-blue)' : 'rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease'
          }}
        />
      ))}
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    skills: [],
    bio: '',
    experienceYears: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const toggleSkill = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  // Dummy function for AI Score (will be replaced by API endpoint)
  const calculateInitialScore = () => {
    // Generate a random score between 50 and 95 (out of 100)
    const score = (Math.random() * (95 - 50) + 50).toFixed(0);
    return { score: parseInt(score), review: "Initial profile assessment pending deep AI analysis." };
  };

  const handleSignup = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const aiScores = calculateInitialScore();
      
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: 'employee', // Defaulting to employee for signups, HR could be invited or set manually
            experienceYears: formData.experienceYears,
            score: aiScores.score,
            review: aiScores.review,
            department: formData.role, // The UI calls 'department' 'role'
            skills: formData.skills,
            bio: formData.bio
          }
        }
      });

      if (signUpError) throw signUpError;

      // Upon success, redirect to login or dashboard
      navigate('/login', { state: { message: 'Registration successful! Please sign in.' } });
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const roles = [
    { id: 'engineer', icon: <Code />, title: 'Engineering', desc: 'Software, Data, Cloud' },
    { id: 'design', icon: <UserCircle />, title: 'Design', desc: 'UI/UX, Product, Brand' },
    { id: 'product', icon: <Briefcase />, title: 'Product', desc: 'PM, Strategy, Growth' },
    { id: 'security', icon: <Shield />, title: 'Security', desc: 'Cyber, Compliance, Risk' }
  ];

  const availableSkills = ['React', 'Node.js', 'Python', 'AWS', 'Figma', 'TypeScript', 'GraphQL', 'Docker'];

  return (
    <AuthLayout>
      <div className="animate-fade-in" key={step}>
        
        {step > 1 && (
          <button 
            onClick={prevStep}
            style={{ 
              background: 'none', border: 'none', color: 'var(--text-secondary)', 
              display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '20px'
            }}
          >
            <ArrowLeft size={16} /> Back
          </button>
        )}

        <StepIndicator currentStep={step} totalSteps={4} />

        {/* STEP 1: Basic Info */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Create your account</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Let's start with your basic information.
            </p>

            <div className="flex gap-4 mb-4">
              <div className="input-group" style={{ flex: 1, marginBottom: 0 }}>
                <label className="input-label">First Name</label>
                <input 
                  type="text" 
                  className="glass-input w-full" 
                  placeholder="John"
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="input-group" style={{ flex: 1, marginBottom: 0 }}>
                <label className="input-label">Last Name</label>
                <input 
                  type="text" 
                  className="glass-input w-full" 
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="input-group mb-4">
              <label className="input-label">Email Address</label>
              <input 
                type="email" 
                className="glass-input w-full" 
                placeholder="name@company.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input-group mb-6">
              <label className="input-label">Password</label>
              <input 
                type="password" 
                className="glass-input w-full" 
                placeholder="Create a strong password"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <button onClick={nextStep} className="btn-primary mt-6">
              Continue <ArrowRight size={20} />
            </button>

            <div className="mt-6 text-center text-secondary">
              Already have an account?{' '}
              <button onClick={() => navigate('/login')} style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', fontWeight: '600', cursor: 'pointer' }}>
                Sign In
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Role & Branch */}
        {step === 2 && (
          <div>
            <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Role & Branch</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Select the primary domain you operate in.
            </p>

            <div className="selectable-grid mb-8">
              {roles.map(role => (
                <div 
                  key={role.id}
                  className={`selectable-card ${formData.role === role.id ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, role: role.id})}
                >
                  <div style={{ color: formData.role === role.id ? 'var(--accent-blue)' : 'var(--text-secondary)' }}>
                    {role.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{role.title}</h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={nextStep} className="btn-primary" disabled={!formData.role}>
              Continue <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* STEP 3: Skills Selection */}
        {step === 3 && (
          <div>
            <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Skills Selection</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Select your core competencies to match with AI opportunities.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
              {availableSkills.map(skill => {
                const isSelected = formData.skills.includes(skill);
                return (
                  <div 
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '30px',
                      background: isSelected ? 'rgba(0,210,255,0.1)' : 'var(--glass-bg)',
                      border: `1px solid ${isSelected ? 'var(--accent-blue)' : 'var(--glass-border)'}`,
                      color: isSelected ? 'var(--accent-blue)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {isSelected && <CheckCircle2 size={16} />}
                    {skill}
                  </div>
                );
              })}
            </div>

            <button onClick={nextStep} className="btn-primary">
              Continue <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* STEP 4: Profile Completion */}
        {step === 4 && (
          <div>
            <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Profile Completion</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Almost there! Add your experience and a brief bio.
            </p>

            <div className="input-group mb-4">
              <label className="input-label">Years of Experience</label>
              <input 
                type="number" 
                className="glass-input w-full" 
                placeholder="e.g., 3"
                min="0"
                value={formData.experienceYears}
                onChange={e => setFormData({...formData, experienceYears: parseInt(e.target.value) || 0})}
              />
            </div>

            <div className="input-group mb-8">
              <label className="input-label">Professional Bio</label>
              <textarea 
                className="glass-input w-full" 
                rows="5"
                placeholder="I am a software engineer specializing in..."
                value={formData.bio}
                onChange={e => setFormData({...formData, bio: e.target.value})}
                style={{ resize: 'vertical' }}
              />
            </div>

            {error && <div style={{ color: '#ef4444', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

            <button onClick={handleSignup} className="btn-primary" disabled={loading}>
              {loading ? 'Creating Account...' : 'Complete Setup'} <CheckCircle2 size={20} />
            </button>
          </div>
        )}

      </div>
    </AuthLayout>
  );
};

export default Signup;
