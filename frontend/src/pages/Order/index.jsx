import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchContext } from '../../hooks/search';
import { AuthContext } from '../../hooks/auth';
import { OrderProvider } from '../../hooks/order';

import { api } from '../../services/api';

import { Container, Main } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

import pix from '../../assets/icon-pix.svg';
import credit from '../../assets/icon-credit.svg';
import qrCode from '../../assets/pix-qrcode.png';

export function Order() {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState();
  const [orderItems, setOrderItems] = useState([]);
  const [price, setPrice] = useState("");
  const [foods, setFoods] = useState([]);
  const [IsPixActive, setIsPixActive] = useState(true);
  const [IsCreditActive, setIsCreditActive] = useState(false);

  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  const navigate = useNavigate();

  async function handlePixMethod() {
    await api.put(`/orders/${user.id}`, { payment_method: "pix" });

    setIsPixActive(true);
    setIsCreditActive(false);

    const pix = document.querySelector("#pix");
    const credit = document.querySelector("#credit");
    pix.classList.remove("hide");
    credit.classList.add("hide");
  }

  async function handleCreditMethod() {
    await api.put(`/orders/${user.id}`, { payment_method: "credit" });

    setIsPixActive(false);
    setIsCreditActive(true); 

    const pix = document.querySelector("#pix");
    const credit = document.querySelector("#credit");
    pix.classList.add("hide");
    credit.classList.remove("hide");
  }

  async function handleCompleteOrder() {
    try {
      await api.post(`/orders/${user.id}/${order.id}`);
      alert("Pedido finalizado com sucesso!");
      navigate("/history");
    } catch (error) {
      alert("Não foi possível finalizar o pedido.");
      console.log(error);
    }
  }
  
  async function removeOrderItem(id) {
    const confirm = window.confirm("Tem certeza que deseja excluir esse prato ou bedida?");

    if (confirm) {
      await api.delete(`/orders-items/${user.id}/${id}`, {});
      setOrderItems(prevOrder => prevOrder.filter(order => order.id !== id));
      updatePrice();
    }
  }

  async function updatePrice() {
    const response = await api.get(`/orders?user_id=${user.id}`);
    setPrice(response.data.total_price); 
  }

  useEffect(() => {
    async function fetchOrder() {
      const response = await api.get(`/orders?user_id=${user.id}`);
      //console.log(response.data);
      setOrder(response.data);
      setPrice(response.data.total_price);
    }

    fetchOrder();
  }, []);

  useEffect(() => {
    async function fetchOrderItems() {
      const response = await api.get(`/orders-items?user_id=${user.id}`);
      setOrderItems(response.data);
    }

    fetchOrderItems();
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
        <div>
          <h1>Meu pedido</h1>

          <div>
            {
              orderItems.length > 0 ? (
                <ul>
                  {
                    orderItems.map((item) => {
                      return (
                        <li key={item.id}>
                          <div>
                            <img src={`${api.defaults.baseURL}/files/${item.image}`} alt={`Foto do prato ou bebida ${item.title}`} />
                          </div>
                          <div>
                            <h2>{item.quantity} x {item.title}</h2>
                            <button onClick={() => removeOrderItem(item.id)}>
                              Excluir
                            </button>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              ) : (
                <p>Nenhum prato ou bebida no pedido.</p>
              )
            }
          </div>
            {
              order &&
              <p className="total-price">
                Total: {price ? price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"}) : "R$ 0,00"}
              </p>
            }
        </div>

        <div>
          <h1>Pagamento</h1>

        <div className="payment-container">
          <div className="payment-guides">
            <button
              className={`payment-pix ${IsPixActive ? "active" : ""}`}
              onClick={handlePixMethod}
            >
              <img src={pix} alt="ícone do pix" />
              Pix
            </button>
            <button
              className={`payment-credit ${IsCreditActive ? "active" : ""}`}
              onClick={handleCreditMethod}
            >
              <img src={credit} alt="ícone do cartão de crédito" />
              Crédito
            </button>
          </div>
          <div className="payment-content">
            <div id="pix">
              <img src={qrCode} alt="código QR para pagamento em PIX" />
            </div>
            <div id="credit" className="hide">
              <form>
                <div className="input-wrapper">
                  <label htmlFor="number">
                    Número do cartão
                  </label>
                  <input type="text" id="number" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="col-2">
                  <div className="input-wrapper">
                    <label htmlFor="expiry-date">
                      Validade
                    </label>
                    <input type="text" id="expiry-date" placeholder="00/00" />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="cvc">
                      CVC
                    </label>
                    <input type="text" id="cvc" placeholder="000" />
                  </div>
                </div>
              </form>
            </div>
          </div>         
        </div>

        <Button
          onClick={handleCompleteOrder}
          title="Finalizar pedido"
          showIcon={false}
          tomato100
        />

        </div>

      </Main>

      <Footer />
    </Container>
  );
}