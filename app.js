let n = 0;
function interval() {
    const title = React.createElement("h1",null,"Bonjour, tous le monde !",
        React.createElement("span",null,n)
    );
    ReactDOM.render(title,document.getElementById('app'));
}

interval();

setInterval(()=>{
    n++;
    interval();
},1000);

