window.onload = () => {
   const projectCards = document.getElementsByClassName("on-hover-el");

   Array.from(projectCards).forEach((card) => {
      const imgContainer = card.lastElementChild;
      card.addEventListener("mouseover", () => {
         imgContainer.lastElementChild.classList.add("scale-[1.025]");
      });
      card.addEventListener("mouseleave", () => {
         imgContainer.lastElementChild.classList.remove("scale-[1.025]");
      });
   });
};
