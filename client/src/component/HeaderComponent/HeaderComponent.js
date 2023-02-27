import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = ({headerDetails}) => {
    return(
        <React.Fragment>
            <div className="Header-container">
                <div className="Header-innerLeft">
                    <h1 className="Comp-title">{headerDetails.companyName}</h1>
                    <div className="Comp-motto">{headerDetails.companyMotto}</div>
                </div>
                <div className="Header-innerRight">
                    <div className="Comp-date">Since {new Date(headerDetails.companyEst).toLocaleString("en-US",
                        {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                        })
                    }</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderComponent;