let text ="JavaScript";
let v=0;
for (let i=0 ; i<text.length;i++){
    if (text[i]==='a' || text[i]==='A'|| text[i]==='U' || text[i]==='u' || text[i]==='e' ||text[i]==='E' || text[i]==='i' || text[i]==='I' ||text[i]==='o' ||text[i]==='O')
               v++;
     
}
console.log(v);

let arr=[1, 4, 7, 10];
console.log(arr.map(x => { if (x%2===0)return "even"; else return "odd";}));

let str="I love JavaScript programming";
let result = str.split(" ");
console.log(result);
console.log(result.reduce((x, i) => {
    return i.length > x.length ? i : x;
  }));

function check(num){
    if (num%5===0 && num%3===0)
        return "FizzBuzz";
    else if (num%5===0)
        return "Buzz";
    else if (num%3===0)
        return "Fizz";
    else 
        return "can not devide ";
}
console.log(check(15));


let arr2= [10, 5, 20, 8, 12];
function findSecond(arr2){
let maxnum=0;
let l =0;
for (let i=0 ; i<arr2.length;i++){
    if (arr2[i]>maxnum)
       { l=maxnum;
        maxnum=arr2[i];}
        else if (arr2[i]>l && arr2[i] !== maxnum)
        {  l=arr2[i];}
}
return l;}
console.log(findSecond(arr2));


let arr3=[1, [2, [3, 4], 5], 6];
