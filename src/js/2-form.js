let formData = {
    email: "", 
    message: ""
}
//////////////SELECTOR
const modalForm = document.querySelector('.modal-feedback-form')
const modalFormSubmitBtn = document.querySelector('.modal-feedback-btn')



///////////////LISTNER
modalForm.addEventListener('input', saveDataUser)
modalFormSubmitBtn.addEventListener('click',validateForm )

getLocalUserData()


////////////////FUNCTION
function saveDataUser (e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}



function getLocalUserData (){
    const localUserData = JSON.parse(localStorage.getItem('feedback-form-state'))

    if(localUserData === null){
        return
    }
   for(const key in localUserData){
    if(localUserData.hasOwnProperty(key) === false){
      return
    }
     modalForm.elements[key].value = localUserData[key]
   }
}
function validateForm(e) {
    e.preventDefault();
    if (!formData.email && !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = {};
    modalForm.reset();
}