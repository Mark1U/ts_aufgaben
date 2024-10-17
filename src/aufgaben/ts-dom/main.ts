// console.log(`%c DOM Intro`, "background: red;clor: gray;");

// const elem = document.querySelector("#hereWeCreateElements");

// const headline2 = document.createElement("h2");
// headline2.textContent = "Welcome to Paradise"

// const anchor = document.createElement("a")
// anchor.href = "https://www.google.de"
// anchor.textContent = "Visit Paradise"
// anchor.target = "_blank"

// elem?.appendChild(headline2);
// elem?.appendChild(anchor);


console.clear;

console.log(`%c DOM 1_1`, "background: red;clor: gray;");

const myList = document.querySelector("#myList") as HTMLElement
const btn1 = document.querySelector("button") as HTMLButtonElement

btn1.addEventListener('click', () => {
    const inputText = document.querySelector("#inputText") as HTMLInputElement
    const item = document.createElement("p")
    item.innerText = inputText.value ? inputText.value.trim() : "-"
    inputText.textContent = "";
    if (item.innerText) {
        myList.appendChild(item);
    }
})



console.log(`%c DOM 1_2`, "background: red;clor: gray;");


const btn2 = document.querySelector(".style button") as HTMLElement
btn2.addEventListener('click', () => {
    console.log("click");

    const styleElem = document.querySelector(".style")
    console.log({ styleElem });

    if (styleElem?.children) {
        for (let i = 0; i < styleElem?.children.length - 1; i++) {
            const elem = styleElem?.children[i] as HTMLElement;
            elem.style.backgroundColor = "tomato";
        }
    }
})




console.log(`%c DOM 1_9`, "background: red;clor: gray;");

const btn3 = document.querySelector("#btn3") as HTMLButtonElement

btn3.addEventListener('click', () => {
    const selFarben = document.querySelector("#farbeAuswahlen") as HTMLSelectElement

    if (selFarben) {
        const idx = selFarben.selectedIndex
        selFarben[idx].remove()
    }
})

// console.log(`%c DOM 2_1`, "background: red;clor: gray;");

const navChangeBtn = document.querySelector("#navChange") as HTMLButtonElement
navChangeBtn.addEventListener('click', () => {
    const homeNav = document.querySelector("#listContainer li a") as HTMLAnchorElement
    homeNav.innerText = homeNav.innerText.split("").reverse().join("");
})

console.log(`%c DOM 2_2`, "background: red;clor: gray;");

type SimplePerson = {
    vorname: string,
    nachname: string,
    land: string,
}

const submitBtn = document.querySelector("input[type='submit']") as HTMLInputElement

submitBtn.addEventListener('click', (e) => {
    e.preventDefault
    const vorname = document.querySelector("#vorname") as HTMLInputElement
    const nachname = document.querySelector("#nachname") as HTMLInputElement
    const land = document.querySelector("#land") as HTMLSelectElement

    const landValue = (land[land.selectedIndex] as HTMLOptionElement).value
    const simplePerson: SimplePerson = {
        vorname: vorname.value,
        nachname: nachname.value,
        land: landValue,
    };
    console.log(simplePerson);
})

console.log(`%c DOM 2_6`, "background: red;clor: gray;");

