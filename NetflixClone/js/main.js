const accordionEl = document.getElementsByClassName("accordion")
for (let i = 0; i <accordionEl.length; i++) {
    accordionEl[i].addEventListener("click",function(){
        this.classList.toggle("active")
        let panelEl = this.nextElementSibling;
        if (panelEl.style.maxHeight){
            panelEl.style.maxHeight = null
        }else{panelEl.style.maxHeight = panelEl.scrollHeight + "px"}
    })
}