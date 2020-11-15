
let signupBtn = document.querySelector(".signup-page-btn")
let signupName = document.querySelector(".signup-name")
let signupEmail = document.querySelector(".signup-email")
let signupPassword = document.querySelector(".signup-password")
let signupmsg = document.querySelector(".signup-msg")

let loginBtn = document.querySelector(".login-btn")
let loginEmail = document.querySelector(".login-email")
let loginPassword = document.querySelector(".login-password")


function handleReturn(res) {
    if (res.data.message === "ok") {
        signupmsg.textContent = "Profile created, please login"
    } else {
        signupmsg.textContent = "Failed to create user"
    }
}
signupBtn.addEventListener('click', (event) => {
    event.preventDefault() //Stops form refresh from happening!
    axios.post(`/users`, { name: signupName.value, email: signupEmail.value, password: signupPassword.value })
        .then(handleReturn)
})

loginBtn.addEventListener('click', (event) => {
    event.preventDefault() 
    axios.post(`/login`, {  email: loginEmail.value, password: loginPassword.value })
        .then((res) => {
            if(res.data.login) { 
                window.location = `/colors/${res.data.user.id}`;
            } else { 
                console.log("login failed")
            }
        })
})
