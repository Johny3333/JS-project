const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function calculateAge(){
    let todayDate = new Date();
    let inputDate = new Date(document.getElementById("date-inp").value);
    let totalMonth,totalDate,totalYear;

    let birthDate = inputDate.getDate();
    let birthMonth = inputDate.getMonth()+1;
    let birthYear = inputDate.getFullYear();

    let currentYear = todayDate.getFullYear();
    let currentMonth = todayDate.getMonth()+1;
    let currentDate = todayDate.getDate();

    leapChecker(currentYear);

    if(
        birthYear > currentYear ||
        ( birthMonth > currentMonth && birthYear == currentYear) || 
        (birthDate > currentDate && birthMonth == currentMonth && birthYear == currentYear)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    totalYear = currentYear - birthYear;

    if(currentMonth >= birthMonth){
        totalMonth = currentMonth - birthMonth;
    }
    else{
      totalYear--;
        totalMonth = 12 + currentMonth - birthMonth;
    }

    if(currentDate >= birthDate){
      totalDate = currentDate - birthDate;
    }
    else{
        totalMonth--;
        let days = months[currentMonth - 2];
        totalDate = days + currentDate - birthDate;
        if(totalMonth < 0){
            totalMonth = 11;
            totalYear--;
        }
    }
    displayResult(totalDate,totalMonth,totalYear);
}

function displayResult(tDate,tMonth,tYear){
    document.getElementById("year").textContent = tYear;
    document.getElementById("month").textContent = tMonth;
    document.getElementById("day").textContent = tDate;
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}
