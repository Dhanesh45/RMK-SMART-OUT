import React from 'react';
import { FaCheck, FaChartPie } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const statusData = [
    {
        name: 'Approved',
        value: 12,
        color: 'rgba(153, 220, 179, 1)',
        icon: <FaCheck size="1vw" color="black" />,
    },
    {
        name: 'Pending',
        value: 5,
        color: 'rgba(14, 73, 71, 1)',
        icon: <FaChartPie size="1vw" color="white" />,
    },
    {
        name: 'Rejected',
        value: 4,
        color: 'rgba(82, 179, 134, 1)',
        icon: <MdClose size="1.2vw" color="black" />,
    },
];

const maxValue = Math.max(...statusData.map(item => item.value));

const DetailedStatus = () => {
    return (
        <div style={{
            width: '100%',
            height: '85%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4% 5%',
            boxSizing: 'border-box',
            gap: '15%',
        }}>
            {statusData.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        height: '20%',
                        gap: '3%',
                    }}
                >
                    {/* Icon box */}
                    <div style={{
                        width: '3vw',
                        height: '3vw',
                        backgroundColor: item.color,
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {item.icon}
                    </div>

                    {/* Name and progress container */}
                    <div style={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%',
                    }}>
                        <span style={{ fontWeight: 'bold', fontSize: '1vw', marginBottom: '0.4vw' }}>
                            {item.name}
                        </span>
                        <div style={{
                            width: '100%',
                            height: '0.7vw',
                            backgroundColor: '#e8edf1',
                            borderRadius: '10px',
                            overflow: 'hidden',
                        }}>
                            <div style={{
                                width: `${(item.value / maxValue) * 100}%`,
                                height: '100%',
                                backgroundColor: item.color,
                                borderRadius: '10px',
                            }} />
                        </div>
                    </div>

                    {/* Count */}
                    <div style={{
                        width: '2.5vw',
                        textAlign: 'right',
                        fontWeight: 'bold',
                        fontSize: '1vw',
                    }}>
                        {item.value}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailedStatus;
