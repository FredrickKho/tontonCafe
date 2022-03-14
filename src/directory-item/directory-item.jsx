import React from "react";
import MenuItem from "../page/menu-item/product-list/product-list.page";
import './directory-item.style.scss';
class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            product : [{
                productname : 'Main Courses',
                image: 'MainCourse.png',
                id: '1',
            },{
                productname : 'Drinks',
                image: 'Drinks.png',
                id: '2',
            },{
                productname : 'Desserts',
                image: 'Desserts.png',
                id: '3',
            },{
                productname : 'Snacks',
                image: 'FrenchFries.png',
                id: '4',
            },{
                productname : 'Appetizer',
                image: 'Appetizer.png',
                id: '5',
            }]
        }
    }
    render(){
        return(
            <div className="direct-menu">
                {this.state.product.map(({productname,image,id})=>(
                    <MenuItem key={id}  productname = {productname} image = {image}></MenuItem>
                ))}
            </div>
        )
    }
}
export default Directory;
