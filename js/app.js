function toggleImages() {
    var images = document.getElementById("hiddenImages");
    if (images.style.display === "none") {
        images.style.display = "flex";
    } else {
        images.style.display = "none";
    }
}
