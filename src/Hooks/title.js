import React from 'react';

const TitleText = ({title}) => {
    return (
        <>
              <h2 className="font-semibold text-lg uppercase text-[#007bff]">
                {title}
              </h2>
        </>
    );
};

export default TitleText;