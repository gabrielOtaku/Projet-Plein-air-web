function newslatter(){
    let nameUser = prompt("Veuillez rentrer votre nom")
    let eMailUser = prompt("Veuillez rentrer une adresse e-mail")
   
    alert("Merci pour votre abonnement !" +" " + nameUser );
    if( eMailUser == empty){
        alert("Veuillez rentrer une adresse e-mail valide")
        return;
    }
    else if( nameUser == empty){
        alert("Veuillez rentrer un nom valide")
        return;
    }
 
    console.log(nameUser)
}