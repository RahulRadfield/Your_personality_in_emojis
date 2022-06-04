let myEmojis = ["👨‍💻", "🎿", "🍜"]

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.querySelector(".push-btn")
const unshiftBtn = document.querySelector(".unshift-btn")
const popBtn = document.querySelector(".pop-btn")
const shiftBtn = document.querySelector(".shift-btn")

function renderEmojis() {

    emojiInput.value = ""
    emojiContainer.innerHTML = ""

    for (let i = 0; i < myEmojis.length; i++) {
        let spanEl = document.createElement("span")
        spanEl.textContent = myEmojis[i]
        emojiContainer.append(spanEl)
    }
}

renderEmojis(myEmojis)

pushBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function () {
    if (emojiInput) {
        myEmojis.unshift(emojiInput.value)
        renderEmojis()
    }
})

popBtn.addEventListener("click", function () {
    if (!emojiInput.value) {
        myEmojis.pop()
        renderEmojis()
    }

})

shiftBtn.addEventListener("click", function () {
    if (!emojiInput.value) {
        myEmojis.shift()
        renderEmojis()
    }
})




