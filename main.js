//Satr berilgan bo'lsa, birinchi va oxirgi belgilar almashtirilgan yangi qatorni qaytaring

let str="hello";
const firstChar = str[0];
const lastChar = str[str.length - 1];


const newStr = lastChar + str.slice(1, -1) + firstChar;
    console.log(newStr);
newStr;
  
  
 //Satrning boshidagi 3 belgisini 3 martaqaytaring
let str1="java";
const newStr1= str1.slice(0, 3) + str1.slice(0, 3) + str1.slice(0, 3);
    console.log(newStr1);


//Satr berilgan. oxirgi belgini olib boshi va oxiriga qo'shib qo'ying
 
let str2="java";

let str3=str2[str2.length-1]
const newStr3= str3 + str2 + str3;
    console.log(newStr3);

//berilgan son 3 yoki 5 ga karrali bo'lsa true aks holda false qaytarsin

let n=19;

if(n%3==0 || n%5==0){
    console.log(true);
}else{
    console.log(false);
}

//satrberilgan. boshidagi 2 ta belgini oling va satrning boshi va oxiriga qo'shing

let str4="java";

let str5=str4.slice(0,2);
const newStr6= str5 + str4 + str5;
    console.log(newStr6);
