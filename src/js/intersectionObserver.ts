const makeElementVisible = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {  
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.remove("inactive")
            entry.target.classList.add("active")
            console.log(entry)
        }
    })
}

window.addEventListener("DOMContentLoaded", ()=> {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.20,
    }

    
    let observer = new IntersectionObserver(makeElementVisible, options);
    
    let observables = document.querySelectorAll(".inactive")

    observables.forEach((el) => {
        observer.observe(el)
    })  

})

