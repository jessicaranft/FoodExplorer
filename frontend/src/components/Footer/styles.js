import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.7rem;

  @media (min-width: 769px) {
    padding: 0 12.3rem;
  }
`;

export const Branding = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  display: flex;
  align-items: center;
  gap: .6rem;
`;