import React, { Component } from "react";
import ApiService from "../../services/ApiService";
import { toast } from 'react-toastify';
class TopNavigation extends Component {
    onLogOutHandler = () => {
        const token = localStorage.getItem('userDataToken');
        if (token) {
            ApiService.LogOut().then((res) => {
                if (res.data.status === 'success') {
                    localStorage.removeItem('userDataToken');
                    localStorage.removeItem('isLoggedIn');
                    toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT });
                    window.location.reload(false);
                } else {
                    localStorage.removeItem('userDataToken');
                    localStorage.removeItem('isLoggedIn');
                    toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT });
                    window.location.reload(false);
                }
            })
        }
    };
    render() {
        return (
            <>
                <header id="page-header">
                    <div className="content-header">
                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-sm btn-alt-secondary me-2 d-lg-none" data-toggle="layout"
                                data-action="sidebar_toggle">
                                <i className="fa fa-fw fa-bars"></i>
                            </button>
                            <button type="button" className="btn btn-sm btn-alt-secondary me-2 d-none d-lg-inline-block" data-toggle="layout"
                                data-action="sidebar_mini_toggle" onClick={this.props.handleClose}>
                                <i className="fa fa-fw fa-ellipsis-v"></i>
                            </button>
                        </div>

                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-sm btn-alt-secondary d-flex align-items-center" id="page-header-user-dropdown" onClick={this.onLogOutHandler}>
                                <span className="d-none d-sm-inline-block ms-2">Logout</span>&nbsp;<i className="nav-main-link-icon si si-lock"></i>
                            </button>
                        </div>
                    </div>
                </header>

            </>
        );
    }
}
export default TopNavigation;