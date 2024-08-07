//** over here you'll need the following
// https://dev.to/climentea/simple-way-to-generate-pdf-from-html-21mh*/

function getRecipe(a){
    switch(a){
        case 1:
            recipeName="Bone Broth From 'Nom Nom Paleo";
            recipeIngredients="pain pain pain";
            nutritionalValue={carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case 2:
            recipeName="Paleo Pumpkin Pie";
            recipeIngredients="pain pain pain2";
            nutritionalValue={carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case 3:
            recipeName="Strawberry Guacamole";
            recipeIngredients="pain pain pain3";
            nutritionalValue={carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case 4:
            recipeName="Paleo Blueberry Muffins";
            recipeIngredients="pain pain pain4";
            nutritionalValue={carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case 5:
            recipeName="Paleo Shrimp-Stuffed Mushrooms";
            recipeIngredients="pain pain pain5";
            nutritionalValue={carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case 6:
            recipeName="Baked Banana Chip Encrusted French Toast";
            recipeIngredients="pain pain pain6";
            nutritionalValue={carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case 7:
            recipeName="Vietnamese Pho Pressure Cooker (Noodle Soup)";
            recipeIngredients="pain pain pain7";
            nutritionalValue={carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        default:
            recipeName="none";
            recipeIngredients="none2";
            nutritionalValue={carbs: 'null',
                fats:'null',
                protein:'null'
            };
    }
    return [recipeName, recipeIngredients, nutritionalValue];
}

function getRecipeFromValue(a){
    switch(a){
        case "Bone Broth From 'Nom Nom Paleo":
            fullMealAlchamist={
                    name:"Bone Broth From 'Nom Nom Paleo",
                    recipeIngredients:"pain pain pain",
                    carbs: '5.22g',
                    fats:'1.29g',
                    protein:'3.20g'
            };
            break;
        case"Paleo Pumpkin Pie":
                fullMealAlchamist={
                name:"Paleo Pumpkin Pie",
                recipeIngredients:"pain pain pain",
                carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case "Strawberry Guacamole":
            fullMealAlchamist={
                name:"Strawberry Guacamole",
                recipeIngredients:"pain pain pain",
                carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case "Paleo Blueberry Muffins":
            fullMealAlchamist={
                name:"Paleo Blueberry Muffins",
                recipeIngredients:"pain pain pain",
                carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case "Paleo Shrimp-Stuffed Mushrooms":
            fullMealAlchamist={
                name:"Paleo Shrimp-Stuffed Mushrooms",
                recipeIngredients:"pain pain pain",
                carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case "Baked Banana Chip Encrusted French Toast":
            fullMealAlchamist={
                name:"Baked Banana Chip Encrusted French Toast",
                recipeIngredients:"pain pain pain",
                carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        case "Vietnamese Pho Pressure Cooker (Noodle Soup)":
            fullMealAlchamist={
                name:"Vietnamese Pho Pressure Cooker (Noodle Soup)",
                recipeIngredients:"pain pain pain",
                carbs: '5.22g',
                fats:'1.29g',
                protein:'3.20g'
            };
            break;
        default:
            recipeName="none";
            recipeIngredients="none2";
            nutritionalValue={carbs: 'null',
                fats:'null',
                protein:'null'
            };
    }
    return fullMealAlchamist;
}

function getRandom(exclude){
    let num;
    console.log("pain")
    do{
        num = Math.floor(Math.random()*7)+1;
    }
    while(exclude.includes(num));
    return num;
};

function appendToRecipe(x){

}

function completeForm(mealplace) {
    let breakfast = document.getElementById(mealplace);
    let findRecipe = [0];
    for (let i = 0; i < 3; i++){
        let randomNumber = getRandom(findRecipe);
        let randomRecipe = getRecipe(randomNumber);
        let addedClass;
        let creatValue = document.createElement('option');
        if (mealplace == "choose recipe breakfast"){
            addedClass = "optionBreak"
        }else if(mealplace == "choose recipe lunch"){
            addedClass = "optionLunch"
        }else if(mealplace == "choose recipe dinner"){
            addedClass = "optionDinner"
        }else{
            addedClass = "snack"
        }
        creatValue.innerHTML = `<option class="${addedClass}" value="${randomRecipe[0]}">${randomRecipe[0]}</option>`;
        breakfast.appendChild(creatValue);
        findRecipe.push(randomNumber)
    }
}

//**Hellfire */
let findRecipe = [0];
let breakfast = document.getElementById('choose recipe breakfast');
/**append child to list */
completeForm("choose recipe breakfast")

completeForm("choose recipe lunch")

completeForm("choose recipe dinner")

/**adding event leistner to options */
/*let selectBreakfast = document.getElementById('choose recipe breakfast');*/
/*let alloptionsbreackfast = document.querySelector('choose recipe breakfast');
alloptionsbreackfast.forEach(item => {
    item.addEventListener("change", function(){
        const optionValue = item.value;
        console.log(optionValue);
        recipeOBJ = getRecipeFromValue(optionValue);
        console.log(recipeOBJ);

    });
});*/

let selectBreakfast = document.getElementById('choose recipe breakfast');
selectBreakfast.addEventListener("change", function() {
    const selectedMeal = selectBreakfast.value;
    console.log(selectedMeal)
    recipeOBJ = getRecipeFromValue(selectedMeal);
    console.log(recipeOBJ)

    editRecipe = document.getElementById("recipe for breakfast")
    editRecipe.text
})
