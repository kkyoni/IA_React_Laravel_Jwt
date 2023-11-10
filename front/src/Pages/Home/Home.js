import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import SideBar from "../Components/SideBar";
import TopNavigation from "../Components/TopNavigation";
import Footer from "../Components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import CardCopy from "./Components/CardCopy";
import CardAction from "./Components/CardAction";
import CardTotal from "./Components/CardTotal";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modelpopup: false,
        }
    }
    handleClose = () => {
        if (this.state.modelpopup === true) {
            this.setState({ modelpopup: false })
        } else {
            this.setState({ modelpopup: true })
        }
    }

    render() {
        const login = JSON.parse(localStorage.getItem("isLoggedIn"));
        if (!login) { return <Redirect to={'/'} />; }
        return (
            <>
                <div id="page-container" className={`${this.state.modelpopup ? 'sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-mini' : 'sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow'}`}>
                    <SideBar />
                    <TopNavigation handleClose={this.handleClose} />
                    <main id="main-container">
                        <div className="content">
                            <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-2 text-center text-md-start">
                                <div className="flex-grow-1 mb-1 mb-md-0">
                                    <h1 className="h3 fw-bold mb-2">Dashboard</h1>
                                    <h2 className="h6 fw-medium fw-medium text-muted mb-0">Welcome User Name, everything looks great.</h2>
                                </div>
                            </div>
                            <br />
                            <div className="block-content block-content-full">
                                <div className="row items-push">
                                    <div className="col-lg-3">
                                        {/* Card Copy Components Start */}
                                        <CardCopy />
                                        {/* Card Copy Components End */}
                                    </div>
                                    <div className="col-lg-3">
                                        {/* Card Action Components Start */}
                                        <CardAction />
                                        {/* Card Action Components End */}
                                    </div>

                                    <div className="col-lg-3">
                                        {/* Card Total Components Start */}
                                        <CardTotal />
                                        {/* Card Total Components End */}
                                    </div>
                                </div >
                            </div >
                        </div >
                    </main >
                    <Footer />
                </div >
            </>
        );
    }
}
export default Home;