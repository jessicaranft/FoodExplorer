import { useNavigate } from 'react-router-dom';
import { HiOutlinePencil } from 'react-icons/hi';

import { Container } from './styles';

import { api } from '../../services/api';

export function FoodCardAdmin({ data, ...rest }) {
  const imageUrl = `${api.defaults.baseURL}/files/${data.image}`;

  const navigate = useNavigate();

  function handleEditDetails(id) {
    navigate(`/edit/${id}`);
  }

  function handleFoodDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <Container {...rest}>
      <button id="card-icon" onClick={() => {handleEditDetails(data.id)}}>
        <HiOutlinePencil size={28} />
      </button>
      <img src={imageUrl} className="card-image" onClick={() => handleFoodDetails(data.id)} />
      <button onClick={() => handleFoodDetails(data.id)}>
        {data.title} &gt;
      </button>

      <p className="desktop-only">
        {data.description}
      </p>

      <span>{data.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
    </Container>
  );
}
