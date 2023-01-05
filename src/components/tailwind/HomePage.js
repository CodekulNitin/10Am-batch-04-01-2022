import React from "react";

function HomePage() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 px-12">
      <div className="bg-red-500 h-60 md:col-span-2 lg:col-span-3 xl:col-span-4"></div>
      <div className="bg-green-500 h-60"></div>
      <div className="bg-blue-500 h-60"></div>
      <div className="bg-orange-500 h-60"></div>
      <div className="bg-indigo-900 h-60"></div>
      <div className="bg-yellow-500 h-60"></div>
      <div className="bg-purple-500 h-60"></div>
    </div>
  );
}

export default HomePage;
