function login(){
    const username = document.getElementById ("username").value;
    //uma varavel que esta pegando o valor que esta dentro do elemento que tem id = username
    const password = document.getElementById ("password").value;

    if(username==="admin" && password==="1234"){
        window.location.href="bemvindo.html"
    } else {
        document.getElementById("mensagem").textContent="Usuario ou senha incorretos"
    }

}