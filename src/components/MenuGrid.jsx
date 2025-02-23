import React from "react";

// Menu Grid Component
const MenuGrid = ({ id, menuItems }) => {
  return (
    <div id={id} className="py-2 bg-white text-black text-center flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-4">{id}</h2>
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-4 grid-cols-6 gap-2 px-6 w-full max-w-screen-lg mn-auto ">
        {menuItems.map((item, index) => (
          <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis text-center flex flex-col items-center justify-center">
            <img src={item.image} alt={item.name} className="w-full max-w-[100px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[250px] h-auto object-cover" />
            <p className={`mt-2 text-[9px] sm:text-sm md:text-base font-semibold ${item.name === "돈까스 김치나배" ? "text-red-400" : "text-black"}`}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
