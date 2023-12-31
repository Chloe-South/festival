import React, { useEffect, useState } from 'react'
import "./Login.css";
import logoImage from '../../img/login/Loginlogo.png';
import with1 from '../../img/login/with1.png';
import with2 from '../../img/login/with2.png';
import googleLogin from '../../img/login/googleLogin.png';
import kakaoLogin from '../../img/login/kakaoLogin.png';
// toast 사용 라이브러리
import { ToastContainer, toast } from "react-toastify";
// react-toastify 제공하는 css
import 'react-toastify/dist/ReactToastify.css';

const User = {
    id: 'testuser',
    pw: 'test2323@@@'
};

function Modal({ message, onClose }) {
    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}


export default function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleId = (e) => {
        setId(e.target.value);
    };

    const handlePw = (e) => {
        setPw(e.target.value);
    };

    const onClickConfirmButton = () => {
        console.log("Button clicked!");          // 1. 로그 확인
        console.log("ID:", id, "PW:", pw);      // 2. 상태 값 확인

        if (id !== User.id) {
            console.log("Incorrect ID");        // 로그 확인
            toast('아이디가 존재하지 않습니다. 회원가입이 필요합니다.');
        } else if (pw !== User.pw) {
            console.log("Incorrect Password");  // 로그 확인
            toast('비밀번호가 다릅니다. 확인해주세요.');
        } else {
            console.log("Login Successful");    // 로그 확인
            toast('로그인에 성공했습니다.');
        }
    };


    return (

        <div className="mainContainer">
            <ToastContainer
                position="bottom-center"
                limit={1}
                closeButton={true}
                autoClose={2000}
            />
        <div className="page">

            <div className="contentWrap">
                <div className="logoImage">
                    <img src={logoImage} alt="Logo Description"/>
                </div>

                <div className="logoName">
                    <span className="logoName1">기억하고 싶은 축제</span> <br/>FestiBook와 함께 해요!
                </div>

                <div className="input_login">
                    아이디
                </div>

                <div
                    className="inputWrap"
                >
                    <input
                        className="input"
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        value={id}
                        onChange={handleId}
                    />
                </div>

                <div className="input_password">
                    비밀번호
                </div>

                <div className="inputWrap">
                    <input
                        className="input"
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={pw}
                        onChange={handlePw}
                    />
                </div>

                <div className="text">
                    <div className="find_id">아이디 찾기</div>
                    <div className="find_password">비밀번호 찾기</div>
                    <div className="join">회원가입</div>
                </div>

                <div className="buttonContainer">
                    <button onClick={onClickConfirmButton} className="bottomButton">
                        LOGIN
                    </button>

                </div>

                <div className="soical_login">
                    <div className="social_img_text">
                        <div className="img_with1"> <img src={with1} alt="img description"/></div>
                        <div className="social_with_text">Or With </div>
                        <div className="img_with2"> <img src={with2} alt="img description"/></div>
                    </div>

                    <div className="social_img">
                        <div className="googleLogin"> <img src={googleLogin} alt="img description"/></div>
                        <div className="kakaoLogin"> <img src={kakaoLogin} alt="img description"/></div>
                    </div>
                </div>


            </div>

        </div>
        </div>
    );
}
