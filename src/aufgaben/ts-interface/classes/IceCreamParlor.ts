import IIceCreamService from "../interface/IIceCreamService";

class IceCreamParlor implements IIceCreamService {
    private _flavors: Map<string, number>;
    private _order = new Map<string, number>();

    constructor() {
        this._flavors = new Map<string, number>([
            ["Vanilla", 1.5],
            ["Schokolade", 1.8],
            ["Erdbeere", 1.7]
        ]);
    }

    public listFlavors(): string[] {
        return Array.from(this._flavors.keys());
    }

    public orderIceCream(flavor: string, scoops: number): string {
        if (!this.isFlavorAvailable(flavor)) {
            return `Sorry, ${flavor} unavailable.`;
        }
        const price = this.getFlavorPrice(flavor) * scoops;

        this._order.set(flavor, scoops)

        return `Your order for ${scoops} scoops of ${flavor} is confirmed. Price: ${price.toFixed(2)} €.`;
    }

    public addNewFlavor(flavor: string, price: number = 2.0): void {
        if (!this._flavors.has(flavor)) {
            this._flavors.set(flavor, price);
        }
    }

    public removeFlavor(flavor: string): void {
        this._flavors.delete(flavor);
    }

    public isFlavorAvailable(flavor: string): boolean {
        return this._flavors.has(flavor);
    }

    public getFlavorPrice(flavor: string): number {
        return this._flavors.get(flavor) || 0;
    }
}

export default IceCreamParlor