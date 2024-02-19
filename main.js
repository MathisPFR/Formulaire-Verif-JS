
let submit = document.getElementById("submit")
submit.addEventListener("click", verify )
    
 
function verify() {
    emailCheck();
    postalCode();
    social();
    Pass();
    verifDatePass();
}



    function emailCheck() {

            let email = document.getElementById("Mail").value;

           if (verif(email)) {
            // alert("  email valide")
           }

           else {
            alert("Cette email n'est pas valide")
           }

           return false;

        }
 

    function verif(email) {
        const verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         return verif.test(email);
    }

    
        function postalCode() {
            let postal = document.getElementById("code-postale").value;

            if (postal.length != 5) {
                alert("Ce code postal est invalide");
                return;
            }

            else {
                // alert("code postal ok")
            }

        }

    
        function social() {
            let social = document.getElementById("secu-number").value;


            if (verifSocial(social)) {
                // alert("secu ok")
            }

                

            else {
                alert("Le numéro de sécurité social n'est pas valide")
            }
            
        }

        function verifSocial(social) {
            const verifSS = /^[12]\d{12}$/;
            return verifSS.test(social);
        }


        function Pass() {
            let passport = document.getElementById("pass-number").value;

            if (verifPass(passport)) {
                // alert ("passeport ok")
            }

            else {
                alert("Ce numéro de passeport n'est pas valide")
            }

        }

        function verifPass(passport) {

            const verifP = /^[0-9]{2}[A-z]{2}[0-9]{5}$/;
            return verifP.test(passport);
        }

        function verifDatePass() {
            let delivrancePass = document.getElementById("date-passeport-dev").value;
            let validPass = document.getElementById("date-passeport-val").value;

                if (delivrancePass > validPass) {
                alert("Cette date validité n'est pas valide")
                }

                else {
                    // alert("date passeport ok")
                }
        }


    


    


    

