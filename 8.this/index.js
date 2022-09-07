// --- this ---

// "this" is the object that the function is a property of

function a() {
    console.log(this); // here we get the window object

}
a(); // similar to window.a();
// // Here, a() function is a property of the window object

//-------------------------------------------------------
// 1. In the above example, this gives us the methods to access to  their object.
// Methods are basically, functions inside an object

const aadharUpdateObject = {
    fName: "Dhwanith",
    lName: "Chelumalla",
    update: function () {
        return `Updating aadhar of ${this.fName} ${this.lName}`
    },
    successfull() {
        return `${this.update()} successfull` // 'Updating aadhar of Dhwanith Chelumalla successfull'
    }

}
aadharUpdateObject.successfull();

//-------------------------------------------------------
// 2. Execute same code for multiple objects.

function railwaySeats() {
  console.log(this.seat + " !!");
}
var seat = "Sleeper Class";

const seatObj1 = {
  seat: "AC-III",
  railwaySeats: railwaySeats,
};

const seatObj2 = {
  seat: "General",
  railwaySeats: railwaySeats,
};
window.railwaySeats(); // SLeeper Class
seatObj1.railwaySeats(); // AC-III
seatObj2.railwaySeats(); // General
