function validation(){
    var b= document.getElementById("email");
   var c= document.getElementById("password");
   if (b.value == "" || b.length==0){
    document.getElementById("text3").innerHTML="შეიყვანეთ ელ.ფოსტა";
   
   }else if(c.value == "" || c.length==0){
    document.getElementById("text3").innerHTML="";
    document.getElementById("text4").innerHTML="სწორია";
    document.getElementById("text5").innerHTML=" შეიყვანეთ პაროლი";


   }   else  {
    document.getElementById("text5").innerHTML=" ";
    document.getElementById("text6").innerHTML="სწორია ";
    window.alert ("თქვენ წარმატებით გააიარეთ რეგისტრაცია!");
   document.getElementById("res").reset();
   }
}