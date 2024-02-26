let form = document.getElementById('form-contact')
console.log(form)
let submitButton = document.getElementById('submitButton')
let formElements = form.elements

let requiredInputs = ["email", "message", "firstName", "lastName"]

submitButton.addEventListener('click', function(event) {
  let emptyFields = []

  for(input in requiredInputs) {
    if (formElements[requiredInputs[input]].value === "") {
      formElements[requiredInputs[input]].placeholder = "This field is required"
      formElements[requiredInputs[input]].style.border = "2px solid red"
      emptyFields.push(requiredInputs[input].name)
    }
  }

  if (emptyFields.length > 0) {
    event.preventDefault()
    form.reset()
  }
})
