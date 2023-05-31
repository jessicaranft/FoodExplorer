import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 29.2rem;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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

  #card-icon {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    background: none;
    border: none;
  }

  .card-image {
    width: 8.8rem;
  }

  @media (min-width: 769px) {
    width: 304px;
    height: 46.2rem;
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
  }
`;