import { Container } from './styles';
import iconMinus from '../../assets/icon-minus.svg';
import iconPlus from '../../assets/icon-plus.svg';

export function Counter({ size = "normal", quantity, onDecrement, onIncrement }) {
  const iconSize = size === "large" ? "20px" : "18px";
  const fontSize = size === "large" ? "22px" : "16px";

  return (
    <Container>
      <button onClick={onDecrement}>
        <img src={iconMinus} style={{ width: iconSize, height: iconSize }} />
      </button>
      
      <p style={{ fontSize }}>{quantity}</p>
      
      <button onClick={onIncrement}>
        <img src={iconPlus} style={{ width: iconSize, height: iconSize }} />
      </button>
    </Container>
  );
}