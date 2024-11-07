import { differenceInYears } from "date-fns";

console.log(new Date("September 2, 2019 09:00:00"));
console.log(new Date(0));
console.log(new Date(31556908800));
console.log(new Date(86400000));

const bd = new Date("1978-19-10")
const diff = differenceInYears(new Date(), new Date(0))

console.log(diff);

const d = new Date("2007-07-04")
const diff2 = differenceInYears(d, bd)

console.log(diff2);
