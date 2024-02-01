let counter = 0;

function counterFunction(){
    counter++;
    counterFunction()
}

try {
    counterFunction()
} catch (error) {
    console.error(error)
    console.log(counter)
}

console.log("This is still running after crashing")