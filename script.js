document.body.onmousemove = ({ clientX, clientY }) => {
  const elements = document.querySelectorAll(".container div");
  elements.forEach((e) => {
    const { left, top } = e.getBoundingClientRect();
    const mouseX = clientX - left;
    const mouseY = clientY - top;

    e.style.setProperty("--mouse-x", `${mouseX}px`);
    e.style.setProperty("--mouse-y", `${mouseY}px`);
  });
};

