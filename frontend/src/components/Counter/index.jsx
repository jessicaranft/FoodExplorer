import { Container } from './styles';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export function Counter({ size = "normal", quantity, onDecrement, onIncrement }) {
  const iconSize = size === "large" ? 24 : 20;
  const fontSize = size === "large" ? "22px" : "16px";

  return (
    <Container>
      <button onClick={onDecrement}>
        <AiOutlineMinus size={iconSize} />
      </button>
      
      <p style={{ fontSize }}>{quantity}</p>
      
      <button onClick={onIncrement}>
        <AiOutlinePlus size={iconSize} />
      </button>
    </Container>
  );
}