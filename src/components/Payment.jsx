
import React from 'react';

const GridComponent = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-300 p-4 text-center">Box 1</div>
        <div className="bg-gray-300 p-4 text-center">Box 2</div>
        <div className="bg-gray-300 p-4 text-center">Box 3</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-300 p-4 text-center col-span-2">Box 4</div>
        <div className="bg-gray-300 p-4 text-center">Box 5</div>
      </div>
    </div>
  );
};

export default GridComponent;
