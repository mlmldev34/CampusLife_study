import './App.css'
import {useState} from "react";
import LoginComp from "./LoginComp.jsx";
import Header from "./Header.jsx";

function App() {
    const [email, setEmail] = useState('')
    const [isLogin, setIsLogin] = useState(false);
    return (
    <>
        <h2>Login Form</h2>
        {isLogin ? <>
            <h2>메인 화면입니다</h2>
            <Header emailT={email}></Header>
        </> : <LoginComp isLogin={isLogin} setIsLogin={setIsLogin} email={email} setEmail={setEmail}></LoginComp>}
    </>
  )
}

export default App
