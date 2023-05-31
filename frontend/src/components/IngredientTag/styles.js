import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 5px;

  padding: 0 .8rem;
  height: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;
`;