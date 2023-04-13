import './Header.css';


const Header = (props) => {
    return (
        <header className="header">
            <div className="header__content">
                <div className={`header__user ${props.authOn ? '' : 'header__user_active'}`}>
                    <div className="user__role">Контролер:</div>
                    <div className="user__name">Иванова А. А.</div>
                </div>
                <div className="header__title">ПАК1: ЦЭН УГП2 отм. 5.4</div>
            </div>
        </header>
    );
};

export default Header;
