import { Container } from './styles';
import deleteIngredient from '../../assets/form-tag-delete.svg';
import addIngredient from '../../assets/form-tag-add.svg';

export function IngredientTagItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button onClick={onClick} type="button">
        {isNew ? <img src={addIngredient} /> : <img src={deleteIngredient} />}
      </button>
    </Container>
  );
}