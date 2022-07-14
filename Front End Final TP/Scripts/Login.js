window.onload = function () {
    var email = document.getElementById("emailLogin");
    var Password = document.getElementById("PasswordLogin");
    var loggin = document.getElementById("loginbutton");
    var registerlink = document.getElementById("registerlink");

    if (loggin) {
      loggin.addEventListener('click', logcheck);
    }
    function logcheck() {
        if(httpPost("http://localhost:8080/demo/logcheck?email="+email.value+"&password="+Password.value)){

            var UserName=getname("http://localhost:8080/demo/getname?email="+email.value)

            email.hidden=true
            Password.hidden=true
            registerlink.hidden=true
            loggin.innerHTML="Hola "+UserName
            loggin.classList.add("bg-success")
            loggin.classList.remove("btn-success")

            loggin.disabled=true
            loggin.classList.add("text-white")
        }
        else{
            Password.value=""
            email.value=""
            registerlink.classList.add("text-warning")
            registerlink.classList.remove("text-success")
            registerlink.innerHTML="Datos incorrectos. No sos usuario? Registrate!"

        }

    }
    function httpPost(theUrl)
    {   try{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
        xmlHttp.send();
        if(xmlHttp.responseText=="false")return false;
        else return true;
        } 
        catch{
            return false
        }

    }
    function getname(theUrl){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
        xmlHttp.send();
        return xmlHttp.responseText
    }
}