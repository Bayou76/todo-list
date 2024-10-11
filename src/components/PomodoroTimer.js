import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css';

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes par défaut en secondes
  const [isActive, setIsActive] = useState(false);
  const [inputTime, setInputTime] = useState(25); // Temps d'entrée par défaut en minutes

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setIsActive(false);
            return 0; // Réinitialise le temps à 0 quand le minuteur atteint 0
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(inputTime * 60); // Réinitialise à la valeur actuelle de l'entrée
  };

  // Fonction pour diminuer le temps
  const decreaseTime = () => {
    if (inputTime > 1) {
      const newTime = inputTime - 1;
      setInputTime(newTime);
      setTime(newTime * 60); // Mettre à jour l'état de `time` en secondes
    }
  };

  // Fonction pour augmenter le temps
  const increaseTime = () => {
    const newTime = inputTime + 1;
    setInputTime(newTime);
    setTime(newTime * 60); // Mettre à jour l'état de `time` en secondes
  };

  return (
    <div className="timer">
      <h2>Pomodoro</h2>
      <div className="time-adjust">
        <button onClick={decreaseTime}>-</button>
        <span className="time-display">{inputTime} minutes</span>
        <button onClick={increaseTime}>+</button>
      </div>
      <div className={`circle ${isActive ? 'active' : ''}`}>
        {`${Math.floor(time / 60)}:${('0' + (time % 60)).slice(-2)}`}
      </div>
      <button onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Démarrer'}
      </button>
      <button onClick={resetTimer}>Réinitialiser</button>
    </div>
  );
};

export default PomodoroTimer;
