import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';

import { api } from '../../services/api';
import { SearchContext } from '../../hooks/search';

import { Container, Main } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { FoodCard } from '../../components/FoodCard';
import { Footer } from '../../components/Footer';

SwiperCore.use([Navigation]);

export function Home() {
  const [foods, setFoods] = useState([]);

  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  const swiperBreakpoints = {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.40": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@0.60": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  }

  const navigate = useNavigate();

  function handleFoodDetails(id) {
    navigate(`/details/${id}`);
  }

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

      <Main>
        <div className="banner-container">
          <div className="home-image">
          </div>
          <div className="home-text">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

        <Section title="Refeições">
          <div className="caroussel-container">
            <div className="left-mask"></div>
            <Swiper
              navigation={true}
              prevbutton={<div className="swiper-button-prev"></div>}
              nextbutton={<div className="swiper-button-next"></div>}
              grabCursor={true}
              breakpoints={swiperBreakpoints}
            >
              {
                foods.filter(food => food.category == "meal").map((item, index) => (
                  <SwiperSlide key={String(index)}>
                    <FoodCard
                      data={item}
                      onClick={() => handleFoodDetails(item.id)}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </Section>

        <Section title="Sobremesas">
          <div className="caroussel-container">
            <Swiper
              navigation={true}
              prevbutton={<div className="swiper-button-prev"></div>}
              nextbutton={<div className="swiper-button-next"></div>}
              grabCursor={true}
              breakpoints={swiperBreakpoints}
            >
              {
                foods.filter(food => food.category == "dessert").map((item, index) => (
                  <SwiperSlide key={String(index)}>
                    <FoodCard
                      data={item}
                      onClick={() => handleFoodDetails(item.id)}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </Section>

        <Section title="Bebidas">
          <div className="caroussel-container">
            <Swiper
              navigation={true}
              prevbutton={<div className="swiper-button-prev"></div>}
              nextbutton={<div className="swiper-button-next"></div>}
              grabCursor={true}
              breakpoints={swiperBreakpoints}
            >
              {
                foods.filter(food => food.category == "drink").map((item, index) => (
                  <SwiperSlide key={String(index)}>
                    <FoodCard
                      data={item}
                      onClick={() => handleFoodDetails(item.id)}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </Section>

      </Main>

      <Footer />
    </Container>
  );
}