import { useEffect, useState } from "react"



const useCartItems = () =>{


    const [cartItems,setCartItems] = useState([]);


    useEffect(()=>{

        const fetchData = async() => {
            
            const data = await getCartItems();
            console.log('useCartItems후 데이터:',data);
            setCartItems(data);
        }

        fetchData();

    },[])







}