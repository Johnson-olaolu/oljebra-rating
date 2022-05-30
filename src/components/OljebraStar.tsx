import React, { useEffect, useState } from "react";
import { OljebraStarProps } from "./OljebraStar.types";
// import OljebraStyles from "./OljebraStar.module.css";

const OljebraStar: React.FC<OljebraStarProps> = (props) => {
  const { max, rating, backgroundColor, color, starNumber = 5, styles, size, gap } = props;
  const [numOfStars, setNumOfStars] = useState(0);
  useEffect(() => {
    const num = (rating/max) * starNumber
    setNumOfStars(Math.round(num))
  }, [max, rating, starNumber]);
  return (
    <div className={"oljebraStarWrapper"} style={  {gap : gap, display : "flex", ...styles}} >
      {Array.from(Array(starNumber).keys()).map((star) => (
        <>
          <svg key={star} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 33 31.53">
            <path
              id="Icon_feather-star"
              data-name="Icon feather-star"
              d="M18,3l4.635,9.39L33,13.9l-7.5,7.3,1.77,10.32L18,26.655,8.73,31.53,10.5,21.21,3,13.9,13.365,12.39Z"
              transform="translate(-1.5 -1.5)"
              fill={ star+1 <= numOfStars? color: backgroundColor }
              stroke={ star+1 <= numOfStars? color: backgroundColor }
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </>
      ))}
    </div>
  );
};

export default OljebraStar;
