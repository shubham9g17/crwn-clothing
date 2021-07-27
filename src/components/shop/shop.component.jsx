import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "./../common/collection-preview/collection-preview.component";
import "./shop.styles.scss";

class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