type Picture = { id: string; author: string; width: number; height: number; url: string; download_url: string };
let data: Picture[] = [
    {
        id: '0',
        author: 'Alejandro Escamilla',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        download_url: 'https://picsum.photos/id/0/200/200'
    },
    {
        id: '1',
        author: 'Alejandro Escamilla',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/LNRyGwIJr5c',
        download_url: 'https://picsum.photos/id/1/200/200'
    },
    {
        id: '10',
        author: 'Paul Jarvis',
        width: 2500,
        height: 1667,
        url: 'https://unsplash.com/photos/6J--NXulQCs',
        download_url: 'https://picsum.photos/id/10/200/200'
    },
    {
        id: '100',
        author: 'Tina Rataj',
        width: 2500,
        height: 1656,
        url: 'https://unsplash.com/photos/pwaaqfoMibI',
        download_url: 'https://picsum.photos/id/100/200/200'
    },
    {
        id: '1002',
        author: 'NASA',
        width: 4312,
        height: 2868,
        url: 'https://unsplash.com/photos/6-jTZysYY_U',
        download_url: 'https://picsum.photos/id/1002/200/200'
    },
    {
        id: '1003',
        author: 'E+N Photographies',
        width: 1181,
        height: 1772,
        url: 'https://unsplash.com/photos/GYumuBnTqKc',
        download_url: 'https://picsum.photos/id/1003/200/200'
    },
    {
        id: '1004',
        author: 'Greg Rakozy',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/SSxIGsySh8o',
        download_url: 'https://picsum.photos/id/1004/200/200'
    },
    {
        id: '1005',
        author: 'Matthew Wiebe',
        width: 5760,
        height: 3840,
        url: 'https://unsplash.com/photos/tBtuxtLvAZs',
        download_url: 'https://picsum.photos/id/1005/200/200'
    },
    {
        id: '1006',
        author: 'Vladimir Kudinov',
        width: 3000,
        height: 2000,
        url: 'https://unsplash.com/photos/-wWRHIUklxM',
        download_url: 'https://picsum.photos/id/1006/200/200'
    },
    {
        id: '1009',
        author: 'Christopher Campbell',
        width: 5000,
        height: 7502,
        url: 'https://unsplash.com/photos/CMWRIzyMKZk',
        download_url: 'https://picsum.photos/id/1009/200/200'
    },
    {
        id: '101',
        author: 'Christian Bardenhorst',
        width: 2621,
        height: 1747,
        url: 'https://unsplash.com/photos/8lMhzUjD1Wk',
        download_url: 'https://picsum.photos/id/101/200/200'
    },
    {
        id: '1010',
        author: 'Samantha Sophia',
        width: 5184,
        height: 3456,
        url: 'https://unsplash.com/photos/NaWKMlp3tVs',
        download_url: 'https://picsum.photos/id/1010/200/200'
    },
    {
        id: '1011',
        author: 'Roberto Nickson',
        width: 5472,
        height: 3648,
        url: 'https://unsplash.com/photos/7BjmDICVloE',
        download_url: 'https://picsum.photos/id/1011/200/200'
    },
    {
        id: '1012',
        author: 'Scott Webb',
        width: 3973,
        height: 2639,
        url: 'https://unsplash.com/photos/uAgLGG1WBd4',
        download_url: 'https://picsum.photos/id/1012/200/200'
    },
    {
        id: '1013',
        author: 'Cayton Heath',
        width: 4256,
        height: 2832,
        url: 'https://unsplash.com/photos/D8LcRLwZyPs',
        download_url: 'https://picsum.photos/id/1013/200/200'
    },
    {
        id: '1014',
        author: 'Oscar Keys',
        width: 6016,
        height: 4000,
        url: 'https://unsplash.com/photos/AmPRUnRb6N0',
        download_url: 'https://picsum.photos/id/1014/200/200'
    },
    {
        id: '1015',
        author: 'Alexey Topolyanskiy',
        width: 6000,
        height: 4000,
        url: 'https://unsplash.com/photos/-oWyJoSqBRM',
        download_url: 'https://picsum.photos/id/1015/200/200'
    },
    {
        id: '1016',
        author: 'Philippe Wuyts',
        width: 3844,
        height: 2563,
        url: 'https://unsplash.com/photos/_h7aBovKia4',
        download_url: 'https://picsum.photos/id/1016/200/200'
    },
    {
        id: '1018',
        author: 'Andrew Ridley',
        width: 3914,
        height: 2935,
        url: 'https://unsplash.com/photos/Kt5hRENuotI',
        download_url: 'https://picsum.photos/id/1018/200/200'
    },
    {
        id: '1019',
        author: 'Patrick Fore',
        width: 5472,
        height: 3648,
        url: 'https://unsplash.com/photos/V6s1cmE39XM',
        download_url: 'https://picsum.photos/id/1019/200/200'
    },
    {
        id: '102',
        author: 'Ben Moore',
        width: 4320,
        height: 3240,
        url: 'https://unsplash.com/photos/pJILiyPdrXI',
        download_url: 'https://picsum.photos/id/102/200/200'
    },
    {
        id: '1020',
        author: 'Adam Willoughby-Knox',
        width: 4288,
        height: 2848,
        url: 'https://unsplash.com/photos/_snqARKTgoc',
        download_url: 'https://picsum.photos/id/1020/200/200'
    },
    {
        id: '1021',
        author: 'Frances Gunn',
        width: 2048,
        height: 1206,
        url: 'https://unsplash.com/photos/8BmNurlVR6M',
        download_url: 'https://picsum.photos/id/1021/200/200'
    },
    {
        id: '1022',
        author: 'Vashishtha Jogi',
        width: 6000,
        height: 3376,
        url: 'https://unsplash.com/photos/bClr95glx6k',
        download_url: 'https://picsum.photos/id/1022/200/200'
    },
    {
        id: '1023',
        author: 'William Hook',
        width: 3955,
        height: 2094,
        url: 'https://unsplash.com/photos/93Ep1dhTd2s',
        download_url: 'https://picsum.photos/id/1023/200/200'
    },
    {
        id: '1025',
        author: 'Matthew Wiebe',
        width: 4951,
        height: 3301,
        url: 'https://unsplash.com/photos/U5rMrSI7Pn4',
        download_url: 'https://picsum.photos/id/1025/200/200'
    }
];

const output = document.querySelector("#output") as HTMLElement
const rndBtn = document.querySelector("#rndBtn") as HTMLElement

rndBtn.addEventListener('click', () => {
    const img = document.createElement("img");


    const rndIdx = Math.floor(Math.random() * data.length)
    img.src = data[rndIdx].download_url
    img.style.width = "50px";
    img.style.height = "50px";

    if (output.hasChildNodes()) {
        output.firstChild?.remove()
    }

    output.appendChild(img);
})
