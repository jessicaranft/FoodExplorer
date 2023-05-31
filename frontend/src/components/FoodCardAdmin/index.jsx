import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import iconPencil from '../../assets/icon-pencil.svg';

import { api } from '../../services/api';

export function FoodCardAdmin({ data, ...rest }) {
  const [foods, setFoods] = useState([]);
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
        <img src={iconPencil} />
      </button>
      <img src={imageUrl} className="card-image" onClick={() => handleFoodDetails(data.id)} />
      <button onClick={() => handleFoodDetails(data.id)}>
        {data.title} &gt;
      </button>

      <p className="desktop-only">
        {data.description}
      </p>

      <span>{data.price}</span>
    </Container>
  );
}
