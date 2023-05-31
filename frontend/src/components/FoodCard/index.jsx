import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import favHeart from '../../assets/fav-heart.svg';
import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';

import { api } from '../../services/api';

export function FoodCard({ data, ...rest }) {
  const [foods, setFoods] = useState([]);
  const imageUrl = `${api.defaults.baseURL}/files/${data.image}`;

  function handleEditDetails(id) {
    navigate(`/edit/${id}`);
  }

  function handleFoodDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <Container {...rest}>
      <img src={favHeart} id="card-icon" />
      <img src={imageUrl} className="card-image" onClick={() => handleFoodDetails(data.id)} />
      
      <button onClick={() => handleFoodDetails(data.id)}>
        {data.title} &gt;
      </button>

      <p className="desktop-only">
        {data.description}
      </p>

      <span>{data.price}</span>

      <div className="cta-container">
        <div className="mobile-only">
          <Counter size="normal" />
        </div>

        <div className="desktop-only">
          <Counter size="large" />
        </div>

        <Button title="incluir" className="card-button" showIcon={false} tomato100 />
      </div>

    </Container>
  );
}
