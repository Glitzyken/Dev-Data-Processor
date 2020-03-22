(function() {
  var recipeFile = null,
    makeRecipeFile = function(value) {
      var data = new Blob([value], { type: "text/plain" });

      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (recipeFile !== null) {
        window.URL.revokeObjectURL(recipeFile);
      }

      recipeFile = window.URL.createObjectURL(data);

      return recipeFile;
    };

  var createButton = document.getElementById("create"),
    nameInput = document.getElementById("name"),
    descInput = document.getElementById("description"),
    plusIngredient = document.getElementById("plus-ingredient"),
    plusMethod = document.getElementById("plus-method");

  plusIngredient.addEventListener("click", function() {
    console.log("Button clicked");

    var html =
      '<input class="recipe ui" type="text" placeholder="ingredient" />';

    document
      .getElementById("ingredient")
      .insertAdjacentElement("afterend", html);
  });

  createButton.addEventListener(
    "click",
    function() {
      var link = document.getElementById("downloadlink");

      // Normally, HTML anchor element for download button should have the attribute download set to "name.txt"
      // However, attribute is dynamically set here to reflect the name of each recipe entered as a name input value
      link.setAttribute("download", `${nameInput.value}.txt`);
      link.href = makeRecipeFile(
        `{\n"name": "${nameInput.value}", \n "description": "${descInput.value}"\n},`
      );
      link.style.display = "block";
    },
    false
  );
})();
