import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 p-3 m-10">
        <div className="card bg-base-100 w-full shadow-xl m-2">
          <figure>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
