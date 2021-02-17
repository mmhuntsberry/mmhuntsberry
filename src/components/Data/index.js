import React from "react";

const Data = (props) => (
  <div>
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong>{key}</strong>
        {JSON.stringify(val, null, 2)}
      </pre>
    ))}
  </div>
);

export default Data;
