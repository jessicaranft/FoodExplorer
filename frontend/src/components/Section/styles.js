import styled from "styled-components";

export const Container = styled.section`
  margin: 2.4rem 0;

  > h2 {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;
    margin-bottom: 2.4rem;
  }

  .card-container {
    display: flex;
    gap: 1.6rem;
  }

  @media (min-width: 769px) {
    > h2 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      margin-top: 4.8rem;
    }
  }
`;