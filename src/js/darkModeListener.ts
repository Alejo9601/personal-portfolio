const checkbox: HTMLInputElement | null = document.querySelector("#toggler")
const html = document.getElementsByTagName("html")[0]

checkbox?.addEventListener("change", () => {
    if(checkbox.checked){
        html.classList.add("dark")
        return
    }
    html.classList.remove("dark")
})
