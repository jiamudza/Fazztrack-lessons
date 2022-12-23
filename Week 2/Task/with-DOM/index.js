

//  data type 
 let name = "Ajimas Bagus Kurniawan";
 let age = 21;
 let hobbies = ["coding", "fishing", "reading"]
 let schoolList = [
    {
        name : "Aji",
        yearIn : 2022,
        yearOut : 2024,
        major : "Informatika"
    },

    {
        name : "Dimas",
        yearIn : 2021,
        yearOut : 2023,
        major : "Informatika"
    }
 ]

 let skills = [
    {
        skillName : "Javascript",
        level : "Beginner"
    },

    {
        skillName : "HTML",
        level : "Expert"
    },

    {
        skillName : "CSS",
        level : "Advance"
    },
 ];

 let interstInCoding = true;
 

//  task 3

function grade(indonesia, inggris, matematika, ipa) {
    let total = indonesia + inggris + matematika + ipa;
    let average = total / arguments.length;

    if(typeof average !== "number") {
        return `input is not a number`
    } else {
        if(average >= 90) {
            return "A";
        } else if (average < 90 && total >=80) {
            return "B"
        }

        else if (average < 80 && total >=70) {
            return "C"
        }

        else if (average < 70 && total >=60) {
            return "D"
        }

        else if (average < 60) {
            return "E"
        }
        
    }
}

// replace

function consonan(text) {

    if(typeof text !== "string") {
        return `${text} is not a string`
    } else {
        let consonanChange = text.replace(/a/g, "o");
        return consonanChange;
    }
}


                 

