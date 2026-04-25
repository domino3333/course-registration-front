import axios from "axios";
import { useState } from "react"
import { ApiHost } from "../api/ApiHost";
import { login } from "../api/authApi";
import { useNavigate } from "react-router-dom";


const LoginPage = () =>{


    const nav = useNavigate();

    const [input,setInput] = useState({
        email:"",
        password:""
    });

    const observeInput = (e)=>{
        setInput({...input,
            [e.target.name]: e.target.value
        })
        
    }

    const clickLogin = async (e)=>{
        e.preventDefault();
        const data = await login(input); // accessToken이 내려옴
        nav('/')
    }

    const clickSignUp = async ()=>{
        nav('/signUp')
    }



    return (<>
        <form onSubmit={clickLogin}>
            <label htmlFor="email">
                <input id="email" onChange={observeInput} name="email" type="text" placeholder="이메일" />
            </label>
            <label htmlFor="password">
                <input id="password" type="password" name="password" onChange={observeInput} placeholder="비밀번호" />
            </label>

            <button type="submit">로그인</button>
        </form>

        <button onClick={clickSignUp}>회원가입</button>
        
    </>)
}

export default LoginPage