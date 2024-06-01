// the function to toggle the menu for the feature in desktop view
function featList() {
    // the main variable for the function
    // the button of th features 
    let features = document.getElementById("features");
    // the menu of the features
    let featMenu = document.querySelector(".features-menu");
    //if the feature is selected 
    if (features.checked) {
        featMenu.style.display = "flex";
    // if the menu is not selected
    } else {
        featMenu.style.display = "none";
    }
}
// Add event listener to call featList when the checkbox changes in desktop view
document.getElementById("features").addEventListener("change", featList);
// Optionally, call featList on page load to set the initial state
featList();

// the function to toggle the menu for the company in desktop view
function complist() {
    // the main variable for the function
    // the button of th company 
    let company = document.getElementById("company");
    // the menu of the company
    let compMenu = document.querySelector(".company-menu");
    //if the feature is selected 
    if (company.checked) {
        compMenu.style.display = "flex";
    // if the menu is not selected
    } else {
        compMenu.style.display = "none";
    }
}
// Add event listener to call complist when the checkbox changes in desktop view
document.getElementById("company").addEventListener("change", complist);
// Optionally, call complist on page load to set the initial state
complist();

// the function to toggle the menu for the feature in mobile view
function featList2() {
    // the main variable for the function
    // the button of th features 
    let features2 = document.getElementById("features2");
    // the menu of the features
    let featMenu2 = document.querySelector(".features-menu2");
    //if the feature is selected 
    if (features2.checked) {
        featMenu2.style.display = "flex";
    // if the menu is not selected
    } else {
        featMenu2.style.display = "none";
    }
}
// Add event listener to call featList2 when the checkbox changes in mobile view
document.getElementById("features2").addEventListener("change", featList2);
// Optionally, call featList2 on page load to set the initial state
featList2();

// the function to toggle the menu for the company in mobile view
function complist2() {
    // the main variable for the function
    // the button of th company 
    let company2 = document.getElementById("company2");
    // the menu of the company
    let compMenu2 = document.querySelector(".company-menu2");
    //if the feature is selected 
    if (company2.checked) {
        compMenu2.style.display = "flex";
    // if the menu is not selected
    } else {
        compMenu2.style.display = "none";
    }
}
// Add event listener to call complist2 when the checkbox changes in mobile view
document.getElementById("company2").addEventListener("change", complist2);
// Optionally, call featList2 on page load to set the initial state
complist2();

// set variable to menu for mobile
let menuMob=document.querySelector(".nav-mob")
// function to open the menu
function openMenu(){
    menuMob.classList.remove("hide");
}
// function to close the menu
function closeMenu(){
    menuMob.classList.add("hide");

}