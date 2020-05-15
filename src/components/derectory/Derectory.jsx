import React from "react";
import "./derectory.scss";
import MenuItem from "../menu__item/MenuItem.jsx";

class Derectory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          LinkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          LinkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          LinkUrl: "",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          LinkUrl: "",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          LinkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="derectory__menu">
        {this.state.sections.map(({ id, ...allSectionsparms }) => (
          <MenuItem key={id} {...allSectionsparms} />
        ))}
      </div>
    );
  }
}

export default Derectory;
