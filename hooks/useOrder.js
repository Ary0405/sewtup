import { useContext } from "react";
import { OrderContext } from "@/context/orderContext";

export default function useOrder() {
    return useContext(OrderContext);
}