import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <>
                <footer id="page-footer" className="bg-body-light">
                    <div className="content py-3">
                        <div className="row fs-sm">
                            <div className="col-sm-6 order-sm-2 py-1 text-center text-sm-end">
                                Crafted with <i className="fa fa-heart text-danger"></i> by{" "}
                                <a className="fw-semibold" href="https://1.envato.market/ydb" target="_blank" rel="noreferrer">
                                    pixelcave
                                </a>
                            </div>
                            <div className="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
                                <a className="fw-semibold" href="https://1.envato.market/AVD6j" target="_blank" rel="noreferrer">
                                    OneUI 5.4
                                </a>{" "}
                                &copy; <span data-toggle="year-copy"></span>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
