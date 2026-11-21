import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { desk, inventory } from "../assets";
import { Inventory } from "./minecraft";
import { deskItems } from "../constants/deskItems";

const Desk = () => {
  const navigate = useNavigate();
  const [minecraftOpen, setMinecraftOpen] = useState(false);

  const handleAction = (action) => {
    switch (action) {
      case "about":
        navigate("/about");
        break;
      case "contact":
        navigate("/contact");
        break;
      case "inventory":
        setMinecraftOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
  <header className="ml-4 mb-12 shrink-0">
    <h1 className="font-pixel font-bold text-white text-[clamp(32px,5vw,72px)] leading-tight">
      Welcome to my desk!
    </h1>

    <p className="font-pixel text-softPink text-[clamp(18px,3vw,42px)] leading-tight">
      Click an item to explore
    </p>
  </header>

  <section
    className="desk-scene relative flex-1 min-h-0 w-full font-pixel text-white
               bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${desk})`,
    }}
  >
        {deskItems.map((item) => {
          const itemStyle = {
            ...item.position,
            width: item.width,
            transform: item.rotation
              ? `rotate(${item.rotation})`
              : undefined,
          };

          const content = (
            <>
              <img
                src={item.image}
                alt=""
                draggable="false"
                className="pixel-style w-full h-auto"
              />
              <span>{item.label}</span>
            </>
          );

          return item.href ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="absolute flex flex-col items-center hover-glow"
              style={itemStyle}
            >
              {content}
            </a>
          ) : (
            <button
              key={item.id}
              type="button"
              onClick={() => handleAction(item.action)}
              aria-label={item.label}
              className="absolute flex flex-col items-center hover-glow"
              style={itemStyle}
            >
              {content}
            </button>
          );
        })}
      </section>

      {minecraftOpen && (
        <Inventory
          backgroundImage={inventory}
          onClose={() => setMinecraftOpen(false)}
        />
      )}
    </main>
  );
};

export default Desk;
