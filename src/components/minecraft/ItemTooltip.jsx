
import React, { useRef, useState, useLayoutEffect } from "react";
import { CATEGORY_COLORS } from "../../constants/inventoryData";

const ItemTooltip = ({ item, position }) => {
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({
    left: 0,
    top: 0
  });
  const [isPositioned, setIsPositioned] = useState(false);

  useLayoutEffect(() => {
    if (!item || !position || !tooltipRef.current) return;

    const tooltip = tooltipRef.current;
    const rect = tooltip.getBoundingClientRect();

    const margin = 12;
    const gap = 12;

    // Start to the right and below the cursor
    let left = position.x + gap;
    let top = position.y + gap;

    // Flip to the left if there's not enough horizontal space
    if (left + rect.width > window.innerWidth - margin) {
      left = position.x - rect.width - gap;
    }

    // Flip above if there's not enough vertical space
    if (top + rect.height > window.innerHeight - margin) {
      top = position.y - rect.height - gap;
    }

    // Final boundary checks
    left = Math.max(
      margin,
      Math.min(left, window.innerWidth - rect.width - margin)
    );

    top = Math.max(
      margin,
      Math.min(top, window.innerHeight - rect.height - margin)
    );

    setTooltipPosition({ left, top });
    setIsPositioned(true);
  }, [item, position?.x, position?.y]);

  if (!item) return null;

  return (
    <div
      ref={tooltipRef}
      className="minecraft-tooltip"
      style={{
        left: tooltipPosition.left,
        top: tooltipPosition.top,
        visibility: isPositioned ? "visible" : "hidden"
      }}
    >
      <div className="minecraft-tooltip-title">
        {item.title}
      </div>

      <div
        className="minecraft-tooltip-category"
        style={{
          color: CATEGORY_COLORS[item.category] || "#AAAAAA"
        }}
      >
        {item.category}
      </div>

      <div className="minecraft-tooltip-description">
        {item.description}
      </div>
    </div>
  );
};

export default ItemTooltip;
