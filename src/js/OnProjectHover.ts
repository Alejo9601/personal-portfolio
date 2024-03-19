window.onload = () => {
   const projectCards = document.getElementsByClassName("on-hover-el");

   Array.from(projectCards).forEach((onHoverEl) => {
      const img = onHoverEl.lastElementChild;

      if(img) {
         onHoverEl.addEventListener("mouseover", () => {
            img.classList.add("scale-[1.025]");
         });
         onHoverEl.addEventListener("mouseleave", () => {
            img.classList.remove("scale-[1.025]");
         });
      }
      
   });
};
