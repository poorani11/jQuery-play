 $(function () {
    console.log("jquery loaded");
})

document.addEventListener("DOMContentLoaded", pageLoadedFunction("1"));

function pageLoadedFunction(num) {
    console.log("DOM is ready to use" +num);
}

document.onload = pageLoadedFunction('2')