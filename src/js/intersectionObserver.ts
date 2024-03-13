const makeElementVisible = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {  
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.remove("paused")
            console.log(entry)
        }
    })
}

window.addEventListener("DOMContentLoaded", ()=> {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
    }

    
    let observer = new IntersectionObserver(makeElementVisible, options);
    
    let observables = document.querySelectorAll(".section")

    observables.forEach((el) => {
        observer.observe(el)
    })  

})

