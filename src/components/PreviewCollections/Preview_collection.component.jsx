import React from 'react';
import CollectionItem from '../Collection_item/CollectionItem.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Preview_collection.styles.scss'


const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title mt-md-3">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) =>
                        (
                            <CollectionItem key={id} {...otherItemProps} />
                        ))
            }
        </div>
    </div>

)

export default PreviewCollection;
