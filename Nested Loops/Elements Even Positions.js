function elementsAtEvenPositions(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}


elementsAtEvenPositions(['a', 'b', 'c', 'd', 'e']);  
elementsAtEvenPositions(['one', 'two', 'three', 'four', 'five']); 
