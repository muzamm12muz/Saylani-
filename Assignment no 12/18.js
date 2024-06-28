//20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%
//Gross Salary = Basic Salary + HRA + DA

var salary = 20000;
 if(salary <= 10000 ){
    var hra = salary *0.2;
    var da = salary *0.8;
    var grossSalary = salary + hra + da;
    console.log("Gross Salary is "+grossSalary);
 }
 else if(salary <= 20000){
    var hra = salary *0.25;
    var da = salary *0.9;
    var grossSalary = salary + hra + da;
    console.log("Gross Salary is "+grossSalary);
 }
 else{
    var hra = salary *0.3;
    var da = salary *0.95;
    var grossSalary = salary + hra + da;
    console.log("Gross Salary is "+grossSalary);
    }


