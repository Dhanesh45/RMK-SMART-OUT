import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Day 1', present: 85, absent: 15 },
  { day: 'Day 2', present: 80, absent: 20 },
  { day: 'Day 3', present: 78, absent: 22 },
  { day: 'Day 4', present: 90, absent: 10 },
  { day: 'Day 5', present: 88, absent: 12 },
  { day: 'Day 6', present: 92, absent: 8 },
  { day: 'Day 7', present: 87, absent: 13 },
];

const AttendanceChart = () => {
  return (
    <div style={{
      width: '95%',
      height: '85%',
      backgroundColor: 'white',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      
      {/* Present / Absent Legend */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '6%',
        marginTop: '2%',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: 'rgba(14, 73, 71, 1)',
            borderRadius: '50%',
            marginRight: '6px'
          }}></div>
          <span style={{ fontWeight: '500', fontSize: '14px' }}>Present</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: 'rgba(82, 179, 134, 1)',
            borderRadius: '50%',
            marginRight: '6px'
          }}></div>
          <span style={{ fontWeight: '500', fontSize: '14px' }}>Absent</span>
        </div>
      </div>

      {/* Line Chart Section */}
      <div style={{ width: '100%', height: '80%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" fontSize={10} />
            <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} fontSize={10} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Line type="monotone" dataKey="present" stroke="rgba(14, 73, 71, 1)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="absent" stroke="rgba(82, 179, 134, 1)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
