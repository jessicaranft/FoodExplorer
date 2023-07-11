import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  touch-action: none;

  .hide {
    display: none;
  }

  > main {
    flex-grow: 1;
    padding: 3.6rem 2.8rem 0;
  }

  nav {
    margin-top: 3.6rem;
  }

  ul {
    list-style: none;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 140%;
  }

  ul a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  ul li {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 1rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1.6rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2.1rem;
  line-height: 2.5rem;

  > button {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  font-size: 2.4rem;
  font-weight: 300;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;