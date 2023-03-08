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
  setError(firstName, 'First name cannont be empty')
}
else{
  setSuccess(firstName)
}

}

const setError = (input, msg) =>{
const formControl = input.parentElement
const  errorMsg = formControl.querySelector('small')
errorMsg.innerText = msg
formControl.className = 'form-control error'
}
const setSuccess = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}