import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineLogout, MdOutlineMenu } from 'react-icons/md';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import { useAuth, AuthContext } from '../../hooks/auth';
import { SearchContext } from '../../hooks/search';
import { OrderContext } from '../../hooks/order';

import { api } from '../../services/api';

import { dark, light } from '../../styles/themes';
import { Button } from '../Button';
import { SearchInput } from '../SearchInput';
import { Container, Branding, Logout } from './styles';
import { MobileMenu } from '../MobileMenu';

import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/icon-search.svg';

export function Header({ selectedTheme, setSelectedTheme }) {
  const { user } = useContext(AuthContext);
  const { signOut } = useAuth();
  const { setSearch } = useContext(SearchContext);
  const { totalItems, setTotalItems } = useContext(OrderContext);

  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);

  function handleOpenMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('hide');
  }

  function handleSearch(e) {
    setSearchInput(e.target.value);
    
    if (e.target.value.length > 0) {
      navigate(`/?title=${e.target.value}`);
    } else {
      navigate("/");
    }
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function toggleTheme() {
    setSelectedTheme((currentTheme) => currentTheme === dark ? light : dark);
  }

  useEffect(() => {
    async function fetchOrder() {
      const response = await api.get(`/orders?user_id=${user.id}`);
      setOrder(response.data);

      if (response.data && response.data.total_items) {
        setTotalItems(response.data.total_items);
      }
    }

    fetchOrder();
  }, [user.id, order, setTotalItems]);

  useEffect(() => {
    setSearch(searchInput);
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title");
    setSearchInput(title || "");
    inputRef.current.focus();
  }, [location.search, setSearch, searchInput]);

  return (
    <Container>
      <SearchContext.Provider value={{ setSearch }}>
        <MobileMenu id="menu" className="hide" />
      </SearchContext.Provider>

      <button onClick={handleOpenMenu}>
        <MdOutlineMenu size={30} className="mobile-only"/>
      </button>

      <div className="desktop-container">
        <Branding>
          <Link to="/">
            <img src={logo} alt="logo com um polígono azul de seis lados" />
            food explorer
          </Link>
        </Branding>

        <SearchInput
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          className="desktop-only input"
          value={searchInput}
          onChange={handleSearch}
          ref={inputRef}
          icon={searchIcon}
        />

        <Link to="/favorites" className="desktop-only nav-links">
          Meus favoritos
        </Link>

        <Link to="/history" className="desktop-only nav-links">
          Histórico de pedidos
        </Link>

        <div className="desktop-only">
          <button onClick={toggleTheme} className="themes-btn">
            {selectedTheme === dark ? (
              <MdOutlineLightMode size={24} />
            ) : (
              <MdOutlineDarkMode size={24} />
            )}
          </button>
        </div>

        {
          order &&
          <Button
            title={`Meu pedido (${totalItems})`}
            showicon={true}
            tomato100="true"
            className="desktop-only button"
            as={Link}
            to="/order"
          />
        }
        
        <Logout onClick={handleSignOut} className="desktop-only logout">
          <MdOutlineLogout size={30} />
        </Logout>

      </div>

      <div className="mobile-only">
        <button onClick={toggleTheme} className="themes-btn">
          {selectedTheme === dark ? (
            <MdOutlineLightMode size={24} />
          ) : (
            <MdOutlineDarkMode size={24} />
          )}
        </button>
      </div>

      <Link to="/order">
        <div className="icon-receipt-container mobile-only">
          <HiOutlineShoppingBag size={28} />
          {
            order &&
            <div className="red-circle">{totalItems}</div>
          }
        </div>
      </Link>

    </Container>
  );
}