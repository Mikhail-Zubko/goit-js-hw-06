const listEl = document.querySelector("ul#categories");

const categoriesCalc = (list) => {
    return list.querySelectorAll(".item").length
};
console.log("Number of categories: ", categoriesCalc(listEl));
