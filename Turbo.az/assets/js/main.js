const main = document.querySelector(".main");

const cars = [{
    id: 1,
    name: "Renault",
    price: 1000,
    currency: "AZN",
    imageSrc: "./assets/images/car1.jpg"
},
{
    id: 2,
    name: "Haval",
    price: 2000,
    currency: "AZN",
    imageSrc: "./assets/images/car2.jpg"
},
{
    id: 3,
    name: "Mercedes",
    price: 3000,
    currency: "AZN",
    imageSrc: "./assets/images/car3.jpg"
},
{
    id: 4,
    name: "Changan",
    price: 4000,
    currency: "AZN",
    imageSrc: "./assets/images/car4.jpg"
}
]

cars.forEach(car => {
    const carHTML = `
    <div class="cars col-3">
          <div><img src="${car.imageSrc}" alt="" /></div>
          <p class="name">${car.name}</p>
          <p class="price">${car.price + " " + car.currency}</p>
          <button id=${car.id} class="btn btn-primary favourite">Add Favourites</button>
        </div> 
        `;
    main.innerHTML += carHTML
})

let newarray = []
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let obj = cars.find(car => car.id == button.id)
        if (this.classList.contains("favourite")) {
            this.classList.replace("favourite", "remove");
            this.innerText = "Remove";

            newarray.push(obj);
            localStorage.setItem("favourites", JSON.stringify(newarray))
        }
        else {
            this.classList.replace("remove", "favourite");
            this.innerText = "Add Favourites";
            let localFav = JSON.parse(localStorage.getItem("favourites"));
            let count = localFav.length;
            newarray = localFav.filter(fav => fav.id !== obj.id);
            localStorage.setItem("favourites", JSON.stringify(newarray))
        }

    })

    //console.log(JSON.parse(localStorage.getItem("favourites")).slice(0));

})

let numbers = [1, 2, 3, 4, 5];
numbers = numbers.slice(0, 1)
console.log(numbers);