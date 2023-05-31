import { Container } from './styles';
import icon from '../../assets/icon-receipt.svg';

export function Button({
  title,
  showIcon = true,
  tomato100,
  tomato200,
  tomato400,
  dark800,
  ...rest
}) {
  return (
    <Container
      type="button"
      tomato100={tomato100}
      tomato200={tomato200}
      tomato400={tomato400}
      dark800={dark800}
      {...rest}
    >
      {showIcon && <img src={icon} alt="ícone do botão de checkout" />}
      {title}
    </Container>
  );
}