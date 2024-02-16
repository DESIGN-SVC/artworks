// This function creates a hover animation for HTML elements that moves them according to the movement of the mouse cursor.
export const HoverAnimation = () => {
  const animateit = (e: MouseEvent) => {
    const span = e.target as HTMLElement;
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } =
        span.parentElement as HTMLElement,
      move = 25,
      xMove = (x / width) * (move * 3) - move,
      yMove = (y / height) * (move * 3) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  const links = document.querySelectorAll(
    ".hover-this",
  ) as NodeListOf<HTMLElement>;

  links.forEach((b) => {
    b.addEventListener("mousemove", animateit);
    b.addEventListener("mouseleave", animateit);
  });

  return () => {
    links.forEach((b) => {
      b.removeEventListener("mousemove", animateit);
      b.removeEventListener("mouseleave", animateit);
    });
  };
};
