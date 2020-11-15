
let signupBtn = document.querySelector(".signup-page-btn")
let signupName = document.querySelector(".signup-name")
let signupEmail = document.querySelector(".signup-email")
let signupPassword = document.querySelector(".signup-password")
let signupmsg = document.querySelector(".signup-msg")


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

// let loginBtn = document.querySelector(".login-page-btn")
// let loginEmail = document.querySelector("")
// let loginPassword = document.querySelector("")

// loginBtn.addEventListener('click', (event) => {
//     event.preventDefault() 
//     axios.post(`/login`, {  email: loginEmail.value, password: loginPassword.value })
//         .then((res) => {
//             //redirect to logged in home page
//             window.location = "/colors/1";
//         })
// })

