import React, { useRef } from 'react';
import BreakTime from '../components/BreakTime';
import SessionTime from '../components/SessionTime';
import SessionDisplay from '../components/SessionDisplay';
import { AppWrapper, AppStyles } from './styles';

function App() {
  const audioRef = useRef(null);

  return (
    <AppWrapper>
      <AppStyles className="pomodoro-clock">
        <h1 className="pomodoro-clock__header pomodoro-clock__gradient-text">
          Pomodoro Clock
        </h1>
        <div className="pomodoro-clock__length">
          <BreakTime />
          <SessionTime className="pomodoro-clock__session" />
        </div>
        <div className="pomodoro-clock__session-display">
          <SessionDisplay audioRef={audioRef} />
        </div>
        <audio
          ref={audioRef}
          id="beep"
          preload="auto"
          src="https://goo.gl/65cBl1"
        />
      </AppStyles>
    </AppWrapper>
  );
}

export default App;
