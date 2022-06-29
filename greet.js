function greeting(name) {
  return `Hello ${name}`;
}

const here = process.argv[2];
console.log(greeting(here));
