// ========================================
// TOEZA STUDIO
// Website Builder — V1
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("TOEZA STUDIO loaded 🚀");

  // -------------------------------
  // START BUILDING
  // -------------------------------

  const startBuilding = document.getElementById("startBuilding");

  if (startBuilding) {
    startBuilding.addEventListener("click", () => {
      const builder = document.getElementById("builder");

      if (builder) {
        builder.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }


  // -------------------------------
  // WEBSITE TYPE SELECTION
  // -------------------------------

  const websiteTypes = document.querySelectorAll(".website-type");

  websiteTypes.forEach((type) => {
    type.addEventListener("click", () => {

      // Remove previous selection
      websiteTypes.forEach((item) => {
        item.classList.remove("selected");
      });

      // Select clicked option
      type.classList.add("selected");

      // Get selected type
      const selectedType = type.dataset.type;

      console.log(
        "Selected website type:",
        selectedType
      );
    });
  });


  // -------------------------------
  // BASIC BUTTON FEEDBACK
  // -------------------------------

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("button-clicked");

      setTimeout(() => {
        button.classList.remove("button-clicked");
      }, 150);
    });
  });

});
