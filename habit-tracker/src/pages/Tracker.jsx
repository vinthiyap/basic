import React, { useState, useEffect } from 'react';

export default function Tracker() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');
  const [dates, setDates] = useState([]);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('habit-tracker')) || {};
    setHabits(stored.habits || []);
    setDates(getLastNDays(7));
    setProgress(stored.progress || {});
  }, []);

  useEffect(() => {
    localStorage.setItem('habit-tracker', JSON.stringify({ habits, progress }));
  }, [habits, progress]);

  const getLastNDays = (n) => {
    const days = [];
    for (let i = 0; i < n; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().split('T')[0]);
    }
    return days.reverse();
  };

  const toggleCheck = (date, habit) => {
    setProgress((prev) => {
      const newProgress = { ...prev };
      if (!newProgress[date]) newProgress[date] = {};
      newProgress[date][habit] = !newProgress[date][habit];
      return newProgress;
    });
  };

  const addHabit = () => {
    const trimmed = newHabit.trim();
    if (trimmed && !habits.includes(trimmed)) {
      setHabits([...habits, trimmed]);
      setNewHabit('');
    }
  };

  const deleteHabit = (habitToDelete) => {
    setHabits(habits.filter((h) => h !== habitToDelete));
    setProgress((prev) => {
      const updated = {};
      for (let date in prev) {
        const copy = { ...prev[date] };
        delete copy[habitToDelete];
        updated[date] = copy;
      }
      return updated;
    });
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all habit tracking progress?')) {
      setProgress({});
    }
  };

  return (
    <div
      style={{
        padding: '40px 20px',
        background: 'linear-gradient(to right, #dfe9f3 0%, #ffffff 100%)',
        minHeight: '100vh',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#2c3e50', marginBottom: '30px' }}>
        📊 Track Your Habits
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={newHabit}
          placeholder="Enter new habit"
          onChange={(e) => setNewHabit(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '250px',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={addHabit}
          style={{
            marginLeft: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          ➕ Add Habit
        </button>

        {habits.length > 0 && (
          <button
            onClick={resetProgress}
            style={{
              marginLeft: '10px',
              backgroundColor: '#ffc107',
              color: '#000',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            🔁 Reset Progress
          </button>
        )}
      </div>

      {habits.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              margin: '0 auto',
              borderCollapse: 'collapse',
              width: '100%',
              maxWidth: '900px',
              background: '#fff',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <thead style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <tr>
                <th style={thStyle}>Date</th>
                {habits.map((habit, index) => (
                  <th style={thStyle} key={index}>
                    {habit}
                    <button
                      onClick={() => deleteHabit(habit)}
                      style={{
                        marginLeft: '6px',
                        background: 'none',
                        color: 'red',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                    >
                      ❌
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dates.map((date, idx) => (
                <tr
                  key={date}
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#f8f9fa' : '#ffffff',
                    textAlign: 'center',
                  }}
                >
                  <td style={tdStyle}>{date}</td>
                  {habits.map((habit, index) => (
                    <td style={tdStyle} key={index}>
                      <button
                        onClick={() => toggleCheck(date, habit)}
                        style={{
                          padding: '6px 10px',
                          backgroundColor: progress[date]?.[habit] ? '#198754' : '#dc3545',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        {progress[date]?.[habit] ? '✔️ Undo' : '❌ Mark'}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const thStyle = {
  padding: '12px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const tdStyle = {
  padding: '10px',
  fontSize: '15px',
};
