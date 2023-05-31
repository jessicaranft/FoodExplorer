import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { SearchContext } from '../../hooks/search';

import { Button } from '../Button';
import { SearchInput } from '../SearchInput';
import { Container, Branding, Logout } from './styles';
import { MobileMenuAdmin } from '../MobileMenuAdmin';
import menuHamburger from '../../assets/menu-hamburger.svg';
import logo from '../../assets/logo.svg';
import iconSignOut from '../../assets/icon-signout.svg';
import searchIcon from '../../assets/icon-search.svg';

export function HeaderAdmin() {
  const { signOut } = useAuth();
  const { setSearch } = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState("");

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
    setSearch(searchInput);
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title");
    setSearchInput(title || "");
    inputRef.current.focus();
  }, [location.search, setSearch, searchInput]);

  return (
    <Container>
      <SearchContext.Provider value={{ setSearch }}>
        <MobileMenuAdmin id="menu" className="hide" />
      </SearchContext.Provider>

      <Link onClick={handleOpenMenu}>
        <img
          src={menuHamburger}
          alt="clique neste ícone para abrir o menu do aplicativo"
          id="menu-hamburger"
          className="mobile-only"
        />
      </Link>


      <div className="desktop-container">
        <Link to="/">
          <Branding>
              <div>
                <img src={logo} alt="logo com um polígono azul de seis lados" />
                food explorer
              </div>
              <span>admin</span>
          </Branding>
        </Link>

        <SearchInput
          type="text"
          placeholder="Busque pelas opções de pratos"
          className="input desktop-only"
          value={searchInput}
          onChange={handleSearch}
          ref={inputRef}
          icon={searchIcon}
        />

          <Button tomato100 title="Novo prato" showIcon={false} className="button desktop-only" as={Link} to="/new" />

        <Logout onClick={handleSignOut} className="desktop-only">
          <img src={iconSignOut} alt="clique aqui para sair da sessão" />
        </Logout>
      </div>

    </Container>
  );
}