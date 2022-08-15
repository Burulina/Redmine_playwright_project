 
function randomStr(length) {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for(let i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
    
function getEmailEnd() {   
    const endings = ["ukr.net", "outlook.com", "yahoo.com", "gmail.com"];
    return "@" + endings[rand(0, endings.length - 1)];
}
    
function rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0;
}

export {randomStr, getEmailEnd, rand};