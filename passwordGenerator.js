function generatePassword(length = 12){
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbol = '!@#$%^&*()_+{}[]|';

    const allChars = lowercase + uppercase + numbers + symbol;

    let password = '';
    for(let i = 0; i < length; i++){
        // const randomIndex = math.floor(Math.random() * allChars.length);
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
        return password;

}

console.log('password generator');
for (let i = 0; i < 5; i++){
    console.log(`${i+1}. ${generatePassword()}`);
}

console.log("=================================");
