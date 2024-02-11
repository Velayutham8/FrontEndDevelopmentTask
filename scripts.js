let previousIndex; //Tracks the previous Index of the card

//Handler
const expandHandler = (cardIndex) => {
  const { box, expandableContent } = getIndexElement(cardIndex);

  if (previousIndex && previousIndex !== cardIndex) {
    const { box, expandableContent } = getIndexElement(previousIndex);

    shrink(box, expandableContent);
  }

  if (box.classList[0] === "box") {
    expand(box, expandableContent);
  } else {
    shrink(box, expandableContent);
  }

  previousIndex = cardIndex;
};

//expands the card
const expand = (box, expandableContent) => {
  box.classList.replace("box", "box-expand");
  expandableContent.classList.replace(
    "expandable-content-hide",
    "expandable-content"
  );
};
//Shrinks the card
const shrink = (box, expandableContent) => {
  box.classList.replace("box-expand", "box");
  expandableContent.classList.replace(
    "expandable-content",
    "expandable-content-hide"
  );
};

// Get Element of the index of card
const getIndexElement = (index) => {
  const box = document
    .getElementById(`${index}`)
    .querySelector('[class^="box"]');
  const expandableContent = document
    .getElementById(`${index}`)
    .querySelector('[class^="expandable-content"]');

  return { box, expandableContent };
};
