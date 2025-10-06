function showSide(){
    const menu = document.querySelector('.menu-drop')
    menu.style.display = 'flex'
}

function hideSide(){
    const menu = document.querySelector('.menu-drop')
    menu.style.display = 'none'
}

const slide = () => {
    const slideBtn = document.querySelectorAll(".slider .slide-button");
    const imgList = document.querySelector(".slider .img-list")
    slideBtn.forEach(button => {
        button.addEventListener("click", ()=>{
            // console.log(button);
            const direction = button.id === "prev-slide"?-1:1;
            const scroll = imgList.clientWidth * direction;
            imgList.scrollBy({left:scroll,behavior:"smooth"})
        });
    });
}

window.addEventListener("load", slide)







function validateForm(){
    let name = document.getElementById("name-data").value
    let email = document.getElementById("email-data").value
    let address = document.getElementById("address-data").value
    let DOB = document.getElementById("dob-data").value

    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked
    let check = document.getElementById("agreement").checked
    let gendercheck = 1
    
    if(name.length<6){
        document.getElementById("error-name").innerHTML="Name must be more than 6 characters !!"
    }else{
        document.getElementById("error-name").innerHTML=""
    }

    if(!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML="Email must end with @gmail.com !!"
    }else{
        document.getElementById("error-email").innerHTML=""
    }

    if(address.length<6){
        document.getElementById("error-address").innerHTML="Address must be more than 6 characters !!"
    }else{
        document.getElementById("error-address").innerHTML=""
    }

    if(!male&&!female){
        document.getElementById("error-gender").innerHTML="You must choose your gender !!"
    }else{
        document.getElementById("error-gender").innerHTML=""
        gendercheck=0
    }

    if(new Date(DOB)>new Date()||DOB===""){
        document.getElementById("error-dob").innerHTML="Invalid date of birth!!"
    }else{
        document.getElementById("error-dob").innerHTML=""
    }

    if(!check){
        alert("You must agree to our terms & privacy")
    }else{

    }

    if(!name.length<6 && email.endsWith("@gmail.com") && !address.length<6 && gendercheck==0 &&!(new Date(DOB)>new Date()||DOB==="") && check){
        window.location.href = "home.html"
        alert("You have successfully registered!!")
        gendercheck=1
    }else{
        alert("Please fill up all fields in the form before submitting it!!")
    }
}

    function alphanumeric(password){
        let isAlpha = false
        let isNumeric = false
        for(let i=0;i<password.length;i++){
            if(isNaN(password[i])==true){
                isAlpha = true
            } else {
                isNumeric = true
            }
        }
        
        if(isAlpha == true && isNumeric == true){
            return true
        } else {
            return false
        }
    }