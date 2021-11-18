
function reverse(arr) {
    var inc = 0;
    for(i=arr.length - 1; i>arr.length/2; i--){
        var hold = 0;
        hold = arr[i];
        arr[i] = arr[inc];
        arr[inc] = hold;
        inc++;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 
