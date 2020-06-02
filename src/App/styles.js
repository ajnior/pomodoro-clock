import styled from 'styled-components';
import { colors } from '../styles/config';

export const AppWrapper = styled.div`
  background: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const AppStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: ${colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  height: auto;
  margin: 2rem;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);

  .pomodoro-clock {
    &__gradient-text {
      text-transform: uppercase;

      background-image ${colors.gradient};
      background-size: 100%;
      background-repeat: repeat;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }

    &__header {
      margin: 0 auto;
      text-align: center;
      font-weight: 700;
      font-size: 2.8rem;
      width: 100%;
    }

    &__length {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      margin: 1rem 0;
    }
    
    &__icon{
      height: auto;
      width: 100%;
    }

    &__break,
    &__session {
      @media(max-width: 768px) {
        margin-bottom: 1rem;
      }
      #break-label,
      #session-label {
        width: 100%;
        margin-bottom: 0.3rem;
        font-weight: 500;
      }
      #session-decrement,
      #session-increment,
      #break-decrement,
      #break-increment {
        font-size: 0;
        background: none;
        border: none;
      }
      font-size: 0.675rem;
      text-transform: uppercase;
      color: ${colors.yellow};
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: center;
      align-items: center;
    }

    &__length-display {
      font-size: 2rem;
      color: ${colors.purple};
    }

    &__timer-display {
      width: 100%;
    }

    &__icon {
      max-width: 26px;
      height: auto;
      fill: ${colors.yellow} !important;
    }

    &__session-icon {
      max-width: 3.6rem;
    }

    &__session-display {
      #timer-label {
        text-transform: uppercase;
        color: ${colors.yellow};
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
      }
      #time-left {
        font-size: 3.5rem;
        font-weight: 700;
        color: ${colors.purple};
        margin-bottom: 0.5rem;
      }
      #start_stop,
      #reset {
        font-size: 0;
        background: none;
        border: none;
        margin: 0 0.875rem;
      }
      border: 1px solid #E6ECF6;
      border-radius: 5px;
      padding: 2rem;
      width: 100%;
    }
  }
`;
