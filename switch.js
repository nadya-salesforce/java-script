/* . Give grades to students according to theirs scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score = 99;
switch(true)
{
case ((score>= 0) && (score<= 49)):

console.log("The grade is F");

break;
case ((score>= 50) && (score<=59 )):

console.log("The grade is D");

break;
case ((score>= 60) && (score <= 69)):

console.log("The grade is C");

break;
case ((score>= 70) && (score<= 89)):

console.log("The grade is B");

break;

case ((score>=90)&&(score<=100)):

console.log("the grade is A");

break;