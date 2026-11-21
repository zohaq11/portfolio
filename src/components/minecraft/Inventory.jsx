
import React, { useState, useEffect } from "react";

import InventorySlot from "./InventorySlot";
import ItemTooltip from "./ItemTooltip";
import { inventorySlots } from "../../constants/inventoryData";

const Inventory = ({ backgroundImage, onClose }) => {
  const [tooltip, setTooltip] = useState(null);

  // Close inventory using Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const showTooltip = (item, position) => {
    setTooltip({ item, position });
  };

  const hideTooltip = () => {
    setTooltip(null);
  };

  return (
    <div
      className="minecraft-overlay"
      onClick={onClose}
    >
      {/* Inventory artwork */}
      <div
        className="minecraft-window"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={backgroundImage}
          alt="Mine Systems Developer inventory"
          className="minecraft-background pixel-style"
          draggable="false"
        />

        {/* Invisible hover regions */}
        {inventorySlots.map((item) => (
          <InventorySlot
            key={item.id}
            item={item}
            onHover={showTooltip}
            onLeave={hideTooltip}
          />
        ))}
      </div>

      {/* Hover tooltip */}
      {tooltip && (
        <ItemTooltip
          item={tooltip.item}
          position={tooltip.position}
        />
      )}
    </div>
  );
};

export default Inventory;
