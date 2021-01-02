import React from 'react';
import './Signinup.styles.scss'

const Signinup=({children,...otherProps})=>(
        <div>
            <button className="custom-button" {...otherProps}>
                {children}
            </button>
        </div>
);

export default Signinup;
