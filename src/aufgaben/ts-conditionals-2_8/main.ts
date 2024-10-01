let schoolGrade = Math.floor(Math.random() * 10) + 1;

let res: string;

// (1 = ‘sehr gut’, 2 = ‘gut’, 3 = ‘befriedigend’, 4 = ‘ausreichend’, 5 = ‘mangelhaft’, 6 = ‘ungenügend’)
switch (schoolGrade) {
    case 1: res = "sehr gut"; break;
    case 2: res = "gut"; break;
    case 3: res = "befriedigend"; break;
    case 4: res = "ausreichend"; break;
    case 5: res = "mangelhaft"; break;
    case 6: res = "ungenügend"; break;
    default: res = "Das ist keine gültige Schulnote.";
}

console.log({ schoolGrade, res });
