import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { SearchContext } from '../../hooks/search';
import { AuthContext } from '../../hooks/auth';
import { OrderProvider } from '../../hooks/order';

import { Container, Navigation, Main } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { IngredientTag } from '../../components/IngredientTag';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

export function FoodDetails({ selectedTheme, setSelectedTheme }) {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState();

  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1);
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
      const order_id = order.id;
      const food_id = data.id;

      await api.post(`/orders-items/${user.id}`, {
        order_id,
        food_id,
        quantity: quantity,
      });

      alert("Prato adicionado com sucesso!");
      navigate("/");

    } catch (error) {
      alert("Erro ao adicionar itens no carrinho.");
    }
  }

  useEffect(() => {
    async function fetchFoodDetails() {
      const response = await api.get(`/food/${params.id}`);
      setData(response.data);
    }

    fetchFoodDetails();
  }, []);

  useEffect(() => {
    async function fetchOrder() {
      const response = await api.get(`/orders/history?user_id=${user.id}`); // index
      setOrder(response.data);
    }

    fetchOrder();
  }, []);

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/food?title=${search}`)
      setFoods(response.data);
    }

    fetchFood(search);
  }, [search]);

  return (
    <Container>
      <SearchContext.Provider value={{ setSearch }}>
        <OrderProvider>
          <Header
            setSelectedTheme={setSelectedTheme}
            selectedTheme={selectedTheme}  
          />
        </OrderProvider>
      </SearchContext.Provider>

      <Navigation>
        <div className="mobile-only" >
          <ButtonText title="voltar" size="normal" onClick={handleBack} />
        </div>
        <div className="desktop-only" >
          <ButtonText title="voltar" size="large" onClick={handleBack} />
        </div>
      </Navigation>

      {
        data &&
        <Main>
          
          <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={`foto do prato ou bebida ${data.title}`} className="food-image" />

          <div className="food-description">
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {
              data.ingredients &&
                <div className="tags-container">
                  {
                    data.ingredients.map(ingredient => (
                      <IngredientTag
                        key={String(ingredient.id)}
                        title={ingredient.name}
                      />
                    ))
                  }
                </div>
            }

            <div className="checkout-container">
              <Counter
                size="large"
                quantity={quantity}
                onDecrement={handleDecrement}
                onIncrement={handleIncrement}
              />
              <Button
                onClick={handleAddToCart}
                title={`incluir - ${data.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`}
                showicon={true}
                className="btn-checkout"
                tomato100
              />
            </div>
          </div>

        </Main>
      }

      <Footer />
    </Container>
  );
}