const expandHandler = (cardIndex) => {
  const box = document
    .getElementById(`${cardIndex}`)
    .querySelector('[class^="box"]');
  const expandableContent = document
    .getElementById(`${cardIndex}`)
    .querySelector('[class^="expandable-content"]');

  console.log(
    "sdddddd",
    document.getElementById(`${cardIndex}`).querySelector('[class^="box"]')
  );

  // console.log("sdddddd", box.classList);
  // box.classList.remove(`box`);

  if (box.classList[0] === "box") {
    box.classList.replace("box", "box-expand");
    expandableContent.classList.replace(
      "expandable-content-hide",
      "expandable-content"
    );
  } else {
    box.classList.replace("box-expand", "box");
    expandableContent.classList.replace(
      "expandable-content",
      "expandable-content-hide"
    );
  }
};
