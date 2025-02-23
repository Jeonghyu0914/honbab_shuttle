import React from "react";

// Menu Grid Component
const SideMenuGrid = ({ id, menuItems }) => {
  return (
    <div id={id} className="py-2 bg-white text-black text-center">
      <h2 className="text-xl font-bold mb-4">사이드</h2>
      <div className="grid grid-cols-4 gap-2 sm:px-6 px-3">
        {menuItems.map((item, index) => (
          <div key={index} className="text-center">
            <p className="mt-2 text-[10px] sm:text-sm md:text-base font-semibol text-black">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenuGrid;
