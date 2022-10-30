/* ======= starting with ReactDom and React.CreateElement ======== */

// let n = 0;
// function interval() {
//     const title = React.createElement("h1",null,"Bonjour, tous le monde !",
//         React.createElement("span",null,n)
//     );
//     ReactDOM.render(title,document.getElementById('app'));
// }

/* ======= starting with React JSX  ======== */
// function renderNumber(n) {
//     return n.toString().padStart(2,"0");
// }

// let n = 0;
// function interval() {
//     const taches =[
//         'tache1',
//         'tache2',
//         'tache3'
//     ];
//     const lis = taches.map( (tache,key) => <li key = {key}>{tache}</li> )
//     const element =
//     <React.Fragment>
//         <h1 id="title"> Bonjour tous le monde, <span>{renderNumber(n)}</span></h1>
//         <ul>
//             {lis}
//         </ul>
//     </React.Fragment>
//     ReactDOM.render(element,document.getElementById('app'));
// }

// interval();

// setInterval(()=>{
//     n++;
//     interval();
// },1000);


/* ============ Exercises show all the following elements =============== */
//exercise1 
const song = "Chachacha";
const numberOfGoodReasonsToBeHere = 150;
const disabledButton = <button disabled>Bouton</button>

//exercise2 
const notes = [0, 4, 10, 20, 15];

const personne = {
firstname: "Boulette",
lastname: "Fromage",
age: 15,
};

const actionsList =
<div>
    <button>Modifier</button>
    <button>Annuler</button>
</div>

const liste = notes.map((element,key) =>
    <li key = {key}>{element}</li>
);

//exercise3 
const employe = {
    name: "Charly",
    age: 66,
    job: {
      name: "Styliste",
      since: "29 Avril 2020",
    }
  };

  const panierDeCourses = [
    {
      name: "Concombre",
      type: "Legume"
    },
    {
      name: "Courgette",
      type: "Legume",
    },
    {
      name: "Endive",
      type: "Beurk",
    },
    {
      name: "Steak",
      type: "Frais",
    },
    {
      name: "Sanglier",
      type: null,
    }
  ];

const paniers = panierDeCourses.map((course,key) => <li key = {key}>{course.name} est de type {course.type || "non renseigner"}.</li> 
);

const element = 
<React.Fragment>
    <p>{paniers}</p>
    <p>{liste}</p>
    <p>L'employe nomme {employe.name} age de {employe.age} ans, est {employe.job.name} depuis le {employe.job.since}.</p>
    <p>nom: {personne.firstname} , prenom: {personne.lastname} est age de {personne.age} ans.</p>
    {actionsList}
</React.Fragment>

ReactDOM.render(element,document.getElementById('app'));




