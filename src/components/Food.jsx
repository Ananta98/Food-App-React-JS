import React, { useState } from "react";
import { data } from "../data/data.js";

export const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    if (category === '') {
      setFoods(data);
    } else {
      setFoods(data.filter((item) => {
        return item.category === category;
      }));
    }
  }

  const filterPrice = (price) => {
    setFoods(data.filter((item) => {
      return item.price === price;
    }))
  }

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={() => filterType('')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button onClick={() => filterType('burger')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button onClick={() => filterType('pizza')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button onClick={() => filterType('salad')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button onClick={() => filterType('chicken')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={() => filterPrice('$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={() => filterPrice('$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={() => filterPrice('$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        {foods.map((item, index) => {
          return (
            <div key={index} className="border rounded-lg shadow-lg hover:scale-105">
              <img className="max-h-[200px] w-full object-cover rounded-lg" src={item.image} alt={item.name} />
              <div className="flex justify-between py-4 px-2">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 rounded-lg p-1 text-white">{item.price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
