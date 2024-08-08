const container = document.querySelector("#houses");

const fetchHouses = async () => {
    const data = await fetch("http://localhost:3001/niHome/gethouses", {
        method: "GET"
    });

    const data_object = await data.json()
    const houses = data_object.body.data;

    const createHouseComponent = house => {
        // Create the component element (div)
        const houseItem = document.createElement("div");
        houseItem.classList.add("col-lg-4", "col-md-6", "wow", "fadeInUp", "data-wow-delay", "0.5s");
      
        // Build the HTML content using template literals for readability
        houseItem.innerHTML = `
          <div class="property-item rounded overflow-hidden">
            <div class="position-relative overflow-hidden">
              <a href=""><img class="img-fluid" src="${house.imageUrl.toString()}" alt=""></a>
              <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${house.status}</div>
              <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${house.type}</div>
            </div>
            <div class="p-4 pb-0">
              <h5 class="text-primary mb-3">${house.price}</h5>
              <a class="d-block h5 mb-2" href="">${house.name}</a>
              <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${house.location}</p>
            </div>
            <div class="d-flex border-top">
              <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${house.size}</small> 
            </div>
          </div>
        `;
        return houseItem;
      };

    // Loop through houses array and create components
    houses.forEach(house => {
        const component = createHouseComponent(house);
        container.appendChild(component);
    });
}

fetchHouses()