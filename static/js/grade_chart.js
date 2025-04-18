import React from 'react';
import { createRoot } from 'react-dom/client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function GradeChart({ data }) {
    // Định dạng dữ liệu cho biểu đồ
    const chartData = Object.keys(data).map(course => {
        return {
            course,
            score: data[course].reduce((a, b) => a + b, 0),  // Tổng điểm của khóa học
        };
    });

    return (
        <BarChart
            width={600}
            height={400}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="course" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#4CAF50" name="Tổng điểm" />
        </BarChart>
    );
}

// Hàm render gọi trong profile.html
export function renderGradeChart(gradeData) {
    const root = createRoot(document.getElementById('grade-chart'));
    root.render(<GradeChart data={gradeData} />);
}
