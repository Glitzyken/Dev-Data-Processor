///////////////// DECLARE VARIABLES

let recipeFile, makeRecipeFile;

///////////////// DOM ACCESS

let createButton = document.getElementById("create"),
  nameInput = document.getElementById("name"),
  descInput = document.getElementById("description"),
  plusIngredient = document.getElementById("plus-ingredient"),
  plusMethod = document.getElementById("plus-method");

///////////////// MAKE RECIPE DATA

// Initialize recipeFile to the value of null, set recipeFile to Blob, then return newly created recipeFile.

recipeFile = null;
makeRecipeFile = value => {
  let data = new Blob([value], { type: "text/plain" });

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (recipeFile !== null) {
    window.URL.revokeObjectURL(recipeFile);
  }

  recipeFile = window.URL.createObjectURL(data);

  return recipeFile;
};

plusIngredient.addEventListener("click", () => {
  console.log("Button clicked");

  let html = '<input class="recipe ui" type="text" placeholder="ingredient" />';

  document
    .getElementById("ingredients")
    .insertAdjacentElement("beforeend", html);
});

///////////////// CREATE RECIPE BUTTON

createButton.addEventListener(
  "click",
  () => {
    let link = document.getElementById("downloadlink");

    // Normally, HTML anchor element for download button should have the attribute download set to "name.txt"
    // However, attribute is dynamically set here to reflect the name of each recipe entered as a name input value
    link.setAttribute("download", `${nameInput.value}.txt`);
    // Prepare and structure the final output for recipeFile. Then, create download link for it.
    link.href = makeRecipeFile(
      `{\n"name": "${nameInput.value}", \n "description": "${descInput.value}"\n},`
    );
    link.style.display = "block";
  },
  false
);
