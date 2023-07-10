import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  padding: 3.6rem 5.6rem 0;

  @media (min-width: 769px) {
    padding: 4.8rem 12.4rem 0;
  }
`;

export const Main = styled.main`
  padding: 3.6rem 5.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  h1 {
    font-size: 2.6rem;
    font-weight: 500;
    line-height: 140%;
  }

  p {
    text-align: center;
  }

  img {
    width: 26.4rem;
    height: 26.4rem;
  }

  .food-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
  }

  .tags-container {
    width: 100%;

    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    gap: 2.4rem;
  }

  .checkout-container {
    width: 100%;

    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;

    margin-top: 2.4rem;
  }

  .btn-checkout {
    font-size: 1.2rem;
  }

  .btn-checkout img {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 769px) {
    max-width: 1440px;
    margin: auto;
    padding: 0 12.4rem 4.8rem;

    display: flex;
    flex-direction: row;
    flex-grow: 1;

    img {
      width: 39rem;
      height: 39rem;
    }

    h1 {
      font-size: 4rem;
      line-height: 140%;
      font-weight: 500;
    }

    p {
      font-size: 2.4rem;
      line-height: 140%;
      font-weight: 400;
      text-align: left;
    }

    .food-description {
      justify-content: center;
      align-items: flex-start;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
    }

    .checkout-container {
      width: 26rem;
      gap: 3.2rem;
    }
  }
`;