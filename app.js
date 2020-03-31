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
  ing18 = document.getElementById("ingredient18"),
  met1 = document.getElementById("method1"),
  met2 = document.getElementById("method2"),
  met3 = document.getElementById("method3"),
  met4 = document.getElementById("method4"),
  met5 = document.getElementById("method5"),
  met6 = document.getElementById("method6"),
  met7 = document.getElementById("method7"),
  met8 = document.getElementById("method8"),
  met9 = document.getElementById("method9"),
  met10 = document.getElementById("method10");
link = document.getElementById("downloadlink");

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
    name = nameInput.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    description = descInput.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    ingredient1 = ing1.value.toLowerCase().replace(".", "");
    ingredient2 = ing2.value.toLowerCase().replace(".", "");
    ingredient3 = ing3.value.toLowerCase().replace(".", "");
    ingredient4 = ing4.value.toLowerCase().replace(".", "");
    ingredient5 = ing5.value.toLowerCase().replace(".", "");
    ingredient6 = ing6.value.toLowerCase().replace(".", "");
    ingredient7 = ing7.value.toLowerCase().replace(".", "");
    ingredient8 = ing8.value.toLowerCase().replace(".", "");
    ingredient9 = ing9.value.toLowerCase().replace(".", "");
    ingredient10 = ing10.value.toLowerCase().replace(".", "");
    ingredient11 = ing11.value.toLowerCase().replace(".", "");
    ingredient12 = ing12.value.toLowerCase().replace(".", "");
    ingredient13 = ing13.value.toLowerCase().replace(".", "");
    ingredient14 = ing14.value.toLowerCase().replace(".", "");
    ingredient15 = ing15.value.toLowerCase().replace(".", "");
    ingredient16 = ing16.value.toLowerCase().replace(".", "");
    ingredient17 = ing17.value.toLowerCase().replace(".", "");
    ingredient18 = ing18.value.toLowerCase().replace(".", "");
    method1 = met1.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method2 = met2.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method3 = met3.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method4 = met4.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method5 = met5.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method6 = met6.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method7 = met7.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method8 = met8.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method9 = met9.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    method10 = met10.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    note = noteInput.value.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
    country = cntryInput.value.toLowerCase();

    // Normally, HTML anchor element for download button should have the attribute download set to "name.txt"
    // However, attribute is dynamically set here to reflect the name of each recipe entered as a name input value
    link.setAttribute("download", `${name}.txt`);

    link.href = makeRecipeFile(
      `{\n"name": "${name}", \n "description": "${description}", \n "ingredients": ["${ingredient1}", "${ingredient2}", "${ingredient3}", "${ingredient4}", "${ingredient5}", "${ingredient6}", "${ingredient7}", "${ingredient8}", "${ingredient9}", "${ingredient10}", "${ingredient11}", "${ingredient12}", "${ingredient13}", "${ingredient14}", "${ingredient15}", "${ingredient16}", "${ingredient17}", "${ingredient18}"], \n "methods": ["${method1}", "${method2}", "${method3}", "${method4}", "${method5}", "${method6}", "${method7}", "${method8}", "${method9}", "${method10}"], \n "note": "${note}", \n "country": "${country}" \n },`
    );
    link.style.display = "block";
  },
  false
);

const reload = () => {
  window.location.reload(true);
};

link.addEventListener("click", reload);

/////// FINISHING POINT
// reload on download button click
// Create v1.0
