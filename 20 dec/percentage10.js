var Percentage = 76;
function CalculateGrade(Percentage) {
    if (Percentage > 81 && Percentage <= 100) {
        console.log("A Grade");
    }
    else if (Percentage > 71 && Percentage <= 80) {
        console.log("B Grade");
    }
    else if (Percentage > 61 && Percentage <= 70) {
        console.log(" C Grade");
    }
    else if (Percentage > 40 && Percentage <= 60) {
        console.log("D Grade");
    }
    else if (Percentage > 33 && Percentage <= 39) {
        console.log("E Grade");
    }
    else {
        console.log("Fail");
    }
   
}