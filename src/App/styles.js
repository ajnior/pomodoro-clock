import styled from 'styled-components';
import { colors } from '../styles/config';

export const AppWrapper = styled.div`
  background: ${colors.base.background};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: ${colors.app.background};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  height: 80vh;
  margin: 2rem;
  border-radius: 15px;
  text-align: center;

  .pomodoro-clock {
    &__header {
      width: 100%;
      text-align: center;
      font-weight: 700;
      font-size: 3rem;
      text-transform: uppercase;
      background-color: ${colors.gradient.fallbackBackground};
      background-image ${colors.gradient.linearGradientBackground};
      background-size: 100%;
      background-repeat: repeat;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }

    &__length {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      margin: 2rem 0;
    }

    &__break,
    &__session {
      #break-label,
      #session-label {
        width: 100%;
        margin-bottom: 0.3rem;
      }
      font-size: 1rem;
      text-transform: uppercase;
      color: ${colors.app.headerColor};
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: center;
      align-items: center;
    }

    &__length-display {
      font-size: 2.4rem;
    }

    &__timer-display {
      width: 100%;
    }

    &__icon {
      max-width: 32px;
      height: auto;
    }
  }
`;
