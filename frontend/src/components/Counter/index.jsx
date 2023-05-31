import { Container } from './styles';
import iconMinus from '../../assets/icon-minus.svg';
import iconPlus from '../../assets/icon-plus.svg';

export function Counter({ size = "normal" }) {
  const iconSize = size === "large" ? "20px" : "18px";
  const fontSize = size === "large" ? "22px" : "16px";

  return (
    <Container>
      <img src={iconMinus} style={{ width: iconSize, height: iconSize }} />
      <p style={{ fontSize }}>01</p>
      <img src={iconPlus} style={{ width: iconSize, height: iconSize }} />
    </Container>
  );
}