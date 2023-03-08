const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const form = document.querySelector('#form')
const password = document.querySelector('#password')
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  validateForm()
})
const validateForm = ()=>{
const firstNameValue = firstName.value.trim()
const lastNameValue = lastName.value.trim()
const emailValue = email.value.trim()
const passwordValue = password.value.trim()
if(firstNameValue === ''){
  setError(firstName, 'First Name cannont be empty')
}
else{
  setSuccess(firstName)
}
if(lastNameValue === ''){
  setError(lastName, 'Last Name cannont be empty')
}
else{
  setSuccess(lastName)
}
if(emailValue === ''){
  setError(email, 'Email cannont be empty')
}
else if (!isEmail(emailValue)){
  setError(email, 'Looks like this is not an email')
}
else{
  setSuccess(email)
}
if(passwordValue === ""){
  setError(password, "Password cannont be empty")
}
else{
  setSuccess(password)
}

}

const setError = (input, msg) =>{
const formControl = input.parentElement
const  errorMsg = formControl.querySelector('small')
input.placeholder = ""
errorMsg.innerText = msg
formControl.className = 'form-control error'
}
const setSuccess = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}
const  isEmail = (email)=> {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}