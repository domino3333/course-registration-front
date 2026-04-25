import { useState } from "react"
import { signUp } from "../api/authApi"


const SignUpPage = () => {


    const [input, setInput] = useState({
        email: "",
        password: "",
        name: "",
        code: "",
        gender: "man"
    })

    const observeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const clickComplete = async (e) => {
        e.preventDefault();
        console.log("전송인풋:", input);
        const data = await signUp(input);
        setInput({
            email: "",
            password: "",
            name: "",
            code: "",
            gender: "man"
        });


    }

    return (<>

        <form onSubmit={clickComplete}>
            <label htmlFor="email">
                이메일:<input onChange={observeInput} value={input.email}
                    type="text" name="email" />
            </label>

            <label htmlFor="password">
                비밀번호:<input value={input.password} onChange={observeInput} type="password" name="password" />
            </label>

            <label htmlFor="name">
                이름:<input value={input.name} onChange={observeInput} type="text" name="name" />
            </label>

            <label htmlFor="code">
                학번:<input value={input.code} onChange={observeInput} type="text" name="code" />
            </label>

            <label htmlFor="gender">성별:
                <select onChange={observeInput} value={input.gender} name="gender" id="gender">
                    <option value="man">남자</option>
                    <option value="woman">여자</option>
                </select>

            </label>

            <button type="submit">가입하기</button>

        </form>


    </>)
}

export default SignUpPage