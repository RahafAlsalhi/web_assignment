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