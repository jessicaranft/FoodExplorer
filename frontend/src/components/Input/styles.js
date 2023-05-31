import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  width: 100%;
  height: 4.8rem;

  border-radius: 8px;

  display: flex;
  align-items: center;

  > img {
    margin-left: 1.4rem;
  }

  input {
    width: 100%;
    height: 100%;

    padding: 0 1.4rem;

    background: transparent;
    border: none;

    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;