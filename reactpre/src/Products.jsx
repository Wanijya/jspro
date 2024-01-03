import React, { useState } from "react";

const Products = ({age, data}) => {
    const [a, b] = useState(false);
  return (
    <div className="w-full h-60 bg-zinc-800 text-white">
        <h4 className={`${a === false ? "text-red-600" : "text-blue-500"}`}>{a === false ? "helloo" : "heyy!!"}</h4>
        <button onClick={()=>b(!a)} className="px-4 py-1 bg-slate-700 rounded-md m-8">Change</button>
    </div>
  );
};

export default Products;
