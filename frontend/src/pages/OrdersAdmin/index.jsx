import { useState, useEffect, useContext } from 'react';

import { SearchContext } from '../../hooks/search';
import { AuthContext } from '../../hooks/auth';

import { api } from '../../services/api';

import { Container, Main } from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';

export function OrdersAdmin({ selectedTheme, setSelectedTheme }) {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [orders, setOrders] = useState([]);

  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);

    const formatDate = dateTime.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });

    const formatTime = dateTime.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });

    return `${formatDate} às ${formatTime}`
  }

  function getStatusColor(status) {
    if (status) {
      const lowerCaseStatus = status.toLowerCase();

      if (lowerCaseStatus === "entregue") {
        return "green";
      } else if (lowerCaseStatus === "preparando") {
        return "yellow";
      } else {
        return "red";
      }
    }

    return "red";
  }

  async function handleStatus(orderId, status) {
    await api.patch(`/orders/${orderId}`, { status });

    setOrders(prevOrders => prevOrders.map(order =>
      order.id === orderId ? { ...order, status } : order
      )
    );
  }
  
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get(`/orders/history?user_id=${user.id}`); // index
      setOrders(response.data);
    }

    fetchOrders();
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
        <HeaderAdmin
          setSelectedTheme={setSelectedTheme}
          selectedTheme={selectedTheme}  
        />
      </SearchContext.Provider>

      <Main>
        <h1>Histórico de pedidos</h1>

        <div className="mobile-only">
          {
            orders.length > 0 ? (
              <ul>
                {
                  orders.map((order) => {
                    return (
                      <li key={order.id}>
                        <div className="order-container">
                          <div className="order-details">
                            <p>000{order.id}</p>
                            <p>{formatDateTime(order.created_at)}</p>
                          </div>
                          <div className="order-items">
                            {
                              order.items.map((item) =>
                              <p key={item.food_id}>
                                {item.quantity} x {item.title}
                              </p>
                              )
                            }
                          </div>
                          <div className="order-status">
                            <select
                              name="status"
                              className={`status ${getStatusColor(order.status)}`}
                              value={order.status}
                              onChange={e => handleStatus(order.id, e.target.value)}
                            >
                              <option value="default" disabled>Selecione o status do pedido</option>
                              <option value="pendente" className="red">● Pendente</option>
                              <option value="preparando" className="yellow">● Preparando</option>
                              <option value="entregue" className="green">● Entregue</option>
                            </select>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            ) : (
              <p>Nenhum pedido até agora.</p>
            )
          }
        </div>

        <div className="desktop-only">
          {
            orders.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Detalhamento</th>
                    <th>Data e hora</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    orders.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td>
                            <div className="order-status">
                              <select
                                name="status"
                                className={`status ${getStatusColor(order.status)}`}
                                value={order.status}
                                onChange={e => handleStatus(order.id, e.target.value)}
                              >
                                <option value="default" disabled>Selecione o status do pedido</option>
                                <option value="pendente" className="status-red">● Pendente</option>
                                <option value="preparando" className="status-yellow">● Preparando</option>
                                <option value="entregue" className="status-green">● Entregue</option>
                              </select>
                            </div>
                          </td>
                          <td>
                            <p>000{order.id}</p>
                          </td>
                          <td>
                            {
                              order.items.map((item) =>
                              <p key={item.food_id}>
                                {item.quantity} x {item.title}
                              </p>
                              )
                            }
                          </td>
                          <td>
                            <p>{formatDateTime(order.created_at)}</p>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            ) : (
              <p>Nenhum pedido até agora.</p>
            )
          }
        </div>
      </Main>

      <Footer />
    </Container>
  );
}