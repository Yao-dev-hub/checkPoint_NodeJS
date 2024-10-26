//4 -Créer un fichier nommé "password-generator" (use npm install generate-password : (https://www.npmjs.com/package/generate-password) 


//Créer une fonction qui génère des mots de passe aléatoires et console.log() ce mot de passe.

// const passwordGenerated = () => {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
//     let password = '';

//     for (let index = 0; index < 5; index++) {
//         const nombreAleatoire = Math.floor(Math.random()*charset.length)
//         password += charset[nombreAleatoire];
        
//     }
//     console.log(password)
// }

// passwordGenerated()

// Importaion du module de mot de passe

const generator = require("generate-password")

let password = generator.generate(
    {
        length:10,
        numnber :true

    }
)

console.log(password)