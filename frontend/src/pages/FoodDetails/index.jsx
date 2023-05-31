import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { SearchContext } from '../../hooks/search';

import { Container, Navigation, Main } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import foodPhoto from '../../assets/food-image/meal-salada-ravanello.png';
import { IngredientTag } from '../../components/IngredientTag';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

export function FoodDetails() {
  const [foods, setFoods] = useState([]);
  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchFoodDetails() {
      const response = await api.get(`/food/${params.id}`);
      setData(response.data);
    }

    fetchFoodDetails();
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
        <Header />
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
            <Counter size="large" />
            <Button title="pedir - R$ 25,00" showIcon={true} className="btn-checkout mobile-only" tomato100 />
            <Button title="incluir - R$ 25,00" showIcon={false} className="btn-checkout desktop-only" tomato100 />
          </div>
        </div>

      </Main>
      }

      <Footer />
    </Container>
  );
}