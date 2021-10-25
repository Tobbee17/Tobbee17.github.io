var gratis = 0<=3;
var barn = 4<=15;
var gammel = 67;

var alder = Number(prompt("Hvor gammel er du"));

if (alder == gratis && alder < 3) {
    console.log("Du kan kjøre gratis");
} 
else if (alder < barn) {
    console.log("Du får 50% rabbat siden du er mellom 4-15 år");
}
else if (alder >= gammel) {
    console.log("Du får 50% rabbat siden du er eldre en 67");
}