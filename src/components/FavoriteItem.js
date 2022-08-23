import React from 'react';

const FavoriteItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Item
      <div>
        <span className="badge rounded-pill bg-primary text-white mr-2 px-3 py-2">
          Electronics
        </span>
        <span className="badge rounded-pill bg-primary text-white px-3 py-2">
          1200
        </span>
      </div>
    </li>
  );
};

export default FavoriteItem;
