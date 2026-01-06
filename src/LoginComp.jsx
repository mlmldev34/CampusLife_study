import React, {useState} from 'react'
import Header from "./Header.jsx";

const account = {
    email : 'test@test.com',
    pw: '1234'
}

const LoginComp = ({isLogin, setIsLogin, email, setEmail})=>{

    const [pw, setPw] = useState('')

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePw = (event) => {
        setPw(event.target.value)
    }

    const handleSubmit = ()=>{
        if(email === account.email && pw === account.pw){
            alert("로그인 성공")
            setIsLogin(!isLogin)
        }
        else{
            alert("로그인 실패")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                Email <input type="text" name="email" value={email} onChange={handleEmail}/>
                Password <input type="password" name="pw" value={pw} onChange={handlePw}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginComp