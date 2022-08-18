import React from 'react';

const FavoriteItem = ({ item }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.title.slice(0, 25)}
      <div>
        <span className="badge rounded-pill bg-primary text-white mr-2 px-3 py-2">
          {item.category}
        </span>
        <span className="badge rounded-pill bg-primary text-white px-3 py-2">
          {item.price}
        </span>
      </div>
    </li>
  );
};

export default FavoriteItem;
