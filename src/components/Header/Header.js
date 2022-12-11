import React from 'react';
import './Header.scss'
import mouse from '../../images/logo-mouse.svg'
import Phone from '../../images/phone-solid.svg'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <div className="header__logo">
                            <Link to='/'> <img src={mouse} alt="logo" className="header__logo__mouse"/></Link>
                            <Link to="/">
                                <div className="header__logo__texts">
                                    <h2 className="header__logo__texts__title">Гаджетариум</h2>
                                    <p className="header__logo__texts__subtitle">Магазин цифровых решений </p>
                                </div>
                            </Link>
                        </div>
                        <div className="header__menu">
                            <NavLink to='/telephones'>Телефоны</NavLink>
                            <NavLink to='/tablets'>Планшеты</NavLink>
                            <NavLink to='/drones'>Дроны</NavLink>
                            <NavLink to='/watches'>Часы</NavLink>
                            <NavLink to='/acsessuares'>Ноутбуки</NavLink>
                        </div>
                        <div className="header__contacts">
                            <a href='tel:+996706289129' className="header__contacts__phone"><img width='20px'
                                                                                                 src={Phone}
                                                                                                 alt=""/> +996706289129</a>
                            <button className="header__contacts__btn">Заказать звонок</button>
                            <svg className="header__contacts__basket" width="30" height="30" viewBox="0 0 30 30"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.66568 19.3948H9.66705C9.6682 19.3948 9.66934 19.3945 9.67049 19.3945H25.6055C25.9978 19.3945 26.3427 19.1343 26.4505 18.7571L29.9661 6.45241C30.0419 6.18713 29.9888 5.90195 29.8228 5.68176C29.6567 5.46158 29.3969 5.33203 29.1211 5.33203H7.6387L7.01042 2.50465C6.92093 2.10251 6.56433 1.81641 6.15234 1.81641H0.878906C0.393448 1.81641 0 2.20985 0 2.69531C0 3.18077 0.393448 3.57422 0.878906 3.57422H5.44739C5.55862 4.07524 8.45398 17.1046 8.6206 17.8542C7.68654 18.2602 7.03125 19.1915 7.03125 20.2734C7.03125 21.7273 8.21411 22.9102 9.66797 22.9102H25.6055C26.0909 22.9102 26.4844 22.5167 26.4844 22.0312C26.4844 21.5458 26.0909 21.1523 25.6055 21.1523H9.66797C9.18342 21.1523 8.78906 20.758 8.78906 20.2734C8.78906 19.7896 9.18205 19.3959 9.66568 19.3948ZM27.9559 7.08984L24.9424 17.6367H10.3729L8.02917 7.08984H27.9559Z"
                                    fill="#EB2D66"/>
                                <path
                                    d="M8.78906 25.5469C8.78906 27.0007 9.97192 28.1836 11.4258 28.1836C12.8796 28.1836 14.0625 27.0007 14.0625 25.5469C14.0625 24.093 12.8796 22.9102 11.4258 22.9102C9.97192 22.9102 8.78906 24.093 8.78906 25.5469ZM11.4258 24.668C11.9103 24.668 12.3047 25.0623 12.3047 25.5469C12.3047 26.0314 11.9103 26.4258 11.4258 26.4258C10.9412 26.4258 10.5469 26.0314 10.5469 25.5469C10.5469 25.0623 10.9412 24.668 11.4258 24.668Z"
                                    fill="#EB2D66"/>
                                <path
                                    d="M21.2109 25.5469C21.2109 27.0007 22.3938 28.1836 23.8477 28.1836C25.3015 28.1836 26.4844 27.0007 26.4844 25.5469C26.4844 24.093 25.3015 22.9102 23.8477 22.9102C22.3938 22.9102 21.2109 24.093 21.2109 25.5469ZM23.8477 24.668C24.3322 24.668 24.7266 25.0623 24.7266 25.5469C24.7266 26.0314 24.3322 26.4258 23.8477 26.4258C23.3631 26.4258 22.9688 26.0314 22.9688 25.5469C22.9688 25.0623 23.3631 24.668 23.8477 24.668Z"
                                    fill="#EB2D66"/>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </>);
};

export default Header;