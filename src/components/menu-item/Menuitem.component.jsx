import React from "react";
import "./menu-item.styles.scss";
import {withRouter} from 'react-router-dom';

const Menuitem = ({ title,imageurl,size,history,linkUrl,match}) => {
  return (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{backgroundImage:`url(${imageurl})`}} >

      </div>
      
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle text-uppercase">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(Menuitem);
