import styled, { css } from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 1rem 0;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 5px;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  ${(props) => props.tomato100 && css`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  `}

  ${(props) => props.tomato200 && css`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  `}

  ${(props) => props.tomato400 && css`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  `}

  ${(props) => props.dark800 && css`
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  `}
`;