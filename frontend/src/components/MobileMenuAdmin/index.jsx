import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { useAuth } from '../../hooks/auth';
import { SearchContext } from '../../hooks/search';

import { Container, Header, Logout } from './styles';
import { Footer } from '../../components/Footer';
import { SearchInput } from '../../components/SearchInput';
import searchIcon from '../../assets/icon-search.svg';

export function MobileMenuAdmin({ className, id }) {
  const { signOut } = useAuth();
  const { setSearch } = useContext(SearchContext);

  const navigate = useNavigate();

  function handleCloseMenu() {
    const menu = document.getElementById('menu');
    const searchValue = document.getElementById('searchInput').value;

    if (searchValue && searchValue.length > 0) {
      navigate(`/?title=${searchValue}`);
    } 
    
    setSearch(searchValue);
    menu.classList.add('hide');  
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container className={className} id={id}>
      <Header>
        <button onClick={handleCloseMenu}>
          <AiOutlineClose size={28} />
        </button>
        Menu
      </Header>
        <main>
          <SearchInput
            type="text"
            id="searchInput"
            placeholder="Busque pelas opções de pratos"
            className="input mobile-only"
            onChange={e => setSearch(e.target.value)}
            icon={searchIcon}
          />

          <nav>
            <ul>
              <li>
                <Link to="/new">Novo prato</Link>
              </li>
              <li>
                <Link to="/orders">Histórico de pedidos</Link>
              </li>
              <li>
                <Logout onClick={handleSignOut}>
                  Sair
                </Logout>
              </li>

            </ul>
          </nav>
        </main>
      <Footer />
    </Container>
  );
}