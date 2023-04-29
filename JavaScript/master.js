let bookmarkBtn = document.querySelector(".bookmark-btn")
bookmarkBtn.onclick = () => {
    bookmarkBtn.classList.toggle("active")
}

let allCards = document.querySelectorAll(".project-card .card")
let allBottoms = document.querySelectorAll(".project-card .card .bottom")

let mainBtns = document.querySelectorAll("#main-button")
let cardBtns = document.querySelectorAll(".radio-btn input")

let continueBtn = document.querySelectorAll(".bottom .buttons span")

let totalBackers = document.querySelector(".s-box .state .two h1")

let backedPrice = document.querySelector(".s-box .state .one h1")
console.log()

mainBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelector(".project-card").style.display = "block"
    })
})
document.querySelector(".close-model").addEventListener("click", (e) => {
    document.querySelector(".project-card").style.display = "none"
})

document.querySelectorAll("#main-button:not(:first-child)").forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeAllActiveClasses()
        document.querySelector(`#${e.target.dataset.select}`).checked = true
        document.querySelector(`#${e.target.dataset.select}`).parentElement.parentElement.parentElement.classList.add("active")
        document.querySelector(`#${e.target.dataset.select}`).parentElement.parentElement.parentElement.querySelector(".bottom").classList.add("active")
    })
})


document.querySelector("#main-button:first-child").onclick = () => {
    removeAllActiveClasses()
}

function removeAllActiveClasses () {
    allCards.forEach(card => {card.classList.remove("active")})
    allBottoms.forEach(bottom => {bottom.classList.remove("active")})
    cardBtns.forEach(radio => {radio.checked = false})
}




cardBtns.forEach(radio => {
    radio.onchange = () => {
        document.querySelectorAll(".card").forEach(card => {card.classList.remove("active")})
        document.querySelectorAll(".bottom").forEach(bot => {bot.classList.remove("active")})

        radio.parentElement.parentElement.parentElement.classList.add("active")
        radio.parentElement.parentElement.parentElement.querySelector(".bottom").classList.add("active")
    }
})




continueBtn.forEach(btn => {
    btn.addEventListener("click" , (e) => {
        document.querySelector(".project-card .container").style.display = "none"

        let div = document.createElement("div")
        div.className = "confirm-card"

        let img = document.createElement("img")
        img.src = "images/icon-check.svg"

        let h1 = document.createElement("h1")
        h1.textContent = "Thanks for your support!"

        let p = document.createElement("p")
        p.textContent = "Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email one our campaign is completed."

        let span = document.createElement("span")
        span.textContent = "Got it!"
        
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(span)

        document.querySelector(".project-card").appendChild(div)

        document.querySelector(".confirm-card span").addEventListener("click", (e) => {
            e.target.parentElement.parentElement.style.display = "none"
            e.target.parentElement.remove()
            document.querySelector(".project-card .container").style.display = "block"
        })

        let increament = parseInt(totalBackers.innerHTML.split(",").join(""))
        increament++
        increament = increament.toString().split("")
        increament.splice(1,0, ",").join("")
        totalBackers.innerHTML = increament.join("")

        let price = +backedPrice.innerHTML.split(",").join("").split("$").join("")
        price = price + +e.target.previousElementSibling.value
        price = price.toString().split("")
        price.splice(2,0,",")
        backedPrice.innerHTML = `$${price.join("")}`
    })
})




// Menu Bar In Phone Size

let menuBard = document.querySelector(".burger-icon")
let closeIcon = document.querySelector(".close-icon")
let overlay = document.querySelector(".overlay")
let theLinks = document.querySelector(".links")

menuBard.onclick = () => {
    menuBard.classList.add("active")
    closeIcon.classList.add("active")
    overlay.classList.add("active")
    theLinks.classList.add("active")
}

closeIcon.onclick = () => {
    menuBard.classList.remove("active")
    closeIcon.classList.remove("active")
    overlay.classList.remove("active")
    theLinks.classList.remove("active")
}
