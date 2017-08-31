//Function declarations
function retire(age){
    let (ageS=2017); //set current year
    let (retirementAge=65); //set current retirement age
    let (diff = retirementAge - age);

    if (diff > 0){
      console.log("Sorry kid, wait a while.")
    }
    if (diff = 0)
    {console.log("WELCOME TO RETIREMENT!!!!!!!!!!!!")
    }
    if (diff <0){
      console.log("The money is on it's way");
    }
}


//main function tests your code above with different inputs.
function main(){
    retire(18);
    retire(50);
    retire(65);
    retire(100); //Hundo!

}




// ctrl + shift + B
//This will run the program.
main();
