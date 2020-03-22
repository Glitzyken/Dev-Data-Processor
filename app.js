///////////////// DECLARE VARIABLES

let recipeFile, makeRecipeFile;

///////////////// DOM ACCESS

let createButton = document.getElementById("create"),
  nameInput = document.getElementById("name"),
  descInput = document.getElementById("description"),
  noteInput = document.getElementById("note"),
  cntryInput = document.getElementById("country"),
  ing1 = document.getElementById("ingredient1"),
  ing2 = document.getElementById("ingredient2"),
  ing3 = document.getElementById("ingredient3"),
  ing4 = document.getElementById("ingredient4"),
  ing5 = document.getElementById("ingredient5"),
  ing6 = document.getElementById("ingredient6"),
  ing7 = document.getElementById("ingredient7"),
  ing8 = document.getElementById("ingredient8"),
  ing9 = document.getElementById("ingredient9"),
  ing10 = document.getElementById("ingredient10"),
  ing11 = document.getElementById("ingredient11"),
  ing12 = document.getElementById("ingredient12"),
  ing13 = document.getElementById("ingredient13"),
  ing14 = document.getElementById("ingredient14"),
  ing15 = document.getElementById("ingredient15"),
  ing16 = document.getElementById("ingredient16"),
  ing17 = document.getElementById("ingredient17"),
  ing18 = document.getElementById("ingredient18");

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

///////////////// CREATE RECIPE BUTTON

createButton.addEventListener(
  "click",
  () => {
    let link = document.getElementById("downloadlink");

    // Format and structure the final output value of recipeFile then, create download link for it.
    name = nameInput.value.toLowerCase();
    description = descInput.value.toLowerCase();
    ingredient1 = ing1.value.toLowerCase();
    ingredient2 = ing2.value.toLowerCase();
    ingredient3 = ing3.value.toLowerCase();
    ingredient4 = ing4.value.toLowerCase();
    ingredient5 = ing5.value.toLowerCase();
    ingredient6 = ing6.value.toLowerCase();
    ingredient7 = ing7.value.toLowerCase();
    ingredient8 = ing8.value.toLowerCase();
    ingredient9 = ing9.value.toLowerCase();
    ingredient10 = ing10.value.toLowerCase();
    ingredient11 = ing11.value.toLowerCase();
    ingredient12 = ing12.value.toLowerCase();
    ingredient13 = ing13.value.toLowerCase();
    ingredient14 = ing14.value.toLowerCase();
    ingredient15 = ing15.value.toLowerCase();
    ingredient16 = ing16.value.toLowerCase();
    ingredient17 = ing17.value.toLowerCase();
    ingredient18 = ing18.value.toLowerCase();
    note = noteInput.value.toLowerCase();
    country = cntryInput.value.toLowerCase();

    // Normally, HTML anchor element for download button should have the attribute download set to "name.txt"
    // However, attribute is dynamically set here to reflect the name of each recipe entered as a name input value
    link.setAttribute("download", `${name}.txt`);

    link.href = makeRecipeFile(
      `{\n"name": "${name}", \n "description": "${description}", \n "ingredients": ["${ingredient1}", "${ingredient2}", "${ingredient3}", "${ingredient4}", "${ingredient5}", "${ingredient6}", "${ingredient7}", "${ingredient8}", "${ingredient9}", "${ingredient10}", "${ingredient11}", "${ingredient12}", "${ingredient13}", "${ingredient14}", "${ingredient15}", "${ingredient16}", "${ingredient17}", "${ingredient18}"], \n "note": "${note}", \n "country": "${country}" \n },`
    );
    link.style.display = "block";
  },
  false
);

//TODO:

// Add Country data

/////// FORMATING DATA VALUE
// line breaks
// full stop
// lowercase

/////// FINISHING POINT
// reload on download button click
// Create v1.0
