const signIn = document.querySelector('.in');
const signUp = document.querySelector('.up')
const formBox = document.querySelector('.formbox')
const regBox = document.querySelector('.regbox')
const nav = document.querySelector('.navbar')
const input = document.querySelectorAll('.input')
const submit = document.querySelector('.btn-reg')
const login = document.querySelector('.btn-login')
const logusr = document.querySelector('#username')
const logpw = document.querySelector('#password')

//data
const username = document.querySelector('#reguser');
const fName = document.querySelector("#regfname")
const mName = document.querySelector("#regmname")
const lName = document.querySelector("#reglname")
const email = document.querySelector("#regemail")
const num = document.querySelector("#regnum")
const regAge = document.querySelector("#regage")
const bDay = document.querySelector("#regbday")
const bPlace = document.querySelector("#regbplace")
const gender = document.querySelector("#reggender")
const pw = document.querySelector("#regpw")
const rpw = document.querySelector("#regrpw")


let shown = false;
let shown2 = false;
let regON = false;
let logON = false;


function DataStructure(){
    this.username = null;
    this.password = null;
}

let data = []

for(let i = 0; i < 10; i++){
    data.push(new DataStructure)
}

data[0].username = "admin"
data[0].password = "123"

let id = 1


signIn.addEventListener('click', () => {
    if(shown == false){
        if(regON == true){
            regBox.classList.add('hide')
            regBox.classList.remove("show")
        }
        formBox.classList.add('show')
        formBox.classList.remove('hide')
        formBox.style.position = "absolute"
        shown = true;
        logON = true;
    }
    else if(shown == true){
        formBox.classList.add('hide')
        formBox.classList.remove('show')
        shown = false;
        logON = false;
    }
})

signUp.addEventListener('click', () => {
    if(shown2 == false){
        if(logON == true){
            formBox.classList.add('hide')
            formBox.classList.remove("show")
        }
        regBox.classList.add('show')
        regBox.classList.remove('hide')
        regBox.style.position = "absolute"
        shown2 = true;
        regON = true
    }
    else if(shown2 == true){
        regBox.classList.add('hide')
        regBox.classList.remove('show')
        shown2 = false;
        regON = false
    }
})

function myIcon(x){
    x.classList.toggle("moon")
    document.body.classList.toggle("dark")
    nav.classList.toggle('nav-dark')
    formBox.classList.toggle('form-dark')
    regBox.classList.toggle('form-dark')
    input.forEach(x => x.classList.toggle('input-dark') )
}


//Validation

submit.addEventListener('click', (e) => {

    if(String(username.value).length < 8){
        alert("Username should be 8 characters long!")
    }
    else if(!String(email.value).includes("@") && !String(email.value).includes(".com")){
        alert("Invalid Email address!")
    }
    else if(!String(pw.value).match(String(rpw.value))){
        alert("Password does not match!")
    }
    else if(isNaN(num.value)){
        alert("Mobile number is not valid!")
    }
    else{
        alert("Registration Success")
        data[id].username = username.value;
        data[id].password = pw.value
        id++
    }
})

login.addEventListener('click', (e) => {
    for(let i = 0; i < data.length; i++){
        if(String(logusr.value) == data[i].username && String(logpw.value) == data[i].password){
            alert("Login Succesful")
            return
        }
    }
    alert("Login Failed")
})