function betterThanAverage(arr) {
    var avg = 0;
    for(i=0; i<arr.length; i++){
    avg += arr[i];
    }
    avg = avg / arr.length;
    var count = 0
    for(i=0; i<arr.length; i++){
        if(arr[i] > avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
