import React from "react";
import { useState } from "react";

// change class name from array in javascript?
export default function SelectGradientTheme(props) {
  const resultsRender = [];
  const [selectedIndex, setSelectedIndex] = useState(false);

  const setBorder = (index) => {
    setSelectedIndex(index);
  };

  for (var i = 0; i < GradientThemes.length; i += 3) {
    resultsRender.push(
      <div className={"SelectThemePictures_Separator"}>
        {GradientThemes.slice(i, i + 3).map((col, index) => {
          return (
            <div key={index}
              className={index === selectedIndex ? 'selectBorder' : null}
              onClick={() => props.SideBarPageContent(col) || setBorder(index)}>
            </div>
          );
        })}
      </div>
    );
  }


  return (
    <div className="SelectThemeWrapper">
      {resultsRender}
    </div>
  );
}
