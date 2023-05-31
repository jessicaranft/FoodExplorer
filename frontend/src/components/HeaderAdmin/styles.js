import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  display: grid;
  grid-template-columns: 10% 90%;
  align-items: center;

  #menu-hamburger {
    width: 2.4rem;
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

    .desktop-container {
      max-width: 1440px;
      margin: auto;

      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 1.6rem;
    }
  }
`;

export const Branding = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  gap: .8rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    gap: .8rem;

    > img {
    width: 2.4rem;
    height: 2.4rem;
    }
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: 769px) {
    min-width: 16rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0;

    span {
      text-align: right;
      line-height: 100%;
    }
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;