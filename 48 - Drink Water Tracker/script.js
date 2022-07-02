const smallGlasses = document.querySelectorAll(".glass");
const remainingEl = document.querySelector(".remaining")
const waterEl = document.getElementById("water");
const bigGlass = document.getElementById("glass");

smallGlasses.forEach((glass, index) => {
    glass.addEventListener("click", () => {
        fillTheGlasses(index)
    })
})

function fillTheGlasses(index) {
    if (smallGlasses[index].classList.contains("fill") &&
        !smallGlasses[index].nextElementSibling.classList.contains("fill")) {
        index--;
    }

    smallGlasses.forEach((glass, idx) => {
        if (idx <= index) {
            glass.classList.add("fill")
        } else {
            glass.classList.remove("fill")
        }
    });

    fillTheBigGlass(index)
}


function fillTheBigGlass(index) {
    let totalDrunkGlasses = index + 1;
    let eachGlassWaterInML = 250;
    let twoLiterInML = 2000;
    let totalDrunkInLT = totalDrunkGlasses * eachGlassWaterInML;

    waterEl.style.height = `${((eachGlassWaterInML * totalDrunkGlasses) / twoLiterInML) * 100}%`

    if (totalDrunkGlasses > 4) {
        remainingEl.style.bottom = `${((eachGlassWaterInML * totalDrunkGlasses) / twoLiterInML) * 100}%`
    }

    if (totalDrunkGlasses < 4) {
        remainingEl.style.bottom = "50%"
    }

    if (totalDrunkGlasses === 0) {
        waterEl.innerHTML = ""
    } else {
        waterEl.innerHTML = `${((eachGlassWaterInML * totalDrunkGlasses) / twoLiterInML) * 100}%`
    }

    if (totalDrunkInLT > 0) {
        remainingEl.innerHTML = `${(twoLiterInML - totalDrunkInLT) / 1000}L <br> Remained`
    } else {
        remainingEl.innerHTML = `2L <br> Remaining`
    }
}

