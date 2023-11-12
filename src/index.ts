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