import { Container } from './styles';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export function Button({
  title,
  showicon,
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
      {showicon && <HiOutlineShoppingBag size={20} />}
      {title}
    </Container>
  );
}