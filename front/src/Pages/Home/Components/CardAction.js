import React, { Component } from "react";
class CardAction extends Component {
    render() {
        const containerStyle = { textAlign: 'right', width: '12vw', height: '12vw', background: 'radial-gradient(circle at top left, transparent 3vw, #f9f9f9 3vw)' };
        const gridStyle = { float: 'left', color: '#959595', marginLeft: '13px', fontSize: '20px', marginTop: '10px' };
        const infoStyle = { float: 'right', paddingTop: '10px', paddingRight: '10px', color: '#959595' };
        const textStyle = { paddingTop: '60px', color: '#000', textAlign: 'center' };
        const hrStyle = { width: '183px', border: '1px solid #e9e9e9', marginLeft: '19px', marginBottom: '10px', marginTop: '45px' };
        const actionsStyle = { color: '#ee3e38', textAlign: 'center' };
        return (
            <div style={containerStyle}>
                <i className="nav-main-link-icon si si-grid" style={gridStyle}></i>
                <i className="fa fa-fw fa-ellipsis-v me-1" style={infoStyle}></i>
                <i className="fa fa-fw fa-bookmark-o me-1" style={infoStyle}></i>
                <i className="fa fa-fw fa-info-circle me-1" style={infoStyle}></i>
                <p style={textStyle}>Client <br /> Feedback <br /></p>
                <div style={hrStyle}></div>
                <p style={actionsStyle}>Action</p>
            </div>
        );
    }
}
export default CardAction;