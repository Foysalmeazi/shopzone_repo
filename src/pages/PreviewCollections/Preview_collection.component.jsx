import React from 'react';

const Preview_collection = ({title,items}) => (
        <div className="preview-collections">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
            items.map((item)=>
                (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))
            }
            </div>
        </div>
    
)

export default Preview_collection;
