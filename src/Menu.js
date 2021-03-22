import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, fav, title, img, desc, url } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                {fav && <h5 className="fav">preferred*</h5>}
              </header>
              <p className="item-text">{desc}</p>
              <h6>
                <a href={url}>Watch now</a>
              </h6>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
