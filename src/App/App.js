import React from 'react';
import BreakTime from '../components/BreakTime';
import SessionTime from '../components/SessionTime';
import SessionDisplay from '../components/SessionDisplay';
import './styles.css';

function App() {
  return (
    <div className="pomodoro-clock">
      <div className="App">Pomodoro</div>
      <section>
        <BreakTime />
        <SessionTime />
      </section>
      <section>
        <SessionDisplay />
      </section>
      <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" />
    </div>
  );
}

export default App;
