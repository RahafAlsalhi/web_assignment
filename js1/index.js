function tweetLength(tweet){
    if(tweet.length >280) {return "exceeds the limit";}
    else{ return " accepted length";}
}
console.log (tweetLength("h;sahffffjkjdkklkllksa kjwdkjlkokopoklsklkj ijodkjkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjskkmskj kodokklsaklkldsklds ioskokoasklskldskl sdkjdskjdsjkdsjk kjsdkjdskjdskj"));

function userName (username){
    return (username.charAt(0).toUpperCase() + username.slice(1));
}
console.log(userName("rahaf"));

function emailFormat (email){
    return email.trim() ;

}
console.log(emailFormat("  rahaf.alsalhi@gmail.com "));

let str = "hello everyone and welcome ";
console.log(str.slice(6,str.length));

function maskPhone(phoneNumber){
    return "*".repeat(phoneNumber.length-4) + phoneNumber.substring(phoneNumber.length-4);
}
console.log(maskPhone("079577449911"));

function badWord(badword){
    return badword.replaceAll("badword", "****");
}
console.log(badWord("hdah badword jddjsn badword"));

let comment="new comment added";
console.log(comment.split(" "));

let fileName="text.jpg";
if(fileName.endsWith("jpg")){
    console.log("accepted");
}
else{
     console.log("not accepted");
}

let title1="Hello";
let title2=" world";
console.log(title1.concat(title2));

let word1="javascript world";
console.log(word1.indexOf('w'));

function factorial (num){
    let fact=1;
    for(let i =1 ; i<=num;i++){
  fact*=i;
    }
    return fact;
}
console.log(factorial(4));

let arr1=[1,2,3,4,5];
let result=arr1.map(x => x*3);
console.log(result);


let arr11=[1,1,2,2,3,3];
let result1=arr11.filter((value,index,arr)=> arr.indexOf(value)===index);
console.log(result1);


let arr12=[{age:40},{age:30},{age:50}];
arr12.sort((a, b) => a.age - b.age);
console.log(arr12);


let arr = [1, 5, 9, 6, 3, 87, 72, 23];
let largestNumber = arr => arr.reduce((max, current) => current > max ? current : max, arr[0]);
console.log(largestNumber(arr));

let arr2 = [1, 5, 9];
let reverseArray = arr => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArray(arr2));
  

let arr3 = [1, 5, 9, 6, 23, 87, 72, 3];
let target = 9;
let sum = (arr3, target) => {
  for (let i = 0; i < arr3.length; i++) {
    for (let j = i + 1; j < arr3.length; j++) {
      if (arr3[i] + arr3[j] === target) {
        return [arr3[i], arr3[j]]; 
      }
    }
  }
};
console.log(sum(arr, target));


