import { useEffect, useState } from "react";

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [position.x, position.y];
};

const MousePointer = () => {
  const [mouseX, mouseY] = useMousePointer();

  return (
    <>
      Your mouse pointer is at {mouseX}, {mouseY}
    </>
  );
};

export default MousePointer;
