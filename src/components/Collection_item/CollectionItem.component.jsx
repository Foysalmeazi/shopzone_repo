import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CollectionItem.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => (
    <div className="collection-item">
        <div clasName="image" id="image" style=
            {
                {
                    backgroundImage: `url(${imageUrl})`
                }
            }
        />

        <div className="collection-footer mt-2">
            <span className="name">{name}</span>
            <span className="price">{price}</span>

        </div>
    </div>

)

export default CollectionItem;