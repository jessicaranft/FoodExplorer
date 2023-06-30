import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useAuth, AuthContext } from '../../hooks/auth';
import { SearchContext } from '../../hooks/search';
import { OrderContext } from '../../hooks/order';

import { api } from '../../services/api';

import { Button } from '../Button';
import { SearchInput } from '../SearchInput';
import { Container, Branding, Logout } from './styles';
import { MobileMenu } from '../MobileMenu';
import menuHamburger from '../../assets/menu-hamburger.svg';
import iconReceipt from '../../assets/icon-receipt.svg';
import logo from '../../assets/logo.svg';
import iconSignOut from '../../assets/icon-signout.svg';
import searchIcon from '../../assets/icon-search.svg';

export function Header() {
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
      <MobileMenu id="menu" className="hide" />

      <Link onClick={handleOpenMenu}>
        <img
          src={menuHamburger}
          alt="clique neste ícone para abrir o menu do aplicativo"
          id="menu-hamburger"
          className="mobile-only"
        />
      </Link>

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
          className="input desktop-only"
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

        {
          order &&
          <Button
            title={`Meu pedido (${totalItems})`}
            showIcon={true}
            tomato100
            className="button desktop-only"
            as={Link}
            to="/order"
          />
        }
        
        <Logout onClick={handleSignOut} className="desktop-only">
          <img src={iconSignOut} alt="clique aqui para sair da sessão" />
        </Logout>

      </div>

      <Link to="/order">
        <div className="icon-receipt-container mobile-only">
          <img src={iconReceipt} alt="clique neste ícone para ver seus pedidos" id="icon-receipt" />
          {
            order &&
            <div className="red-circle">{totalItems}</div>
          }
        </div>
      </Link>

    </Container>
  );
}