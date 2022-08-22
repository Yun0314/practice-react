import emotionStyled from '@emotion/styled';

const AppDiv = emotionStyled.div`
  text-align: center;
`;

const AppHeader = emotionStyled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  font-size: calc(10px + 2vmin);
  color: white;
`;

export { AppDiv, AppHeader };
