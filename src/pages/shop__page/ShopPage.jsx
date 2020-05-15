import React, { Component } from "react";
import "./shop__page.scss";
import SHOP_DATA from "../../data.local.js";
import PreviewCollection from "../../components/preview__collection/PreviewCollection.jsx";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop__page">
        {collections.map(({ id, ...collection }) => (
          <PreviewCollection key={id} {...collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
