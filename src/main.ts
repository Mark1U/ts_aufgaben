import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './_counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="./src/lesson/intro.html">
//    Intro TS
//     </a>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

let res = window?.location?.href?.match("/aufgaben/([^/]*)/");
let aufgabe = (res && res?.length > 1) ? res[1] : "---";

let h1Elem = document.querySelector<HTMLButtonElement>('h1');
if (h1Elem) {
    h1Elem.innerHTML = "Aufgabe: " + aufgabe;
}