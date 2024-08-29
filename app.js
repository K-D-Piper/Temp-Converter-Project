//CONVERSION SECTION START #region
/*
// Asign values to variables 
let Celsius = ["Celsius" , "°C", "", Number]
let Fahrenheit = ["Fahrenheit", "°F" , "", Number]
let Kelvin = ["Kelvin", "°K", "", Number]

let CelsiusConversions = [((Fahrenheit - 32)/1.8), (Kelvin - 273.15)]
let FahrenheitConversions = [ ((Celsius * 1.8) + 32), ((Kelvin * 1.8) - 459.67)]
let KelvinConversions = [ (Celsius + 273.15) , ((Fahrenheit + 459.67) / 1.8)]

const CelsiusInput = document.getElementById("CelsiusNum");
const FahrInput = document.getElementById("FahrNum");
const KelvInput = document.getElementById("KelvNum");
*/

// input area contianer id =tempinput
//  id =DropDownUnits

//input section START #region
let inputSect = document.getElementById("tempinput");

let dropUnits = document.getElementById("dropDownUnits");
//input section END #regionend

//VARIABLE VALUES section START #region
let celsiusID = document.getElementById("celsiusNum")

let fahrID = document.getElementById("fahrNum")

let kelvID = document.getElementById("kelvNum")
// VARIABLE VALUES section END #regionend

//RESET BUTTON section START #region
const resetID = document.getElementById("resetbutton")

resetID.addEventListener("click", () => {
    inputSect.value = "";
    celsiusID.value = "";
    fahrID.value = "";
    kelvID.value = "";
})
//RESET BUTTON section END #regionend

//SUBMIT BUTTON section START
const submitID = document.getElementById("submitbutton") 

submitID.addEventListener("click" , () => 
{
    switch(true)
    {
        case(dropUnits.value === "celsius"):
            celsiusID.value = inputSect.value
            fahrID.value = ((inputSect.value * 1.8) + 32)
            kelvID.value = (inputSect.value + 273.15)
    break;
        case (dropUnits.value === "fahrenheit"):
            fahrID.value = inputSect.value
            celsiusID.value = ((inputSect.value - 32)/1.8)
            kelvID.value =  ((inputSect.value + 459.67) / 1.8)
    break;
        case (dropUnits.value === "kelvin"):
            kelvID.value = inputSect.value
            celsiusID.value =  (inputSect.value - 273.15)
            fahrID.value = ((inputSect.value * 1.8) - 459.67)
    break;
        default:
            celsiusID.value = "error"
            fahrID.value = "error"
            kelvID.value = "error"
    }
})
// SUBMIT BUTTON section END 
/*
let CelsiusConversions = [((Fahrenheit - 32)/1.8), (Kelvin - 273.15)]
let FahrenheitConversions = [ ((Celsius * 1.8) + 32), ((Kelvin * 1.8) - 459.67)]
let KelvinConversions = [ (Celsius + 273.15) , ((Fahrenheit + 459.67) / 1.8)]
*/

/*
//! Temp Convertor Website:
//? 1. Project Setup
//TODO Folder Organization: Create a new project folder and include the following files:
//TODO index.html for the HTML structure. (check)
//TODO styles.css for any custom styles. (check)
//TODO app.js for the JavaScript code. (check)

//? 2. HTML Structure
//TODO Title: Create a title and a header for your temperature converter page. (check)
//*TODO Input Fields:
//* Add an input field where users can enter a temperature value. (check)
//* Include dropdown menus for selecting the temperature units (e.g., Celsius, Fahrenheit, Kelvin) for both the original and target units. (No.)
//* Buttons: Add a button that will trigger the conversion process. (check)
//* Result Display: Include an area on the page where the conversion result will be displayed. (check)
//? 3. Styling with Bootstrap
//* Responsive Design: Use Bootstrap's grid system to make your layout responsive.
//* Form Styling: Apply Bootstrap classes to style your input fields, dropdowns, and buttons.
//* Custom Styles: Optionally, add custom styles in your styles.css to enhance the look and feel of the page.
//? 4. JavaScript Logic
//* DOM Manipulation:
//* Select the necessary elements (e.g., input fields, dropdowns, buttons, result display) using JavaScript.
//* Conversion Functions:
//* Write functions that handle the conversion logic between Celsius, Fahrenheit, and Kelvin.
//* Event Handling:
//* Implement event listeners that trigger the conversion when the user interacts with the page (e.g., clicking the "Convert" button).
//* Result Display:
//* Update the result area of the page with the converted temperature.
//! 5. Bonus Features (Optional)
//* Input Validation: Ensure that the user inputs valid temperature values.
//* Unit Conversion Validation: Prevent unnecessary conversions, such as converting from Celsius to Celsius.
//* Additional Features: Consider adding features like converting to multiple units simultaneously or a reset button to clear the inputs and results.


*/

