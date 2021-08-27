
function verificarLogin(){
    if(localStorage._id==null){
      window.location.href = '/login.html';
      alert("Você precisa se logar ou se registrar para acessar essa página");
    }