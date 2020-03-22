///////////////// DECLARE VARIABLES

let recipeFile, makeRecipeFile;

///////////////// DOM ACCESS

let createButton = document.getElementById("create"),
  nameInput = document.getElementById("name"),
  descInput = document.getElementById("description"),
  noteInput = document.getElementById("note"),
  ingredientsInput = document.querySelectorAll(".ingredient"),
  methodsInput = document.querySelectorAll(".method");

///////////////// MAKE RECIPE DATA

// Initialize recipeFile to the value of null, set recipeFile to Blob, then return newly created recipeFile.

recipeFile = null;
makeRecipeFile = value => {
  let data = new Blob([value], { type: "text/plain" });

  // If replacing a previously generated file, manually revoke the object URL to avoid memory leaks.
  if (recipeFile !== null) {
    window.URL.revokeObjectURL(recipeFile);
  }

  recipeFile = window.URL.createObjectURL(data);

  return recipeFile;
};

///////////////// COLLECT DATA FROM INGREDIENT AND METHOD INPUT VALUES

// let ingredientArr = Object.keys(ingredientsInput).forEach(e => {
//   return ingredientsInput.value;
// });

let ingredientArr = [...ingredientsInput].map(e => e.value);

///////////////// CREATE RECIPE BUTTON

createButton.addEventListener(
  "click",
  () => {
    let link = document.getElementById("downloadlink");

    // Format and structure the final output value of recipeFile then, create download link for it.
    name = nameInput.value.toLowerCase();
    description = descInput.value.toLowerCase();

    // Normally, HTML anchor element for download button should have the attribute download set to "name.txt"
    // However, attribute is dynamically set here to reflect the name of each recipe entered as a name input value
    link.setAttribute("download", `${nameInput.value}.txt`);

    link.href = makeRecipeFile(
      `{\n"name": "${name}", \n "description": "${description}", \n "ingredients": ["${[
        ingredientArr
      ]}"], \n "note": "${noteInput.value}" \n },`
    );
    link.style.display = "block";
  },
  false
);

console.log(typeof ingredientArr[0]);
console.log(ingredientArr);
// console.log(typeof name);

//TODO:

// Add Country data

/////// FORMATING DATA VALUE
// line breaks
// full stop
// lowercase

/////// FINISHING POINT
// reload on download button click
// Create v1.0
