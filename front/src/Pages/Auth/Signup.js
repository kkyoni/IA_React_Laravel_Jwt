import React, { Component } from "react";
import ApiService from "../../services/ApiService";
import { toast } from 'react-toastify';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            isLoading: false,
            errMsgEmail: "",
            errMsgPwd: "",
            errMsgName: "",
        };
    }
    onChangehandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    };
    onSignUpHandler = () => {
        this.setState({ isLoading: true });
        var data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            user_type: 'user'
        };
        ApiService.SignUp(data).then((res) => {
            if (res.data.status === 'success') {
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userDataToken", res.data.data.token);
                this.setState({ isLoading: false });
                toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT });
            } else if (res.data.status === 'validtion') {
                if (res.data.errors.email) {
                    this.setState({ errMsgEmail: res.data.errors.email[0] })
                }
                if (res.data.errors.password) {
                    this.setState({ errMsgPwd: res.data.errors.password[0] })
                }
                if (res.data.errors.name) {
                    this.setState({ errMsgName: res.data.errors.name[0] })
                }
                setTimeout(() => { this.setState({ isLoading: false, errMsgEmail: "", errMsgPwd: "", errMsgName: "" }); }, 2000);
            } else {
                toast.error(res.data.message, { position: toast.POSITION.TOP_RIGHT });
                setTimeout(() => { this.setState({ isLoading: false }); }, 2000);
            }
        })
    };
    render() {
        const login = JSON.parse(localStorage.getItem("isLoggedIn"));
        if (login) { return <Redirect to="/home" />; }
        const isLoading = this.state.isLoading;
        return (
            <>
                <div id="page-container">
                    <main id="main-container">
                        <div className="hero-static d-flex align-items-center">
                            <div className="content">
                                <div className="row justify-content-center push">
                                    <div className="col-md-8 col-lg-6 col-xl-4">
                                        <div className="block block-rounded mb-0">
                                            <div className="block-header block-header-default">
                                                <h3 className="block-title">Sign Up</h3>
                                                <div className="block-options">
                                                    <Link to={'/'} className="btn-block-option" data-bs-toggle="tooltip" data-bs-placement="left" title="New Account">
                                                        <i className="fa fa-sign-in-alt"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="block-content">
                                                <div className="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                                                    <h1 className="h2 mb-1">OneUI</h1>
                                                    <p className="fw-medium text-muted">
                                                        Please fill the following details to create a new account.
                                                    </p>

                                                    <div className="js-validation-signin">
                                                        <div className="py-3">
                                                            <div className="mb-4">
                                                                <input type="text" className="form-control form-control-alt form-control-lg" id="name" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.onChangehandler} />
                                                                <span className="text-danger">{this.state.errMsgName}</span>
                                                            </div>
                                                            <div className="mb-4">
                                                                <input type="text" className="form-control form-control-alt form-control-lg" id="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.onChangehandler} />
                                                                <span className="text-danger">{this.state.errMsgEmail}</span>
                                                            </div>
                                                            <div className="mb-4">
                                                                <input type="password" className="form-control form-control-alt form-control-lg" id="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.onChangehandler} />
                                                                <span className="text-danger">{this.state.errMsgPwd}</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col-md-6 col-xl-5">
                                                                <button className="btn w-100 btn-alt-primary" onClick={this.onSignUpHandler} >
                                                                    {isLoading ? (
                                                                        <><i className="fa fa-refresh fa-spin me-1 opacity-50"></i> Waiting</>
                                                                    ) : (
                                                                        <><i className="fa fa-fw fa-plus me-1 opacity-50"></i> Sign Up</>
                                                                    )}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fs-sm text-muted text-center">
                                    <strong>OneUI 5.4</strong> &copy; <span data-toggle="year-copy"></span>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </>
        );
    }
}
export default Signup;