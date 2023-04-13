import './LoginFrame.css';
import loginLogo from '../../images/логотип NN.svg';

import passImage from '../../images/24-val-1 (1) 1.svg';
import readerImage from '../../images/Group 6.svg';


const LoginFrame = (props) => {
    return (
        <div className="login">
            <div className="login__content">
                <img className="login__logo" src={loginLogo} alt="логотип"/>
                <button className="login__button" type="button" onClick={props.onLogin}>приложите пропуск
                </button>
                <div className="login__pass-content">
                    <ul className="login__items">
                        <li className="">
                            <img className="login__item " src={passImage} alt="пропуск"/>
                        </li>
                        <li className="">
                            <img className="login__item" src={readerImage} alt="считыватель"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LoginFrame;
