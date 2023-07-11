import styled from "styled-components";
import dropdownArrow from '../../assets/dropdown-arrow.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  padding: 2.4rem;

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
    padding: 2.4rem;
    margin-bottom: 2.4rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .order-details {
    display: flex;
    gap: 2.4rem;
    margin-bottom: 2.4rem;
  }

  .order-items {
    margin-bottom: 1.6rem;
  }

  .order-status .status {    
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    height: 4.8rem;
    padding: 0 1.4rem;

    border-radius: 8px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.6rem;

    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;
    background-image: url('${dropdownArrow}');
    background-repeat: no-repeat;
    background-position: right 2rem top 2rem;
  }

  .order-status .status option[value="pendente"] {
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  .order-status .status option[value="preparando"] {
    color: ${({ theme }) => theme.COLORS.CARROT};
  }

  .order-status .status option[value="entregue"] {
    color: ${({ theme }) => theme.COLORS.MINT};
  }

  .red {
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  .yellow {
    color: ${({ theme }) => theme.COLORS.CARROT};
  }

  .green {
    color: ${({ theme }) => theme.COLORS.MINT};
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