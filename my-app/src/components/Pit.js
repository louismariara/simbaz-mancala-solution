// import React, { useState } from "react";

// function Pit({ id, player, beads, getAnticlockwisePot }) {
//   const [hovered, setHovered] = useState(false);

//   const handleMouseOver = () => {
//     setHovered(true);
//   };

//   const handleMouseOut = () => {
//     setHovered(false);
//   };

//   const targetPot = hovered ? getAnticlockwisePot(id) : null;

//   return (
//     <div
//       id={id}
//       className={`pot ${player}`}
//       onMouseOver={handleMouseOver}
//       onMouseOut={handleMouseOut}
//       style={{
//         backgroundColor: hovered ? "#FEF3E2" : "#F7DCB9",
//       }}
//     >
//       <div className="beadContainer">
//         {[...Array(beads)].map((_, i) => (
//           <div key={i} className="bead" />
//         ))}
//       </div>
//       {targetPot && (
//         <div
//           className="targetPot"
//           style={{ backgroundColor: "#399918" }}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default Pit;



// import React from "react";

// function Pit({ id, beads, player, getAnticlockwisePot }) {
//   return (
//     <div id={id} className={`pot ${player}`}>
//       <div className="beadContainer">
//         {[...Array(beads)].map((_, i) => (
//           <div key={`${id}Bead${i + 1}`} className="bead"></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Pit;


import React from "react";

// Pit component represents a single pot or pit in the Mancala game.
function Pit({ id, beads, onMouseOver, onMouseOut, isHighlighted, isTarget }) {
  return (
    <div
      id={id}
      className={`pot ${isHighlighted ? "highlighted" : ""} ${isTarget ? "target" : ""}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div className="beadContainer">
        {[...Array(beads)].map((_, i) => (
          <div key={`${id}Bead${i + 1}`} className="bead"></div>
        ))}
      </div>
    </div>
  );
}

export default Pit;
