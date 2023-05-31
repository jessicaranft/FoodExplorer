import { Container } from './styles';
import arrow from '../../assets/arrow-left.svg';

export function ButtonText({ title, size = "normal",...rest }) {
  const iconSize = size === "large" ? "22px" : "15px";
  const fontSize = size === "large" ? "24px" : "16px";

  return (
    <Container type="button" {...rest}>
      <img src={arrow} alt="seta para a esquerda" style={{ height: iconSize }} />
      <p style={{ fontSize }}>{title}</p>
    </Container>
  );
}