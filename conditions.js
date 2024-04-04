function manipulateArray(numbers){
    
    const firstFourItems = numbers.slice(0,4)
    const a =firstFourItems.map(element =>element*element)
    console.log(a)

    const numbersBetween = numbers.slice(4,-2)
    

    const lastNumbers = numbers.slice(-2)
    const c = lastNumbers.map(element => element + 10)
    console.log(c)


   const newArray = a.concat(numbersBetween).concat(c)
   console.log(newArray)


    
    

}


manipulateArray([1,2,3,4,5,6,7,8])



function program(arrNum){
    while(arrNum.slice(0,3),arrNum.slice(5)){
        console.log(arrNum)
    

    if(arrNum[4]){
        break;
    }

}
}

program([1,2,3,4,5,6,7,8,9])


function myStrings(fruits){
    for (let i = 0; i < fruits.length; i++) {
        if(i==2){
            continue;
        }
        console.log(fruits[i]);
        
        
    }



      

}



myStrings(["apple","plum","banana","strawberries","kiwi"])


function myArray(names){
    for(let i=0;i<names.length;i++){
       console.log(names[i])
    }


}

console.log(myArray(["Aisha","Ramla","Bajia","Chakula"]))


function doReverse(word){
    
    const splitedWord = console.log(word.split(""))
    for (let i = 0; i < splitedWord.length; i++) { 
        while (i<5) {
            console.log(splitedWord.reverse)
            
            
        }

        
        
    }

   
}
doReverse("Rahma")


    

    
    



