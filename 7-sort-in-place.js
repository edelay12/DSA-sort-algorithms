/*
7. Sort in place
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
*/
let input = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
input.split(' ')

function shuffle(arr){
    let length = arr.length;
    this.random = () => {return Math.floor(Math.random() * length)};
    console.log(this.random())
    console.log(this.random())

    let numOfShuffles = 150;
    console.log(arr);
    while(numOfShuffles > 0){
        let ran = this.random();
        let ran2 = this.random();
        let tmp = arr[ran];

        arr[ran] = arr[ran2];
        arr[ran2] = tmp;
        numOfShuffles--;
    }
    console.log(arr);
}

shuffle(input);