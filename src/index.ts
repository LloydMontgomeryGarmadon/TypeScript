// Types
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// The any Type
let level;
level = 1;
level = 'a';

// Compilation error, cuz parameter implicitly has an "any" type
// function render(document) {
//     console.log(document);
// }

// Fix, we have to use a type - or turn off "noImplicitAny" option in tsconfig.json
function render(document: any) {
    console.log(document);
}

// Arrays
let numbers: number[] = [1, 2, 3];

// Tuples
let user: [number, string] = [1, "Mosh"];

// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// enum Size { Small = 1, Medium = 2, Large = 3 };
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000)

// Objects
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);
    } 
};

// Intersection Types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal Types (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// Nullable Types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hi!");
}

greet(undefined);

// Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customer !== null && customer !== undefined)
    // customer[0]
    // customer?.[0]

// Optional call
let log: any = null;
log?.('a');