function check() {
    const bundeslandInfoElem = document.querySelector('#bundeslandInfo') as HTMLInputElement;
    let bundeslandInfo: string = bundeslandInfoElem.value;
    let res: string = "";

    if (bundeslandInfo.length >= 4) {
        let bundeslandInfoShort: string = bundeslandInfo.substring(0, 4).indexOf("sachen-A") > -1 ?
            "sach-a" : bundeslandInfo.substring(0, 4).toLowerCase();
        console.log({ bundeslandInfoShort, bundeslandInfo });

        switch (bundeslandInfoShort) {
            case "bade":
                res = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
                break;
            case "baye":
                res = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"; break;
            case "berl":
                res = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"; break;
            case "bran":
                res = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"; break;
            case "brem":
                res = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"; break;
            case "hamb":
                res = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"; break;
            case "hess":
                res = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"; break;
            case "meck":
                res = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"; break;
            case "nied":
                res = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"; break;
            case "nord":
                res = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"; break;
            case "rhei":
                res = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"; break;
            case "saar":
                res = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"; break;
            case "sach":
                res = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"; break;
            case "sach-a":
                res = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"; break;
            case "schl":
                res = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"; break;
            case "thür":
                res = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"; break;
            default:
                res = "Ein solches Bundesland gibt es in Deutschland nicht.";
        }
    }

    let bundeslandInfoErgebnis = document.querySelector('#bundeslandInfoErgebnis') as HTMLElement;
    if (bundeslandInfoErgebnis) {
        bundeslandInfoErgebnis.innerHTML = res;
    }

}

const bundeslandInfo = document.querySelector('#bundeslandInfo') as HTMLInputElement;
if (bundeslandInfo) {
    bundeslandInfo.addEventListener('change', e => {
        e.preventDefault();
        check();
    });
}

const checkBtn = document.querySelector('#checkBtn') as HTMLInputElement;
if (checkBtn) {
    checkBtn.addEventListener('click', e => {
        e.preventDefault();
        check();
    });
}

