const createForm = document.querySelector("form")
createForm.addEventListener("submit", async(e) => {
    e.preventDefault()

    const itemData = new FormData(createForm)
    const reqBody = Object.fromEnteries(bookData)
})
function goToPage(url) {
      window.location.href = url;
    }