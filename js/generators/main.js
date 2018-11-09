document.addEventListener("DOMContentLoaded", () => {
  
  const strings = document.querySelectorAll(".string");
  const btn = document.querySelector("#btn");
  const className = "darker";

  function* addClassToEach(elements, className) {
    for (const el of Array.from(elements)) yield el.classList.add(className);
  }

  const addClassToStrings = addClassToEach(strings, className);

  btn.addEventListener("click", el => {
    console.log(el);
    if (addClassToStrings.next().done) el.target.classList.add(className);
  });
});
