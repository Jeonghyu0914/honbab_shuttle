import React from "react";

// Menu Grid Component
const MenuGrid = ({ id, menuItems }) => {
  return (
    <div id={id} className="py-10 bg-black text-white text-center">
      <div className="flex justify-center items-center gap-4 mb-6">
        <img src="particle1.png" className="w-12 h-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6">{id}</h2>
        <img src="particle1.png" className="w-12 h-auto mb-6" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {menuItems.map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.image} alt={item.name} className="w-full h-auto object-cover" />
            <p className={`mt-2 text-lg font-semibold ${item.name == "돈까스 김치나배" ? "text-red-400" : "text-white"}`}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
