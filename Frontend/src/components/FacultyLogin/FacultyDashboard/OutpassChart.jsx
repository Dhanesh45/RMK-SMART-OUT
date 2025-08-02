import React from 'react';
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Pending', value: 5 },
    { name: 'Approved', value: 12 },
    { name: 'Rejected', value: 4 },
];

const COLORS = [
    'rgba(14, 73, 71, 1)',    // Pending
    'rgba(153, 220, 179, 1)', // Approved
    'rgba(82, 179, 134, 1)',  // Rejected
];

const OutpassChart = () => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '85%',
            padding: '4%',
            boxSizing: 'border-box',
        }}>
            {/* Donut Chart */}
            <div style={{
                width: '60%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="65%"
                            outerRadius="100%"
                            paddingAngle={3}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value} requests`} />
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}>
                    <div style={{ fontSize: '1vw', fontWeight: 'bold', color: '#555' }}>TOTAL</div>
                    <div style={{ fontSize: '1.8vw', fontWeight: 'bold' }}>{total}</div>
                </div>
            </div>

            {/* Status Legend */}
            <div style={{
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.8vw',
    fontSize: '1.2vw',
}}>
    {data.map((entry, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10%' }}>
            <div style={{
                width: '2vw',
                height: '2vw',
                borderRadius: '3px',
                backgroundColor: COLORS[index],
            }} />
            <span style={{ fontWeight: '500' }}>{entry.name}</span>
        </div>
    ))}
</div>
        </div>
    );
};

export default OutpassChart;
