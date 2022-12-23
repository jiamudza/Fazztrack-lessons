function grade(indonesia, inggris, mtk, ipa) {
    indonesia = document.getElementById("ind").value;
    inggris = document.getElementById("ing").value;
    mtk = document.getElementById("mtk").value;
    ipa = document.getElementById("ipa").value;
    let grade = document.getElementById("average");
    let total = indonesia + inggris + mtk + ipa;
    let average = total / arguments.length;

    if(typeof average !== "number") {
        return grade.innerHTML = "Not a Number"
    } else {
        if(average >= 90) {
            return grade.innerHTML = "A";
        } else if (average < 90 && total >=80) {
            return grade.innerHTML = "B"
        }

        else if (average < 80 && total >=70) {
            return grade.innerHTML = "C"
        }

        else if (average < 70 && total >=60) {
            return grade.innerHTML = "D"
        }

        else if (average < 60) {
            return grade.innerHTML = "E"
        }
        else {
            return ``
        }
        
    }
}