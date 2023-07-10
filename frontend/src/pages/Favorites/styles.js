import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  padding: 5.6rem;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > h1 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    margin-bottom: 4.2rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  ul li img {
    width: 7.2rem;
    height: 7.2rem;
  }

  ul li h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  ul li button {
    background: none;
    border: none;

    font-weight: 400;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media (min-width: 769px) {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 3.4rem 12.4rem 4.8rem;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 3.2rem;
    }

    ul li {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      margin-bottom: 3.2rem;
    }
  }
`;