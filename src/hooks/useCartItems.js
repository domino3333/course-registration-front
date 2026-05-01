import { useEffect, useState } from "react"
import { getCartItemList } from "../api/cartApi";



export const useCartItems = (refresh) =>{


    const [cartItemList,setCartItemList] = useState([]);

    useEffect(()=>{

        const fetchData = async() => {
            
            const data = await getCartItemList();
            console.log('useCartItems후 데이터:',data);
            setCartItemList(data);
        }

        fetchData();

    },[refresh])


    return cartItemList;

}

