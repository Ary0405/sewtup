import { createContext, useState } from "react";

export const OrderContext = createContext({});

export function OrderProvider({children, ...props}) {
    const [orderTitle, setOrderTitle] = useState('');
    const order = {
        orderTitle,
        setOrderTitle,
        ...props,
    }
    return <OrderContext.Provider value={order}>{children}</OrderContext.Provider>
}