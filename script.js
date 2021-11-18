function alwaysHungry(arr) {
    for(i=0; i<arr.length;i++){
        if(arr[i] == "food")
        console.log("yummy")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);

function alwaysHungry(arr) {
    var count = 0;
    for(i=0; i<arr.length;i++){
        if(arr[i] == "food"){
        count += 1;
        console.log("yummy");
        }
    }
    if(count === 0){
        console.log("I'm Hungry");
}
}

alwaysHungry([4, 1, 5, 7, 2]);

