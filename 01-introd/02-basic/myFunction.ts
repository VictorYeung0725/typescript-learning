function addTwo(num: number): number {
  // num.toUppercase();
  // return num + '2';
  return num + 2;
  // return 'hello world';
}

addTwo(5);
console.log(addTwo(5));

function getUpper(val: string) {
  // return val.toUppercase();
}

// getUpper(5);
// console.log(getUpper(4));

function signupUser(name: string, email: string, password: string) {}

signupUser('1', '2', '3');

const loginUser = (
  name: string,
  password: string,
  isLoggedIn: boolean = false
) => {};

loginUser('1', 'h@h');

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return '200 Ok';
}

const getHello = (s: string): string => {
  return 'helloworld';
};

// const heros = ['thor', 'iconMan', 'spiderman'];
const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
  // return 1;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
  // return 1;
}
function handleError(errmsg: string): void {
  throw new Error(errmsg);
  // return 1;
}

export {};
