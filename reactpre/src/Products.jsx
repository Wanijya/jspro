import React from "react";

const Products = ({age, data}) => {
  return (
    <div className="w-full h-60 text-white bg-zinc-800">
        <h1 className="p-3">{age}</h1>
       <h1 className="p-3">{data.age}</h1>
       <h2 className="ml-3">{data.name}</h2>
    </div>
  );
};

export default Products;
