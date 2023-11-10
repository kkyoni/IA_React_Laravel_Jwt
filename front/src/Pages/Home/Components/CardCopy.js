import React, { Component } from "react";
class CardCopy extends Component {
    render() {
        const containerStyle = { textAlign: 'right', width: '12vw', height: '12vw', background: 'radial-gradient(circle at top left, transparent 3vw, #FFF4F3 3vw)' };
        const gridStyle = { float: 'left', color: '#f57d78', marginLeft: '13px', fontSize: '20px', marginTop: '10px' };
        const infoStyle = { float: 'right', paddingTop: '10px', paddingRight: '10px', color: '#f57d78' };
        const textStyle = { paddingTop: '60px', color: '#000', textAlign: 'center' };
        const hrStyle = { width: '183px', border: '1px solid #ee3e38', marginLeft: '19px', marginBottom: '10px' };
        const copyStyle = { color: '#ee3e38', textAlign: 'center' };
        return (
            <div style={containerStyle}>
                <i className="nav-main-link-icon si si-grid" style={gridStyle}></i>
                <i className="fa fa-fw fa-info-circle me-1" style={infoStyle}></i>
                <p style={textStyle}>Analyse call <br /> against <br /> guidelines <br /></p>
                <div style={hrStyle}></div>
                <p style={copyStyle}>Copy and Use</p>
            </div>
        );
    }
}
export default CardCopy;