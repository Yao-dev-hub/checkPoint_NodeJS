// 1- Création du programme permettant d' afficher hello world
// const salutation = () => {
//     console.log("Hello World")
// }

// salutation()


// 2- Création d'un serveur

//importons le module http
const http = require("http")

http.createServer((req,res)=>{

    res.end('<h1>Hello Node !!!!</h1>')

}).listen(3000,() => console.log("serveur lancé sur le port 3000"))

// 3- Dans un premier temps, demander au système de fichiers de créer un fichier nommé "welcome.txt" contenant une ligne "Hello Node"

const fs = require("fs")

fs.writeFile("welcome.txt","Hello Node",(er,data) =>{
    if (er) {
        console.log(er)
    }
})

//Dans un deuxième temps, créer un programme qui lit et console.log les données de hello.txt
fs.readFile("welcome.txt",(er,data)=>{
    if (er) {
        console.log(er)
    } else {
        console.log(data.toString())
    }
})

