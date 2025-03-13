const btnCount = document.getElementById("btnCount")
const txtCounter = document.getElementById("txtCounter")

let count = 0;

btnCount.addEventListener("click", () => {
    count++;
    txtCounter.innerText = count;
    console.log(count)
    console.log("Clicked")
})