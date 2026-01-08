// script.js
const passwordOutput = document.getElementById("passwordOutput");
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");
const copyBtn = document.getElementById("copyBtn");
const strengthInfo = document.getElementById("Keamananpassword");


const lowercaseCb = document.getElementById("lowercaseCb");
const uppercaseCb = document.getElementById("uppercaseCb");
const digitsCb = document.getElementById("digitsCb");
const specialsCb = document.getElementById("specialsCb");

const generateBtn = document.querySelector(".generate");

function generate() {
    let dictionary = "";

    if (lowercaseCb.checked) {
        dictionary += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercaseCb.checked) {
        dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (digitsCb.checked) {
        dictionary += "0123456789";
    }
    if (specialsCb.checked) {
        dictionary += "!@#$%^&*()_+-={}[];<>:";
    }

    const length = Number(lengthRange.value);

    if (dictionary.length === 0) {
        passwordOutput.value = "";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * dictionary.length);
        password += dictionary.charAt(randomIndex);
    }

    passwordOutput.value = password;

const strength = kekuatanPassword(password);
strengthInfo.textContent = `Strength: ${strength}`;

}

// tombol generate
generateBtn.addEventListener("click", generate);

// checkbox auto-generate
[lowercaseCb, uppercaseCb, digitsCb, specialsCb].forEach(cb => {
    cb.addEventListener("change", generate);
});

// slider
lengthRange.addEventListener("input", () => {
    lengthValue.textContent = lengthRange.value;
    generate();
});

// copy password
copyBtn.addEventListener("click", () => {
    if (!passwordOutput.value) return;

    navigator.clipboard.writeText(passwordOutput.value);
    copyBtn.textContent = "copied!";
    setTimeout(() => {
        copyBtn.textContent = "copy";
    }, 1000);
});

// info kekuatan password 
function kekuatanPassword(password){
if(password.length >= 4 && password.length <= 6){
    return("Password is weak");
}
if(password.length >= 7 && password.length <= 10){
    return("Password is moderate");
}
if(password.length > 10){
    return("Password is strong");
}
}
    

// generate pertama kali
generate();
