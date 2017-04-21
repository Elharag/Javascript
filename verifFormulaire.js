var formulaire = document.getElementById("formulaire");
var verifEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

/*Verification formulaire de contact*/

formulaire.nom.addEventListener("input", function(e)
				{
				    var nom = e.target.value;
				    if ((nom.length <= 3) || (nom.length >= 25) || (nom == " "))
					formulaire.nom.style.borderColor = '#ff0000';
				    else
					{
					    formulaire.nom.style.borderColor = '#00ffff';
					    formulaire.nom.style.backgroundColor = '';
					}

				});

formulaire.email.addEventListener("input", function(e)
				  {
				      var mail = e.target.value;
				      if (!verifEmail.test(mail))
					  formulaire.email.style.borderColor = '#ff0000';
				      else
					  {
					      formulaire.email.style.borderColor = '#00ffff';
					      formulaire.email.style.backgroundColor = '';
					  }

				  });

function verifForm()
{
    if (!verifEmail.test(formulaire.email.value) || (formulaire.nom.value.length == undefined) || (formulaire.nom.value.length <= 3) || (formulaire.nom.value.length >= 25))
	{
	    if (!verifEmail.test(formulaire.email.value))
		formulaire.email.style.backgroundColor = '#ff0000';
	    else if (verifEmail.test(formulaire.email.value))
		formulaire.email.style.backgroundColor = '';
	    if ((formulaire.nom.value.length == undefined) || (formulaire.nom.value.length <= 3) || (formulaire.nom.value.length >= 25))
		formulaire.nom.style.backgroundColor = '#ff0000';
	    else if ((formulaire.nom.value.length != undefined) || (formulaire.nom.value.length > 3) || (formulaire.nom.value.length < 25))
		formulaire.nom.style.backgroundColor = '';

	    return false;
	}
    else if ((formulaire.nom.value.length != undefined) || (formulaire.nom.value.length > 3) || (formulaire.nom.value.length < 25) && (!verifEmail.test(formulaire.email.value)))
	{
	    formulaire.nom.style.backgroundColor = '';

	    return true;
	}
}

/*Fin de la verif*/