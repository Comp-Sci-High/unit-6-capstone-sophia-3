const createForm = document.querySelector("form")
createForm.addEventListener("submit", async(e) => {
    e.preventDefault()

    const itemData = new FormData(createForm)
    const reqBody = Object.fromEnteries(bookData)
    
} 
)
function goToPage(url) {
      window.location.href = url;
    }
    async function deleteItem(id) {
 await fetch('/delete/' + id, {method: 'DELETE'});
 window.location.href = "/items.ejs"
}




async function editItem(e, id) {
 e.preventDefault();

 const formData = new FormData(e.target);
 const formObject = Object.fromEntries(formData.entries());

 await fetch('/update/' + id, {
   method: 'PATCH',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(formObject)
 });

 window.location.href = '/'
}
