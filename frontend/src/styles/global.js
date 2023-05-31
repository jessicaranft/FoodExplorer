import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Poppins', sans-serif;
    outline: none;
  }

  input, textarea, label, select {
    font-family: 'Roboto', sans-serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 769px) {
    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: block;
    }
  }
`;