import styled from 'styled-components';

export const Container = styled.div`
  > textarea {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    height: 4.8rem;
    padding: 0 1.4rem;
    border-radius: 8px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: left;
  }
`;