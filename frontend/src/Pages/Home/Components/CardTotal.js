import React, { Component } from "react";
class CardTotal extends Component {
    render() {
        const folderStyle = {position: 'relative',width: '221px',height: '200px',background: 'var(--bg)',borderRadius: '2rem',padding: '1rem','--bg': '#ffffff',transition: '0.2s ease-out',marginTop: '23px'};
        const topStyle = {position: 'absolute',left: 0,top: '-22px',height: '50px',maxWidth: '135px',width: '100%',background: 'var(--bg)',WebkitClipPath: 'polygon(71% 0px, 87% 100%, 100% 100%, 0px 100%, 0px 0px)',clipPath: 'polygon(71% 0px, 87% 100%, 100% 100%, 0px 100%, 0px 0px)',overflow: 'hidden',borderRadius: '2rem',borderBottomLeftRadius: 0,borderBottomRightRadius: 0,transition: '0.2s ease-out'};
        const headStyle = {height: '30px',display: 'flex',justifyContent: 'space-between',padding: '0 1rem 0 0'};
        const iconStyle = {position: 'relative',bottom: '-16px',left: '5px',fontSize: '10px',color: '#afafaf'};
        const dot2Style = {position: 'relative',left: '16px',bottom: '2px',width: '30px',height: '30px',background: '#ffffff35',borderRadius: '1rem',display: 'flex',justifyContent: 'center',alignItems: 'center'};
        const infoStyle = { marginTop: '12px', lineHeight: '8px', paddingLeft: '8px' };
        const h1Style = { fontSize: '1.45rem', fontWeight: 700 };
        const pStyle = { marginTop: '55px', fontSize: '0.9rem' };
        const spanStyle = { fontWeight: 600, color: '#ee3e38', fontSize: '1rem' };
        return (
            <div className="folder" style={folderStyle}>
                <div className="top" style={topStyle}></div>
                <div className="head" style={headStyle}>
                    <div className="icon" style={iconStyle}>
                        <b>Created:</b> 12-10-2023 12:34 pm
                    </div>
                    <div className="dot2" style={dot2Style}><i className="fa fa-fw fa-ellipsis-v me-1"></i></div>
                </div>
                <div className="info" style={infoStyle}>
                    <h1 style={h1Style}>Internal</h1>
                    <p style={pStyle}>
                        Total Quick Actions<span style={spanStyle}> 05</span>
                    </p>
                </div>
            </div>
        );
    }
}
export default CardTotal;