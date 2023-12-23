import React from "react";
import { useNavigate } from "react-router-dom";

export default function Param() {
  let names = ["kishor", "vinu", "ishan"];
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center   bg-danger-subtle"
      style={{ height: "80vh", alignItems: "center" }}
    >
      <h1>Param</h1>
      <ul>
        {names.map((e, i) => {
          return (
            <li
              key={i}
              className="text-capitalize "
              role="button"
              onClick={() => navigate(`/useparam/${e}`)}
              style={{ fontSize: "20px", fontWeight: "600", color: "grey" }}
            >
              {e}
            </li>
          );
        })}
       
      </ul>
    </div>
  );
}

