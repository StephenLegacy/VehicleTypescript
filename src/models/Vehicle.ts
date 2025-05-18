export class Car {
    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {}

    start(): void {
        console.log(`${this.make} ${this.model} engine started`);
    }
}