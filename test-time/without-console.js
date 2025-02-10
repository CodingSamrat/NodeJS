const startTime = performance.now();

for (let i = 0; i < 20000; i++) {
    // No console.log here
    console.log(i);

}

const endTime = performance.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time without logging: ${elapsedTime} ms`);
