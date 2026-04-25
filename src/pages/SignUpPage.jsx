import { useState } from "react"
import { signUp } from "../api/authApi"


const SignUpPage = () => {


    const [input,setInput] = useState({
        email:"",
        password:"",
        name:"",
        code:"",
        gender:""
    })

    const observeInput = ()=>{
        setInput({...input,
            [e.target.name]:e.target.value
        })

    }

    const clickComplete = async(input)=>{
        const data = await signUp(input);

        
    }

    return(<>
        
        <form onSubmit={clickComplete}>
            <label htmlFor="email">
                이메일:<input type="text" name="email" />
            </label>

            <label htmlFor="password">
                비밀번호:<input type="passowrd" name="password"/>
            </label>

            <label htmlFor="name">
                이름:<input type="text" name="name"/>
            </label>

            <label htmlFor="code">
                학번:<input type="text" name="code"/>
            </label>

            <label htmlFor="gender">성별:
                <select name="gender" id="gender">
                    <option value="man">남자</option>
                    <option value="woman">여자</option>
                </select>
                
            </label>
            
            <button type="submit">회원가입하기</button>

        </form>


    </>)
}

export default SignUpPage