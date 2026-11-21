
import React from "react";

const InventorySlot = ({ item, onHover, onLeave }) => {
  const handleFocus = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    onHover(item, {
      x: rect.left + rect.width + 8,
      y: rect.top
    });
  };

  return (
    <button
      type="button"
      aria-label={`Inspect ${item.title}`}
      className="inventory-hitbox"
      style={{
        left: `${(item.x / 175) * 100}%`,
        top: `${(item.y / 165) * 100}%`,
        width: `${(item.width / 175) * 100}%`,
        height: `${(item.height / 165) * 100}%`
      }}
      onPointerEnter={(event) =>
        onHover(item, {
          x: event.clientX + 12,
          y: event.clientY + 12
        })
      }
      onPointerMove={(event) =>
        onHover(item, {
          x: event.clientX + 12,
          y: event.clientY + 12
        })
      }
      onPointerLeave={onLeave}
      onFocus={handleFocus}
      onBlur={onLeave}
      onTouchStart={handleFocus}
    />
  );
};

export default InventorySlot;
