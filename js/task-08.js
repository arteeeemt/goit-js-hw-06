const formInput = document.querySelector('.login-form')

function handleFormSubmit(event) {
  event.preventDefault(); 

  const form = event.target; 
  const elements = form.elements; 

 
  let isFormValid = true;
  for (const element of elements) {
    if (element.type !== "submit" && element.value.trim() === "") {
      isFormValid = false;
      break;
    }
  }

  if (!isFormValid) {
    alert("Усі поля повинні бути заповнені");
  } else {
    
    const formData = {};
    for (const element of elements) {
      if (element.type !== "submit") {
        formData[element.name] = element.value;
      }
    }

    
    console.log(formData);

    
    form.reset();
  }
}

formInput.addEventListener('submit', handleFormSubmit)
