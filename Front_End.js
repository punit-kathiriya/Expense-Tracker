const initilizeApplication = () => {

    document.getElementById('add_car').addEventListener('click', () => {

        const newCar = document.getElementById('inputYourCar').value;

        if (newCar && newCar.length > 0){

            const newPElementNode = document.createElement('p');
            const newTextNode = document.createTextNode(newCar);
            newPElementNode.appendChild(newTextNode);

            const messageArea = document.getElementById('cars');
            messageArea.appendChild(newPElementNode);

            document.getElementById('inputYourCar').value = '';


        }

    })
};



// const CheckboxApplication = () => {

//     document.getElementById('ElectricCarLabel').addEventListener('click', () => {

//         const isElectricCar = document.getElementById('ElectricCarId').value;

//         if (isElectricCar && newCar.length > 0){

//             const newPElementNode = document.createElement('p');
//             const newTextNode = document.createTextNode(newCar);
//             newPElementNode.appendChild(newTextNode);

//             const messageArea = document.getElementById('cars');
//             messageArea.appendChild(newPElementNode);

//             document.getElementById('inputYourCar').value = '';


//         }

//     })
// };

window.addEventListener('load', () => {
    initilizeApplication();

});