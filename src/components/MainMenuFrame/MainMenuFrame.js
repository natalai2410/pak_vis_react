import './MainMenuFrame.css';

const MainMenuFrame = (props) => {
    return (
        <div className="main-menu">
                <ul className="main-menu__content">
                    <li> <button className="button__text"  onClick={props.OGPButtonClick}>Готовая продукция</button></li>
                    <li> <div className="button__text">Проверка и обслуживание весов</div></li>
                    <li> <div className="button__text">Контрольное взвешивание</div></li>
                    <li> <div className="button__text"></div>.</li>
                    <li> <div className="button__text"></div>.</li>
                </ul>

        </div>
    );
};

export default MainMenuFrame;
