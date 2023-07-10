import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .content-wrapper {
    width: 100%;

    @media (min-width: 769px) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  @media (min-width: 769px) {
    max-width: 1440px;
    margin: auto;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    display: none;
  }

  label {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
  }

  p {
    text-align: center;
    margin-top: 1.6rem;
  }

  .themes-btn {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 769px) {
    width: 47.6rem;
    padding: 6.4rem;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h1 {
      display: block;

      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;
      text-align: center;
    }
  }
`;

export const Branding = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 7.2rem;
`;