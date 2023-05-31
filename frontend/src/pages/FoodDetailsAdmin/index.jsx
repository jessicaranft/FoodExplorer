import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { SearchContext } from '../../hooks/search';

import { Container, Navigation, Main } from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { IngredientTag } from '../../components/IngredientTag';
import { Button } from '../../components/Button';

export function FoodDetailsAdmin() {
  const [foods, setFoods] = useState([]);
  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  function handleEditDetails(id) {
    navigate(`/edit/${id}`);
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
        <HeaderAdmin />
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
  
          <Button
            title="Editar prato"
            onClick={() => handleEditDetails(data.id)}
            showIcon={false}
            tomato100
          />
        </div>

      </Main>
      }

      <Footer />
    </Container>
  );
}