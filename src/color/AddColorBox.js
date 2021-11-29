import { useState } from "react";
import { ColorBox } from "./ColorBox";

//color on text and color on inputBox.....
export function AddColorBox() {
  const colors = ["red", "green", "pink"];
  const [addcolor, setAddColor] = useState(colors);
  const [color, setColor] = useState("");
  const styles = { background: color };
  const styles_text = { color: color };

  return (
    <div>
      <input
        className="color_box"
        style={styles}
        placeholder="Enter the color"
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={() => setAddColor([...addcolor, color])}>
        Add Color
      </button>
      <p className="color_box_text" style={styles_text}>
        {color}
      </p>

      {addcolor.map((el) => (
        <ColorBox color={el} />
      ))}
    </div>
  );
}
