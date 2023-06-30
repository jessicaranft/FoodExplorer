import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  #menu-hamburger {
    width: 2.4rem;
  }

  #icon-receipt {
    width: 2.6rem;
  }

  .icon-receipt-container {
    position: relative;
    width: 3.6rem;
    height: 3.2rem;

    display: flex;
    align-items: flex-end;
  }

  .red-circle {
    width: 2rem;
    height: 2rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 50%;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
  }

  .hide {
    display: none;
  }

  #menu {
    animation: slide 700ms;
  }

  @keyframes slide {
    0% {
      transform: translateX(-500px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (min-width: 769px) {
    display: block;
    align-items: center;
    padding: 2.8rem 12rem;
    height: 10.4rem;

    .input {
      max-width: 58rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button {
      max-width: 21rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-links {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .desktop-container {
      max-width: 1440px;
      margin: auto;

      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 1.6rem;
    }

    .mobile-only {
      display: none;
    }
  }
`;

export const Branding = styled.div`
  a {
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    display: flex;
    align-items: center;
    gap: .8rem;
  }

  a img {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media (min-width: 769px) {
    min-width: 16rem;
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;