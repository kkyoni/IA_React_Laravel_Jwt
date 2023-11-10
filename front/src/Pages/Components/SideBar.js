import React, { Component } from "react";
import { Link } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <nav id="sidebar" aria-label="Main Navigation">
                <div className="content-header">
                    <Link to={'/home'} className="fw-semibold text-dual">
                        <span className="smini-visible">
                            <i className="fa fa-circle-notch text-primary"></i>
                        </span>
                        <span className="smini-hide fs-5 tracking-wider">One<span className="fw-normal">UI</span></span>
                    </Link>
                </div>
                <div className="js-sidebar-scroll">
                    <div className="content-side">
                        <ul className="nav-main">
                            <li className="nav-main-item">
                                <Link to={'/home'} className={`${window.location.pathname.match('/home') ? 'nav-main-link active' : 'nav-main-link'}`}>
                                    <i className="nav-main-link-icon si si-speedometer"></i>
                                    <span className="nav-main-link-name">Dashboard</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default SideBar;