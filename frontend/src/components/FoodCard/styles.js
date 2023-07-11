import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 32rem;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  > p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
    text-align: center;
  }

  > span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  > button {
    background: none;
    border: none;

    font-weight: 500;
    font-size: 1.4rem;
    line-height: 171%;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .card-icon {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    cursor: pointer;
  }

  .card-image {
    width: 8.8rem;
  }

  .cta-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
  }

  .card-button {
    height: 3.2rem;
  }

  @media (min-width: 769px) {
    width: 304px;
    gap: 1.6rem;

    > button {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    }

    > span {
      font-size: 3.2rem;
      line-height: 160%;
    }

    .card-image {
      width: 17.6rem;
      cursor: pointer;
    }

    .cta-container {
      display: flex;
      flex-direction: row;
      gap: 2.4rem;
      height: 4.8rem;
    }

    .card-button {
      height: 100%;
    }
  }
`;