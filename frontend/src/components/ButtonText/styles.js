import styled from "styled-components";

export const Container = styled.button`
  max-width: 10.6rem;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;