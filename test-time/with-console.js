async function run(params) {


}


const startTime = Date.now();
for (let i = 0; i < 20000; i++) {
    console.log(i);
}
const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);
