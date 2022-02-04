import React, { useState } from "react";
import { render } from "react-dom";
import { Stage, Layer, Star, Rect, Text } from "react-konva";

export default function App() {
  var [userInput, setUserInput] = useState("");

  function handler(event) {}
  return (
    <div className="App">
      <h2>Hello CodeSandbox</h2>

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            width={100}
            height={100}
            fill="blue"
            opacity={0.2}
            shadowBlur={10}
          />
          <Text text="Some text on the canvas" />
        </Layer>
      </Stage>
    </div>
  );
}
