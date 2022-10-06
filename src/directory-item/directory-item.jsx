import React from "react";
import MenuItem from "../component/product-list/product-list.page";

import "./directory-item.style.scss";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [
        {
          productname: "MainCourse",
          image: "MainCourse.png",
          id: "1",
          size: "large",
        },
        {
          productname: "Drink",
          image: "Drinks.png",
          id: "2",
          size: "large",
        },
        {
          productname: "Dessert",
          image: "Desserts.png",
          id: "3",
          size: "large",
        },
        {
          productname: "Snack",
          image: "FrenchFries.png",
          id: "4",
          size: "large",
        },
        {
          productname: "Appetizer",
          image: "Appetizer.png",
          id: "5",
          size: "large",
        },
      ],
    };
  }
  render() {

    return (
      <div className="direct-menu">
        {this.state.product.map(({ productname, image, id, size }) => (
          <MenuItem
            key={id}
            productname={productname}
            image={image}
            size={size}
          ></MenuItem>
        ))}
      </div>
    );
  }
}
export default Directory;
