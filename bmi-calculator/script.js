document.querySelector("#form").addEventListener("Submit",()=>{
    event.preventDefault();
    let w=parseFloat(document.querySelector("#w").value);
    let h=parseFloat(document.querySelector("#h").value)/100; //cm to m
    let age=parseInt(document.querySelector("#age"));
    let bmi=(w / (h * h)).toFixed(2);
    let category="";
    
    if (age >= 18) {
        // Adult BMI categories
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Normal weight";
        else if (bmi < 30) category = "Overweight";
        else if (bmi < 35) category = "Obese (Class 1)";
        else if (bmi < 40) category = "Obese (Class 2)";
        else category = "Severe Obesity";
    } else {
        // Child & Teen BMI — approximate logic
        if (gender === "male") {
            if (bmi < 14.5) category = "Underweight";
            else if (bmi < 19.5) category = "Normal weight";
            else if (bmi < 22) category = "Overweight";
            else category = "Obese";
        } else if (gender === "female") {
            if (bmi < 14) category = "Underweight";
            else if (bmi < 19) category = "Normal weight";
            else if (bmi < 21.5) category = "Overweight";
            else category = "Obese";
        } else {
            category = "Invalid gender";
        }

        category += " (Age-based approximation)";
    }

    let bmiOp=document.querySelector("#BMI");
    let analysis=document.querySelector("#analysis");
    bmiOp.innerText= ("BMI:",bmi);
    analysis.innerText=("Analysis:",category);

});