import styled from "styled-components";
import homeImg from '../../assets/home.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  padding: 1.6rem;
  position: relative;

  .theme-btn {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;

    position: absolute;
    right: 50%;
    top: 1.6rem;
  }

  .banner-container {
    width: 100%;
    height: 12rem;
    border-radius: 3px;
    margin: 4.4rem auto;

    background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.GRADIENT_900} 0%, ${({ theme }) => theme.COLORS.GRADIENT_800} 100%);

    display: grid;
    grid-template-columns: 45% 55%;
  }

  .home-image {
    align-self: center;
    position: relative;
    height: 100%;
  }

  .home-image::before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: -2rem;
    width: 19.1rem;
    height: 14.9rem;
    z-index: 1;
    background: url(${homeImg}) no-repeat center bottom;
    background-size: 100%;
  }

  .home-text {
    width: 100%;
    align-self: center;
    justify-self: right;
    padding-right: .5rem;
  }

  .home-text h2 {
    font-weight: 600;
    font-size: clamp(1.2rem, 1.2rem + 1vw, 1.8rem);
    line-height: 140%;
  }

  .home-text p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 140%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2.4rem;
  }

  .caroussel-container {
    width: 100%;
  }

  @media (min-width: 769px) {
    max-width: 1440px;
    margin: auto;
    padding: 4.8rem 12.4rem;

    .banner-container {
      max-width: 112rem;
      margin: 16.4rem auto 0;

      height: 26rem;

      border-radius: 8px;
    }

    .home-image {
      align-self: center;
      position: relative;

      height: 100%;
    }

    .home-image::before {
      content: " ";
      position: absolute;
      bottom: 0;
      left: -10rem;
      width: 632px;
      height: 406px;
      z-index: 1;
      background: url(${homeImg}) no-repeat center center;
      background-size: cover;
    }

    .home-text {
      align-self: center;
    }

    .home-text h2 {
      font-size: 4rem;
      font-weight: 500;
      line-height: 140%;
    }

    .home-text p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 5.6rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    .swiper-button-prev::after {
      margin-left: 24px;
    }

    .swiper-button-next::after {
      margin-right: 24px;
    }
  }
`;