const UserName = document.querySelector('#userId')
const UserEmail = document.querySelector('#userEmail')
const UserPass = document.querySelector('#userPassword')
const UserConfirmPass = document.querySelector('#confirmPassword')
const registerBtn = document.querySelector('.registerBtn')

registerBtn.addEventListener('click', function(e){
    e.preventDefault()
   

    UserConfirmPass.value,UserName.value;UserEmail.value;UserPass.value;

    if(!UserName.value || !UserEmail.value || !UserPass.value || !UserConfirmPass.value ){
        alert(`Please sir enter value`)
    }

    if(UserPass.value === UserConfirmPass.value){
       if(registerSuccess()){
        alert(`Registration Successfull ${UserName.value}`)
        e.defaultPrevented(true)
       }
    }else if(UserPass.value !== UserConfirmPass.value){
        alert(`Password Does not Match`)
    }
})

// next page after registration



let users = JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')): [];
function registerSuccess(){ 
    name = UserName.value;
    email = UserEmail.value;
    password = UserPass.value;
    let userDetails = {
        "id": +(new Date()),
        "name": name,
        "email":email,
       " password":password
    }

    let newUser = users.some(el => el.email  === userDetails.email);
     if(newUser ){
        alert(`User Exist`)
    } else{
        
        users.push(userDetails)
    }
  
    let userFinal = JSON.stringify(users)
    localStorage.setItem('userData', userFinal)
}


document.createElement
document.getElementsByClassName
registerBtn.classList
registerBtn.textContent
registerBtn.append