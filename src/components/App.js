import '../../src/components/Page/Page.css';
import Header from './Header/Header';
import LoginFrame from './LoginFrame/LoginFrame'

import {Route, Routes} from "react-router-dom";
import MainApi from "../utils/MainApi";
import {useNavigate} from 'react-router-dom';
import InfoTooltip from "./InfoTooltip/InfoTooltip";
import {useState} from "react";

import success from "../images/success.svg";
import fail from "../images/fail.svg";
import MainMenuFrame from "./MainMenuFrame/MainMenuFrame";
import SelectLotFrame from "./SelectLotFrame/SelectLotFrame";


function App() {

    const navigate = useNavigate();

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [popupTitle, setPopupTitle] = useState('');
    const [popupImage, setPopupImage] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);


    function onLogin() {

        setIsOpenPopup(true);
        setPopupImage(success);
        setPopupTitle("Вы успешно зарегистрировались");

        setLoggedIn(true);
        navigate('/mainMenu');

        // MainApi.authorize()
        //     .then((res) => {
        //         if (res) {
        //
        //             // setIsOpenPopup(true);
        //             // setPopupImage(success);
        //             // setPopupTitle("Вы успешно авторизовались!");
        //             // setLoggedIn(true);
        //
        //             // history.push('/mainMenu')
        //             navigate('/mainMenu');
        //         }
        //     })
        //     .catch((err) => {
        //         // setIsOpenPopup(true);
        //         // setPopupImage(fail);
        //         // setPopupTitle('Ошибка авторизации!' + err);
        //     });
    };

    function openPopup(textError, status) {
        setPopupTitle(textError);
        setIsOpenPopup(true);

        if (status) {
            setPopupImage(success);
        } else setPopupImage(fail);
    }

    function closePopup() {
        setIsOpenPopup(false);
        setPopupTitle('');
    }


    function OGPButtonClick() {
        navigate('/selectLot');
    }



    return (
        <div className="page">
            <div className="page__content">
                <Header
                    authOn={loggedIn}/>
                <main>
                    <Routes>
                        <Route path="/login" element={
                            <LoginFrame
                                onLogin={onLogin}
                            />}
                        />

                        <Route path="/mainMenu" element={
                            <MainMenuFrame
                                OGPButtonClick={OGPButtonClick}
                            />}
                        />

                        <Route path="/selectLot" element={
                            <SelectLotFrame
                            />}
                        />
                    </Routes>

                </main>

                <InfoTooltip text={popupTitle} image={popupImage} isOpen={isOpenPopup} onClose={closePopup}/>
            </div>
        </div>
    );
}

export default App;
