import styled from "styled-components";
import dropdownArrow from '../../assets/dropdown-arrow.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  padding: 2.4rem 3.2rem 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;

  h1 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
  }

  .col-3,
  .col-2 {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .input-container,
  .input-container select,
  .p-label,
  .file-input-message,
  label {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .file-input-container,
  .input-container select {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    width: 100%;
    height: 4.8rem;

    padding: 0 1.4rem;

    border-radius: 8px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.6rem;

    cursor: pointer;

    input {
      display: none;
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .input-container select {
    appearance: none;
    -webkit-appearance: none;
    background-image: url('${dropdownArrow}');
    background-repeat: no-repeat;
    background-position: right 2rem top 2rem;
  }

  .price-input-container {
    position: relative;
  }

  .currency-symbol {
    position: absolute;
    left: 1.4rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .price-input {
    padding-left: 2rem;
  }

  .ingredients-tags-container {
    width: 100%;
    height: 4.8rem;
    display: flex;
    flex-direction: row;
    gap: 1.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_800};
    padding: .8rem;

    border-radius: 8px;
  }

  .input-container textarea {
    height: 17.2rem;
    padding: 1.4rem;
  }

  input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }

  .button-container {
      display: flex;
      gap: 3.2rem;
  }

  @media (min-width: 769px) {
    flex-grow: 1;
    gap: 3.2rem;
    padding: 0 12.4rem 4.8rem;

    h1 {
      margin-bottom: 1.2rem;
    }

    .col-3 {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .col-2 {
      width: 100%;
      display: grid;
      grid-template-columns: 4fr 1fr;
    }

    .button-container {
      justify-content: right;
    }

    .button-container button {
      width: 17.2rem;
    }
  }
`;

export const Navigation = styled.div`
  padding: 1rem 3.2rem 0;
  
  @media (min-width: 769px) {
    padding: 4rem 12.4rem 0;
  }
`;