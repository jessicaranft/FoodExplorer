import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineLogout, MdOutlineMenu } from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { SearchContext } from '../../hooks/search';

import { dark, light } from '../../styles/themes';
import { Button } from '../Button';
import { SearchInput } from '../SearchInput';
import { Container, Branding, Logout } from './styles';
import { MobileMenuAdmin } from '../MobileMenuAdmin';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/icon-search.svg';

export function HeaderAdmin({ selectedTheme, setSelectedTheme }) {
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

  function toggleTheme() {
    setSelectedTheme((currentTheme) => currentTheme === dark ? light : dark);
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

      <button onClick={handleOpenMenu}>
        <MdOutlineMenu size={30} className="mobile-only"/>
      </button>


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
          className="desktop-only input"
          value={searchInput}
          onChange={handleSearch}
          ref={inputRef}
          icon={searchIcon}
        />

        <Link to="/orders" className="desktop-only nav-links">
          Lista de pedidos
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

        <Button tomato100="true" title="Novo prato" showicon={false} className="desktop-only button" as={Link} to="/new" />

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
    </Container>
  );
}