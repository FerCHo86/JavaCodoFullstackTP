
window.onload = function () {
    var buttonElement = document.getElementById("Register");
    var Password = document.getElementById("Password");
    var Password2 = document.getElementById("Password2");
    var Name = document.getElementById("name");
    var surname = document.getElementById("family-name");
    var mail = document.getElementById("mail");
    var ErrMSG = document.getElementById("ErrMSG")
  
    if (buttonElement) {
      buttonElement.addEventListener('click', logcheck);
    }
  
    function logcheck() {
        if((Password.value=="")||(Password2.value=="")||(Name.value=="")||
        (surname.value=="")||(mail.value=="")){
            ErrMSG.innerHTML="Todos los campos son obligatorios..."
            return;
        }
        else if(Password.value!=Password2.value){
            ErrMSG.innerHTML="Ups, las contraseñas no coinciden..."
            return;
        }
        else if(httpPost("http://localhost:8080/demo/hasduplicated?email="+mail.value)){
            ErrMSG.innerHTML="EL USUARIO YA EXISTE"
        }  
        else{
            ErrMSG.classList.add("text-success")
            ErrMSG.classList.remove("text-danger")
            ErrMSG.innerHTML="User added"
            console.log("http://localhost:8080/demo/add?name="+Name.value+"&surname="+surname.value+
            "&email="+mail.value+"&password="+Password.value)
            SaveUser("http://localhost:8080/demo/add?name="+Name.value+"&surname="+surname.value+
            "&email="+mail.value+"&password="+Password.value)
            window.location.href="tickets.html"

            
        }

    }
    function httpPost(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
        xmlHttp.send();
        if(xmlHttp.responseText=="false")return false;
        else return true; 
    }
    function SaveUser(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
        xmlHttp.send();
    }

  }