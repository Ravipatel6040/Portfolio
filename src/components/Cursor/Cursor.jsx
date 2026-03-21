import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const innerRef = useRef(null);

  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const moveMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (innerRef.current) {
        innerRef.current.style.left = `${mouse.x}px`;
        innerRef.current.style.top = `${mouse.y}px`;
      }
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    // 🔥 Hover Effect
    const addHover = () => {
      cursorRef.current.classList.add("scale-150", "bg-green-400/20");
    };

    const removeHover = () => {
      cursorRef.current.classList.remove("scale-150", "bg-green-400/20");
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // 🔥 Click Ripple Effect
    const handleClick = () => {
      if (!cursorRef.current) return;

      cursorRef.current.classList.add("scale-75");

      setTimeout(() => {
        cursorRef.current.classList.remove("scale-75");
      }, 150);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Outer Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-green-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out backdrop-blur-sm"
      />

      {/* Inner Dot */}
      <div
        ref={innerRef}
        className="fixed w-2 h-2 bg-green-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default Cursor;