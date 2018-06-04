
//1.Variables globales + acces aux élements du DOM
var title = 'Formation Js';
var nodeTitle = document.getElementById('title');
var nodeImg = document.getElementById('image');
var divFilters = document.getElementById('filters');
var selectCourse = divFilters.children[0];//enfant d'indice 0
var divMessage= document.getElementById('message');

//variable objet:
var config = {
  appVersion:1,
  animation:false,
  afficheMessage: function(message){l(message)},
  students: [
  {name:'Dominique' , age:14 , attendedCourses : ['PHP', 'JavaScript']},
  {name:'Antonio' , age:25 ,attendedCourses : ['PHP']},
  {name:'Ohman' , status:'CDI', attendedCourses : []},
  {name:'Tristan' , age:23 , attendedCourses : ['Symfony', 'JavaScript']},
  {name:'Nakkib' , age:30 , attendedCourses : ['PHP', 'JavaScript' , 'Angular' , 'NodeJS']}],
  studentsFiltered: null

};
var l =console.log;
var divStudents = document.getElementById('students');

//2.état du déclaration de fonctions

function displayImg(){
    let display=nodeImg.style.display;
    if (config.animation) {
      //version avec operateur ternaire (syntaxe racourci)
      nodeImg.style.display= (display === 'none') ? 'inline' : 'none';
     //version avec if  classic (syntaxe racourci)
    /*
      if (display === 'none') {
        //l'afectation de variable n'ateind pas l'original car ce n'es pas une référence
         console.log('if :' + display);
         nodeImg.style.display = 'inline';
          console.log(display);
      }
      else {
         console.log('else :' + display);
        nodeImg.style.display = 'none';
      }*/
    }
}

function init(){
nodeTitle.innerText=title;
//on copie le tableau des etudiants non filtré dans
//celui des étudiants filtrés
config.studentsFiltered=config.students;
divStudents.innerHTML=builStudentTable();
}

function builStudentList(){
  let s ='<ul>';//variable contenant balisage html
  for (let i = 0; i < config.students.length; i++) {
    l('ok');
  s += '<li>';
  s += config.students[i].name ;
  if ( config.students[i].age) {
    s += '('+ config.students[i].age +'ans)';
  }
    s +='</li>'
  }
    s+='</ul>'
    return s; // retourne le balisage html
}
function builStudentTable(){
  let header = '<tr><th>Nom</th><th>Age</th><th>Cours suivi</th></tr>';
  let s ='<table class="table tabble-border table-striped" >';//variable contenant balisage html
  s += header;
  for (let i = 0; i <config.studentsFiltered.length; i++) {
    //colone name
  s += '<tr>';
  s += '<td>';
  s += config.students[i].name ;
  s += '</td>';
  s += '<td>';

  //if syntaxe rapide(sans bloc) valable pour une seule instructon

  if (config.studentsFiltered[i].age) s += config.studentsFiltered[i].age ;

  s += '</td>';
  //colone Cours suivi

  s += '<td>';
  s += config.studentsFiltered[i].attendedCourses ;
  s += '</td>';


  s +='</tr>';

  }
  s+='</table>'
    return s; // retourne le balisage html
}

//3.gestion des évenements

nodeTitle.addEventListener('mouseover', displayImg);
/*selectCourse.addEventListener('change', function(){l('ok')}
);*/ //debug
selectCourse.addEventListener('change', function(){
let selectedCourse =   this.value;
  //modifier la source de donées  par rapport à l'option Choisi
  let studentsFiltered=config.students.filter(function(student){
    return student.attendedCourses.indexOf(selectedCourse) != -1;
  })
  //********************************
  if (selectedCourse == '0') {
    config.studentsFiltered=config.students;
    divMessage.innerText='';
  } else {
    config.studentsFiltered=studentsFiltered;
    //affichage message
    divMessage.innerText=config.studentsFiltered.length + ' étudiantss) trouvé(s)';
  }

divStudents.innerHTML=builStudentTable();
  //********************************
    l(studentsFiltered);
})


//initialisation
init();
