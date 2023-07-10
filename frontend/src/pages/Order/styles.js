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

  h1 {
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

  .total-price {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
  }

  .payment-container {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-radius: 6px;
    margin-bottom: 3.6rem;
  }

  .payment-guides {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8rem;
  }

  .payment-guides button {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
  }

  .payment-guides button img {
    width: 2.4rem;
  }

  .payment-guides .active {
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .payment-guides .payment-pix {
    border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-top-left-radius: 6px;
  }

  .payment-guides .payment-credit {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-top-right-radius: 6px;
  }

  .payment-content {
    padding: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .payment-content #credit form {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
  }

  .payment-content #credit label {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: .8rem;
  }

  .payment-content #credit input {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 6px;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 100%;
    height: 4.8rem;
    padding: 0 1.4rem;
  }

  .col-2 {
    display: flex;
    gap: 1.6rem;
  }

  .hide {
    display: none;
  }

  @media (min-width: 769px) {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 3.4rem 12.4rem 4.8rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    ul {
      width: 100%;
      margin-bottom: 3.2rem;
    }
    
    ul li {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }
  }
`;