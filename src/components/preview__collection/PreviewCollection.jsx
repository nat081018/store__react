import React, { Component } from "react";
import CollectionItem from "../collection__item/CollectionItem.jsx";
import "./preview__collection.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="preview__collaction">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...collection }) => (
          <CollectionItem key={id} {...collection} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
