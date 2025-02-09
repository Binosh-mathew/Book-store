import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-5 ">
      <div className="card w-65 shadow-2xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.image} alt={item.name} className="h-43 object-cover" />
  </figure>
  <div className="card-body p-2">
    <h2 className="card-title text-lg">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p className="text-sm">{item.title}</p>
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
