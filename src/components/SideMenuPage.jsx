import React from "react";

// Menu Grid Component
const SideMenuGrid = ({ id, menuItems }) => {
  return (
    <div id={id} className="py-10 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">사이드</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {menuItems.map((item, index) => (
          <div key={index} className="text-center">
            <p className="mt-2 text-lg font-semibol text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenuGrid;
