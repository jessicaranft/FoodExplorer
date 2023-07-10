import { Container } from './styles';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

export function IngredientTagItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button onClick={onClick} type="button">
        {isNew ? <AiOutlinePlus size={14} /> : <AiOutlineClose size={14} />}
      </button>
    </Container>
  );
}