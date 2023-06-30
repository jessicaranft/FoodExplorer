import { useState, useEffect, useContext } from 'react';

import { SearchContext } from '../../hooks/search';
import { AuthContext } from '../../hooks/auth';
import { OrderProvider } from '../../hooks/order';

import { api } from '../../services/api';

import { Container, Main } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Favorites() {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [foods, setFoods] = useState([]);

  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  async function removeFavorite(id) {
    //await api.delete("/favorites", { data: { user_id: user.id, id }});
    await api.delete(`/favorites/${user.id}/${id}`);
    setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== id));
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorites?user_id=${user.id}`);
      setFavorites(response.data);
    }

    fetchFavorites();
  }, []);
  
  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/food?title=${search}`)
      setFoods(response.data);
    }

    fetchFood(search);
  }, [search]);

  return(
    <Container>
      <SearchContext.Provider value={{ setSearch }}>
        <OrderProvider>
          <Header />
        </OrderProvider>
      </SearchContext.Provider>

      <Main>
        <h1>Meus favoritos</h1>

        <div>
          {
            favorites.length > 0 ? (
              <ul>
                {
                  favorites.map((favorite) => {
                    return (
                      <li key={favorite.id}>
                        <div>
                          <img src={`${api.defaults.baseURL}/files/${favorite.image}`} alt={`Foto do prato ou bebida ${favorite.title}`} />
                        </div>
                        <div>
                          <h2>{favorite.title}</h2>
                          <button onClick={() => removeFavorite(favorite.id)}>
                            Remover dos favoritos
                          </button>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            ) : (
              <p>Nenhum prato ou bebida marcado como favorito.</p>
            )
          }
        </div>
      </Main>

      <Footer />
    </Container>
  );
}