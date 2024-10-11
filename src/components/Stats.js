import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Stats.css'; 


Chart.register(...registerables);

const Stats = ({ todos }) => {
  const [showStats, setShowStats] = useState(false); // État pour afficher/masquer les statistiques


  return (
    <div className="stats-container">
      <h2 className="stats-title" onClick={() => setShowStats(prev => !prev)}>
        Statistiques 
        {showStats ? <FiChevronUp className="arrow" /> : <FiChevronDown className="arrow" />}
      </h2>

      {/* Conteneur avec animation de glissement */}
      <div className={`stats-graphs ${showStats ? 'slide-down' : 'slide-up'}`}>
        {showStats && (
          <div className="charts-container">
            <div className="pie-chart">
              <Pie
                data={{
                  labels: ['Complétées', 'Non Complétées'],
                  datasets: [
                    {
                      label: 'Répartition des tâches',
                      backgroundColor: ['#66BB6A', '#EF5350'],
                      data: [
                        todos.filter(todo => todo.completed).length,
                        todos.filter(todo => !todo.completed).length,
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
