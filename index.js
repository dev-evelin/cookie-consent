const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText  = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn") 
const modalChoiceBtns = document.getElementById("modal-choice-btns")


setTimeout(function () {
    modal.style.display = "inline"

}, 1500)

modalCloseBtn.addEventListener("click", function() {
    modal.style.display = "none"
})


declineBtn.addEventListener("mouseenter", function(){
    modalChoiceBtns.classList.toggle("modal-choice-btns-reverse")

})


modalChoiceBtns

consentForm.addEventListener("submit",function(e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    let firstName = consentFormData.get("firstName")
    let lastName = consentFormData.get("lastName")
    // const firstName =  consentFormData.get(`firstName`)

    firstName = firstName.charAt(0).toUpperCase()+ firstName.slice(1)
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
 

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data...
        </p>
    </div>`

    setTimeout(function () {
        document.getElementById('upload-text').innerText = `Baking the cookies...`
    }, 1500) 



    setTimeout(function () {
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks, <span class="modal-display-name">${firstName + " "+ lastName} ❤️</span></h2>
        <p>Life is too short to not eat all the cookies that you love. Enjoy it <span class="cookie-animation">🍪🍪🍪</span></p>
        <div class="cookies-gif">
            <img src="images/sendcookie.gif">
        </div>
    
    ` 

    modalCloseBtn.disabled = false

    }, 3000) 
  

})