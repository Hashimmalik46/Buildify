import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

export const PerformanceChart = () => {
  const data = [
    { name: 'Jan', score: 82 },
    { name: 'Feb', score: 85 },
    { name: 'Mar', score: 84 },
    { name: 'Apr', score: 89 },
    { name: 'May', score: 93 },
    { name: 'Jun', score: 95 },
  ];

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
          <XAxis dataKey="name" stroke="var(--text-secondary)" />
          <YAxis stroke="var(--text-secondary)" />
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--glass-border)', borderRadius: '8px' }}
            itemStyle={{ color: 'var(--accent-blue)' }}
          />
          <Line type="monotone" dataKey="score" stroke="var(--accent-blue)" strokeWidth={3} dot={{ fill: 'var(--accent-blue)' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const SkillsRadarChart = () => {
  const data = [
    { subject: 'React', A: 90, fullMark: 100 },
    { subject: 'Node.js', A: 85, fullMark: 100 },
    { subject: 'Python', A: 70, fullMark: 100 },
    { subject: 'Cloud', A: 80, fullMark: 100 },
    { subject: 'UI/UX', A: 65, fullMark: 100 },
    { subject: 'Leadership', A: 85, fullMark: 100 },
  ];

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.1)" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
          <Radar name="Skills" dataKey="A" stroke="var(--accent-electric)" fill="var(--accent-blue)" fillOpacity={0.3} />
          <Tooltip contentStyle={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--glass-border)', borderRadius: '8px' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
