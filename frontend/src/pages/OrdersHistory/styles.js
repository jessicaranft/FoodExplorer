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
  }

  .order-container {
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 8px;
    padding: 1rem 1.2rem;
    margin-bottom: 2.4rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .order-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }

  .order-status {
    text-transform: capitalize;
  }

  .status-circle {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: .6rem;
  }

  .green {
    background-color: ${({ theme }) => theme.COLORS.MINT};
  }

  .red {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  .yellow {
    background-color: ${({ theme }) => theme.COLORS.CARROT};
  }

  @media (min-width: 769px) {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 3.4rem 12.4rem 4.8rem;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    table {
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;

      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    table td, th {
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      padding: 1.6rem 2.4rem;
    }

    table th:first-child {
      border-top-left-radius: 8px;
    }

    table th:last-child {
      border-top-right-radius: 8px;
    }
  }
`;