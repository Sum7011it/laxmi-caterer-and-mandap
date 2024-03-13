let foodcard = document.querySelectorAll(".pic");

foodcard.forEach((curCard) => {
    curCard.addEventListener("click", function () {
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <p>"Indulge in a feast of love as we cater to your every need on this joyous journey of marriage."</p>

        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function () {
            div.remove();
        })
    })
})