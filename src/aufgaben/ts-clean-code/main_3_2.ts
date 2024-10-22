function calcTax(event: Event): void {
    event.preventDefault();

    const bruttoInput = document.getElementById("bruttoInput") as HTMLInputElement
    const steuerKlasseInput = document.getElementById("steuerKlasseInput") as HTMLInputElement
    const output = document.getElementById('output') as HTMLElement

    const brutto = Number(bruttoInput.value)
    const steuerKlasse = Number(steuerKlasseInput.value)

    let nettoGehalt = 0;
    switch (steuerKlasse) {
        case 1: nettoGehalt = brutto * 0.7; break;
        case 2:
        case 6: nettoGehalt = brutto * 0.75; break;
        case 3: nettoGehalt = brutto * 0.8; break;
        case 4: nettoGehalt = brutto * 0.9; break;
        case 5: nettoGehalt = brutto * 0.95; break;
    }

    output.innerText = `Nettogehalt: ${nettoGehalt.toFixed(2)} €`;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form?.addEventListener('submit', calcTax);
});