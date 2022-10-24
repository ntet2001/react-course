/* ======= starting with ReactDom and React.CreateElement ======== */

// let n = 0;
// function interval() {
//     const title = React.createElement("h1",null,"Bonjour, tous le monde !",
//         React.createElement("span",null,n)
//     );
//     ReactDOM.render(title,document.getElementById('app'));
// }

/* ======= starting with React JSX  ======== */
function renderNumber(n) {
    return n.toString().padStart(2,"0");
}

let n = 0;
function interval() {
    const taches =[
        'tache1',
        'tache2',
        'tache3'
    ];
    const lis = taches.map( (tache,key) => <li key = {key}>{tache}</li> )
    const element =
    <React.Fragment>
        <h1 id="title"> Bonjour tous le monde, <span>{renderNumber(n)}</span></h1>
        <ul>
            {lis}
        </ul>
    </React.Fragment>
    ReactDOM.render(element,document.getElementById('app'));
}

interval();

setInterval(()=>{
    n++;
    interval();
},1000);



