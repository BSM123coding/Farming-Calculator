var area;
var perimeter;

function Calculate() {
    area = Number(document.getElementById("length").value) * Number(document.getElementById("length").value);
    document.getElementById("Area").innerHTML = area;
    perimeter = Number(document.getElementById("length").value) + Number(document.getElementById("length").value) + Number(document.getElementById("length").value) + Number(document.getElementById("length").value);
    document.getElementById("Perimeter").innerHTML = perimeter;
}
