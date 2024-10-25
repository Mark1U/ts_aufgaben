import SchoolClass from "./classes/School";

const sc1 = new SchoolClass(1, "Mathe");
const sc2 = new SchoolClass(2, "Deutsch");
const sc3 = new SchoolClass(3, "Englisch");

// Nachträglich den Namen bei zwei SchoolClasses ändern
sc1._name = "Informatik";
sc2._name = "Sport";

console.log(sc1, sc2, sc3);