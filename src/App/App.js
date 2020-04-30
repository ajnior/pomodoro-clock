import React from 'react';
import BreakTime from '../components/BreakTime';
import SessionTime from '../components/SessionTime';
import SessionDisplay from '../components/SessionDisplay';

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
    </div>
  );
}

export default App;
