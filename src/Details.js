import { useState } from "react";

export const Details = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h4>{props.title}</h4>
      <button style={{ marginBottom: "40px" }} onClick={handleSubmit}>
        Click
      </button>
      {showDetails ? <p>{props.desc}</p> : null}
    </div>
  );
};
