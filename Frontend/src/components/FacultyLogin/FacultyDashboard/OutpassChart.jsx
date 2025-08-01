import React from 'react';
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Pending', value: 48 },
    { name: 'Approved', value: 300 },
    { name: 'Rejected', value: 12 },
];

const COLORS = ['rgba(14, 73, 71, 1)', 'rgba(153, 220, 179, 1)', 'rgba(82, 179, 134, 1)'];

const OutpassChart = () => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '92%',
            padding: '3%',
            gap: '5%',
        }}>
            {/* Donut Chart Section */}
            <div style={{
                width: '50%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="70%"   
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

                {/* Center total value */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}>
                    <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#555' }}>Total</div>
                    <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{total}</div>
                </div>
            </div>

            {/* Table Section */}
            <div style={{
                width: '45%',
                fontSize: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8%',
            }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'separate',
                    borderSpacing: '0 8%',
                }}>
                    <thead>
                        <tr style={{ textAlign: 'left', fontSize: '16px' }}>
                            <th style={{ paddingBottom: '4%' }}>Status</th>
                            <th style={{ paddingBottom: '4%' }}>Count</th>
                            <th style={{ paddingBottom: '4%' }}>%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index) => (
                            <tr key={index}>
                                <td style={{ color: COLORS[index], fontWeight: 'bold', paddingBottom: '4%' }}>{entry.name}</td>
                                <td style={{ paddingBottom: '4%' }}>{entry.value}</td>
                                <td style={{ paddingBottom: '4%' }}>{((entry.value / total) * 100).toFixed(1)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OutpassChart;
