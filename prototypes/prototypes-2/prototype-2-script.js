function dentritic() {
    var dendritic_id = document.getElementById("dendritic")
    var dendritic_css = window.getComputedStyle(dendritic_id)
    var display_check = dendritic_css.getPropertyValue("display");

    if (display_check === "none") {
        dendritic_id.style.display="inline";
    } else {
        dendritic_id.style.display="none";
    }

    console.log("dendritic success");
}