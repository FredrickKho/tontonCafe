import React from "react"
import './product-list.page.scss';
const MenuItem = ({productname,image}) => {
    return(
        <div className="product-item">
            <div 
               
                className="content"
            >
                <h1 className="product-name">{productname}</h1>
                
                <span className="list-menu">List {productname}</span>
            </div>
        </div>
    )
}

export default MenuItem;
