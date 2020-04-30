import React from 'react';
import BreakTime from '../components/BreakTime';

function App(props) {
  return (
    <div className="pomodoro-clock">
      <div className="App">Pomodoro</div>
      <BreakTime />
    </div>
  );
}

export default App;
