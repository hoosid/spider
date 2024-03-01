// boxs_0.js
import React from 'react';
import "./boxs.css";
import Boxs from './boxs';
import BoxsData from './boxs_data'; // Update the import to use correct naming conventions

function Boxs_0() { // Correct the function name to start with an uppercase letter
  return (
    <div className='boxs'>
      <h1 className='p0'>project</h1>
      <div className='box-container'>
        {BoxsData.map((val, ind) => {
          return (
            <Boxs
              key={ind}
              Imagsrc={val.Imagsrc} // Use Imagsrc instead of imgsrc
              title={val.title}
              Text={val.Text} // Use Text instead of text
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Boxs_0; // Use PascalCase for component names
