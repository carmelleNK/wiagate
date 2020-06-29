import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class  Header extends React.Component{
    render(){
        return(
            <div className="page-wrapper">
                <div class="page-container">
                {/* <!-- HEADER DESKTOP-->*/}
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form className="form-header" action="" method="POST">
                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                <button className="au-btn--submit" type="submit">
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </form>
                            <div className="header-button">
                                <div className="account-wrap">
                                    <div className="account-item clearfix js-item-menu">
                                        <div className="image">
                                            <img src="assets/images/icon/avatar-01.jpg" alt="John Doe" />
                                        </div>
                                        <div className="content">
                                            <a className="js-acc-btn" href="#">john doe</a>
                                        </div>
                                        <div className="account-dropdown js-dropdown">
                                            <div className="info clearfix">
                                                <div className="image">
                                                    <a href="#">
                                                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="name">
                                                        <a href="#">john doe</a>
                                                    </h5>
                                                    <span className="email">johndoe@example.com</span>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__body">
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-account"></i>Account</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-settings"></i>Setting</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-money-box"></i>Billing</a>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__footer">
                                                <a href="#">
                                                    <i className="zmdi zmdi-power"></i>Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
          {/*  <!-- HEADER DESKTOP-->*/}

       {/*<!-- HEADER MOBILE-->*/}
       <header className="header-mobile d-block d-lg-none">
            <div className="header-mobile__bar">
                <div className="container-fluid">
                    <div className="header-mobile-inner">
                        <a className="logo" href="index.html">
                            <img src="/assets/images/icon/logo.png" alt="CoolAdmin" />
                        </a>
                        <button className="hamburger hamburger--slider" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav className="navbar-mobile">
                <div className="container-fluid">
                    <ul className="navbar-mobile__list list-unstyled">
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-tachometer-alt"></i>Dashboard</a>
                            <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="index.html">Dashboard 1</a>
                                </li>
                                <li>
                                    <a href="index2.html">Dashboard 2</a>
                                </li>
                                <li>
                                    <a href="index3.html">Dashboard 3</a>
                                </li>
                                <li>
                                    <a href="index4.html">Dashboard 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="chart.html">
                                <i className="fas fa-chart-bar"></i>Charts</a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="fas fa-table"></i>Tables</a>
                        </li>
                        <li>
                            <a href="form.html">
                                <i className="far fa-check-square"></i>Forms</a>
                        </li>
                        <li>
                            <a href="calendar.html">
                                <i className="fas fa-calendar-alt"></i>Calendar</a>
                        </li>
                        <li>
                            <a href="map.html">
                                <i className="fas fa-map-marker-alt"></i>Maps</a>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-copy"></i>Pages</a>
                            <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                                <li>
                                    <a href="forget-pass.html">Forget Password</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-desktop"></i>UI Elements</a>
                            <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="button.html">Button</a>
                                </li>
                                <li>
                                    <a href="badge.html">Badges</a>
                                </li>
                                <li>
                                    <a href="tab.html">Tabs</a>
                                </li>
                                <li>
                                    <a href="card.html">Cards</a>
                                </li>
                                <li>
                                    <a href="alert.html">Alerts</a>
                                </li>
                                <li>
                                    <a href="progress-bar.html">Progress Bars</a>
                                </li>
                                <li>
                                    <a href="modal.html">Modals</a>
                                </li>
                                <li>
                                    <a href="switch.html">Switchs</a>
                                </li>
                                <li>
                                    <a href="grid.html">Grids</a>
                                </li>
                                <li>
                                    <a href="fontawesome.html">Fontawesome Icon</a>
                                </li>
                                <li>
                                    <a href="typo.html">Typography</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        {/*<!-- END HEADER MOBILE -->*/}
                   {/* <!-- MENU SIDEBAR-->*/}
        <aside className="menu-sidebar d-none d-lg-block">
            <div className="logo">
                <a href="#">
                    <h1>WIAGATE</h1>
                </a>
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
                <nav className="navbar-sidebar">
                    <ul className="list-unstyled navbar__list">
                      <Link to="/stat">  
                     <li className="active " >
                            <a className="js-arrow">
                                <i className="fas fa-chart-bar "></i>Statistic</a>                               
                        </li>
                        </Link>
                        <li >
                            <a className="js-arrow" href="#">
                                <i className="fas fa-cog "></i>Manage Service</a>
                            
                        </li>
                        <li >
                            <a className="js-arrow" href="#">
                                <i className="fas fa-users "></i>Manage User</a>
                            
                        </li>
                        <Link to="/map">
                        <li >
                            <a className="js-arrow" href="#">
                                <i className="fas fa-wifi"></i>Manage Ressource</a>
                            
                        </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </aside>
      {/*  <!-- END MENU SIDEBAR-->*/}
      </div>
            </div>
        )
    }
}
export default Header