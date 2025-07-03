import React, { useEffect, useState } from 'react';

function VisitorStats() {
  const [totalVisits, setTotalVisits] = useState(0);
  const [visitsToday, setVisitsToday] = useState(0);

  useEffect(() => {
    const total = parseInt(localStorage.getItem('totalVisits') || '0', 10);
    setTotalVisits(total);

    const todayDate = new Date().toISOString().split('T')[0];
    const dailyVisits = JSON.parse(localStorage.getItem('dailyVisits') || '{}');
    const todayCount = dailyVisits[todayDate] || 0;
    setVisitsToday(todayCount);
  }, []);

  return (
    <div className="dashboard">
      <h2>Our Visitors</h2>
      <div className="stats">
        <p><strong>Visitors Today:</strong> {visitsToday}</p>
        <p><strong>Total Visitors:</strong> {totalVisits}</p>
      </div>
    </div>
  );
}

export default VisitorStats;
