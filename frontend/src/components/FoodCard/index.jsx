import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';

import { api } from '../../services/api';
import { AuthContext } from '../../hooks/auth';

export function FoodCard({ data, ...rest }) {
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);

  const imageUrl = `${api.defaults.baseURL}/files/${data.image}`;

  const navigate = useNavigate();

  function handleFoodDetails(id) {
    navigate(`/details/${id}`);
  }

  // Add items to cart
  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  async function handleAddToCart() {
    try {
      const user_id = user.id;
      const food_id = data.id;

      await api.post("/cart-item", {
        user_id,
        food_id,
        quantity: quantity,
      });

      alert("Prato adicionado com sucesso!");

    } catch (error) {
      alert("Erro ao adicionar itens no carrinho.");
    }
  }

  // Add and remove favorite food
  async function handleFavorite(id) {
    try {
      if (isFavorite) {
        await removeFavorite(id);
      } else {
        await api.post("/favorites", { user_id: user.id, food_id: data.id });
        setIsFavorite(true);
      }
    } catch (error) {
      alert("Erro ao adicionar/remover dos favoritos.");
    }
  }

  async function removeFavorite(id) {
    try {
      await api.delete(`/favorites/${user.id}/${id}`);
      setIsFavorite(false);
    } catch (error) {
      alert("Erro ao remover dos favoritos.");
    }
  }

  useEffect(() => {
    async function checkIsFavorite() {
      try {
        const response = await api.get(`/favorites/check?user_id=${user.id}&food_id=${data.id}`);
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        alert("Erro ao buscar os pratos favoritos.");
      }
    }

    async function getFavoriteId() {
      try {
        const response = await api.get(`/favorites?user_id=${user.id}`);
        if (response.data.length > 0) {
          setFavoriteId(response.data[0].id);
        }
      } catch (error) {
        alert("Erro ao buscar o ID do prato favorito.");
      }
    }

    if (user) {
      checkIsFavorite();
      getFavoriteId();
    }
  }, [user, data.id]);

  return (
    <Container {...rest}>
      {
        isFavorite ? (
          <HiHeart
            size={24}
            className="card-icon"
            onClick={() => handleFavorite(favoriteId)}
          />
        ) : (
          <HiOutlineHeart
            size={24}
            className="card-icon"
            onClick={() => handleFavorite(favoriteId)}
          />
        )
      }
      
      <img src={imageUrl} className="card-image" onClick={() => handleFoodDetails(data.id)} />
      
      <button onClick={() => handleFoodDetails(data.id)}>
        {data.title} &gt;
      </button>

      <p className="desktop-only">
        {data.description}
      </p>

      <span>{data.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>

      <div className="cta-container">
        <div className="mobile-only">
          <Counter
            size="normal"
            quantity={quantity}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
        </div>

        <div className="desktop-only">
          <Counter
            size="large"
            quantity={quantity}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
        </div>

        <Button
          onClick={handleAddToCart}
          title="incluir"
          className="card-button"
          showIcon={false}
          tomato100
        />
      </div>

    </Container>
  );
}
