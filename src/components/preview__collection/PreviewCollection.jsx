import React, { Component } from "react";
import CollectionItem from "../collection__item/CollectionItem.jsx";
import "./preview__collection.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="preview__collaction">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          // <div key={item.id}>
          //   <div>{item.name}</div>
          // </div>
          <CollectionItem key={item.id} item={item} />
          // <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
