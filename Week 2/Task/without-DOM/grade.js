function grade(indonesia, inggris, mtk, ipa) {
    let total = indonesia + inggris + mtk + ipa;
    let average = total / arguments.length;

        if(average > 100) {
            return` average score is exceeds the maximum limit`
        }
        else if(average <= 100 && average >= 90) {
            return ` average score is ${average} \n Grade A\n`;

        } else if (average < 90 && average >=80) {
            return ` average score is ${average} \n Grade B\n`
        }

        else if (average < 80 && average >=70) {
            return ` average score is ${average} \n Grade C\n`
        }

        else if (average < 70 && average >=60) {
            return ` average score is ${average} \n Grade D\n`
        }

        else if (average < 60) {
            return ` average score is ${average} \n Grade E\n`
        }

        else return ` all score's must be filled correctly`
        
}


console.log(grade(90,90,90,90))
console.log(grade(80,80,80,80))
console.log(grade(70,70,70,70))
console.log(grade(60,60,60,60))
console.log(grade(50,50,50,50))