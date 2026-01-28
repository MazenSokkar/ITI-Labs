// iterators => do iteration process on a collection like strings and array
// but its more controlable because we decide the iteration moves and how
// the iterator doesn't iterate on every value in the collection until we call the next() in it.
// iterator is an object havee a method called next()
// every next() call should return an object with two properties => 
    // 1- value => The next value in the iteration sequence.
    // 2- done => its a boolean true or false, false if the sequence still have values and true when there are no values left.
// difference between iterators and arrays => 
    // all array is fully stored in the memory even if the iteration on it skips alot of values
    // iterator doesn't store in memory it create the object only when its called by next() and after the iterator is done == true. if weee neeed it again it have to re excute again from the start.

console.log("Iterators------------------------------------------------------------------------------------------------")

function printRangeIterator(start = 0, end = Infinity, step = 1){
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next () {
            let result;
            if(nextIndex <= end){
                result = { value: nextIndex, done: false};
                nextIndex +=step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true};
        }
    }
    
    return rangeIterator;
}

let iter = printRangeIterator(1,20,5);

let result = iter.next();
while(!result.done) {
    console.log(result.value);
    result = iter.next();
}

console.log(`iteration count : ${result.value}`)

function createToDoIterator(tasks){
    let index = 0;
    let iterationCount = 0;

    const iterator = {
        next() {
            while(index < tasks.length && tasks[index].completed){
                index++;
            }
            let result;
            if(index < tasks.length){
                result = {value: tasks[index], done: false};
                index ++;
                iterationCount++;
                return result;
            }
            return {value: iterationCount, done : true }
        }
    }

    return iterator;
}

let tasks = [
    {name: "task1", completed: true},
    {name: "task2", completed: true},
    {name: "task3", completed: false},
    {name: "task4", completed: true},
    {name: "task5", completed: false},
    {name: "task6", completed: false},
    {name: "task7", completed: false},
    {name: "task8", completed: true},
]

let iterTasks = createToDoIterator(tasks);
let resultTask = iterTasks.next();
while(!resultTask.done){
    console.log(resultTask.value);
    resultTask = iterTasks.next();
}
console.log(`iteration count : ${resultTask.value}`)

console.log("Generators------------------------------------------------------------------------------------------------")

// the iterator problem is complexity, we have to be more careful while implementing it because we are writing its internal state\
// because of this problem generator function was found as alternative way to implement iterative algorithm
// generator function are written using function* 
// difference between functions and generator functions
    // the normal function once called it excute all the code inside it
    // generator function once called its not excuting its code but returns an object of generator and when i need the code to wxcute we call generator.next()
        // when calling generator.next() it doesn't excute all the code inside it but excuting the code till it find the yeild keyword
        // the return of the next is an object with two properties:
            // 1- value => the value that is written after yield.
            // 2- done => false if the return from yield, true if the function is ended or the return from the function return keyword.
        
// print range example with function generator =>

function* printRangeGenerator(start = 0, end = Infinity, step = 1){
    let iterationCount = 0;
    for (let index = start; index <= end; index+=step) {
        iterationCount++;
        yield index;
    }
}

let rangeGenerator = printRangeGenerator(5,50,5);
let rangeIteration = rangeGenerator.next();
while(!rangeIteration.done){
    console.log(rangeIteration.value);
    rangeIteration = rangeGenerator.next();
}

// create to do example with generator => 
function* createToDoGenerator(tasks){
    let iterationCount = 0;

    for (let task of tasks) {
        if (!task.completed) {
            iterationCount++;
            yield task;
        }
    }

    return iterationCount;
}

let toDoGenerator = createToDoGenerator(tasks);
let todoiteration = toDoGenerator.next();
while (!todoiteration.done) {
    console.log(todoiteration.value);
    todoiteration = toDoGenerator.next();
}