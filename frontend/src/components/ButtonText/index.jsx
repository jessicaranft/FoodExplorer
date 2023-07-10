import { Container } from './styles';
import { MdArrowBackIosNew } from 'react-icons/md';

export function ButtonText({ title, size = "normal",...rest }) {
  const iconSize = size === "large" ? 22 : 15;
  const fontSize = size === "large" ? "24px" : "16px";

  return (
    <Container type="button" {...rest}>
      <MdArrowBackIosNew size={iconSize} />
      <p style={{ fontSize }}>{title}</p>
    </Container>
  );
}