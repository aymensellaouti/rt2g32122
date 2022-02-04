name = 'aymen';
name = "aymen";
message = `
    Bonjour ${name}
    <h1>CC RT2 </h1>
`;
console.log(message + message.length);
position = 0;
sousChaine = 'n';
while((pos = message.indexOf(sousChaine, position)) != -1) {
    console.log(pos);
    position = pos + sousChaine.length;
}
