import { useState, createContext, useContext, useEffect } from 'react';

import { api } from '../services/api';
import { AuthContext } from './auth';

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    async function fetchOrder() {
      const response = await api.get(`/orders?user_id=${user.id}`);
      const order = response.data;

      // Atualize o estado local com a quantidade total de itens do pedido
      setTotalItems(order.total_items || 0);
    }

    fetchOrder();
  }, []);

  return (
    <OrderContext.Provider value={{ totalItems, setTotalItems }}>
      {children}
    </OrderContext.Provider>
  );
}