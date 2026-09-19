function generatepassword (length) {
const characters = "ASFDGYEYTDFERXVDTED34537643689/*/$%........."
let password ="";
for(let i =0; i< length;i++){
const randomIndex = Math.floor (Math.random() *characters.length);
password += characters[randomIndex];
}
return password;
}
const newPassword = generatepassword(12);
console.log(`generated password :${newPassword}`)  
