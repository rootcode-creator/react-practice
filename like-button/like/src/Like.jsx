import { useState } from "react";

export default function Like() {

    let [like, setLike] = useState(false);

    let click = () => {
        setLike(!like);
    };

    let color = {color: "blue"};
  return (
    <div>
      <p onClick={click}>
        {
            like? <i style={color} className="fa-solid fa-thumbs-up"></i> : <i  className="fa-regular fa-thumbs-up"></i>
        }
        
        
        </p>
    </div>
  );
}
