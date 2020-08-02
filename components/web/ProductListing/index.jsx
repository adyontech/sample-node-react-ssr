import React, { useState, useEffect, useRef, useCallback } from "react";
import LazyLoad from "../../../helpers/imgLazyLoad";

const ItemTileComp = props => {
  const {
    imageUrl,
    actionUrl,
    price,
    title,
    sizeVariation,
    subTitle,
  } = props.data;
  const sizeAvl = (sizeVariation && sizeVariation.map(el => el.title)) || [];
  return (
    <div onClick={() => alert(`clicked action url: ${actionUrl}`)}>
      <img
        src={imageUrl}
        className="lazyload tileImg"
        onError={e => {
          e.target.onerror = null;
          e.target.src =
            "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/9/291a-d02-b141_1.jpg";
        }}
      />
      <div className="decriptionBlock">
        <h6 className="tileHeading">{title}</h6>
        <p className="tileDesc">{subTitle}</p>
        <p className="tileSize">
          {sizeAvl.map(el => (
            <span> {el}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

function index(props) {
  useEffect(() => {
    LazyLoad();
  }, [props.data]);
  const observer = useRef();
  const lastItemElementRef = useCallback(
    node => {
      if (props.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && props.hasMore) {
          props.loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [props.loading, props.hasMore],
  );

  return (
    <React.Fragment>
      {props.data.map((item, index) => {
        if (props.data.length === index + 1) {
          return (
            <div
              className="itemContainer"
              ref={lastItemElementRef}
              key={item.id}
            >
              <ItemTileComp data={item} />
            </div>
          );
        } else {
          return (
            <div className="itemContainer" key={item.id}>
              <ItemTileComp data={item} />
            </div>
          );
        }
      })}
      <div>{props.loading && "Loading..."}</div>
    </React.Fragment>
  );
}

export default index;
