var ordi;
var choix1;
var choix2;
var choixUtilisateur;
var scoreCPU=0;
var scoreUser=0;
/*================= function selection =============*/
function selection(choixUtilisateur) {
      choix1=choixUtilisateur;

  /*  if (choixUtilisateur==="pierre") {
        txt = " OK!";
    } else {
        txt = "ko!";
    }
*/
//alert(choix1);
//alert(choix2);
//console.log(comparer(choixUtilisateur, ordi));


/*============== choix de l'ordinateur =================*/
ordi = Math.floor((Math.random() * 3) + 1);
choix2 = ordi;

    if (ordi == 1) {
	ordi = "pierre";

    } else if (ordi == 2) {
	ordi = "feuille";
    } else {
    	ordi = "ciseaux";
    }
document.getElementById('resultat').innerHTML=comparer(choixUtilisateur, ordi);

}
/*================= fin function selection =============*/

/* ================== fonction de comparaison ================ */
var comparer = function (choix1, choix2) {
	if (choix1 === choix2) {
		return "Egalité !";
	}

	else if (choix1 === "pierre") {
		if (choix2 === "ciseaux") {
        ++scoreUser;
			return "pierre gagne";

		} else {
        ++scoreCPU;
			return "feuille gagne";

		}
	}
	else if (choix1 === "feuille") {
		if (choix2 === "pierre") {
        ++scoreUser;
			return "feuille gagne";

		} else {
          ++scoreCPU;
			return "ciseaux gagne";


		}
	}
	else {
		if (choix2 === "pierre") {
        ++scoreCPU;
			return "pierre gagne";

		} else {
        ++scoreUser;

			return "ciseaux gagne";

		}
	}

};

/* ==================== fin js ================== */
