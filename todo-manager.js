const prompt = require("prompt-sync")();

const arr = [];

while (true) {

    let choice = prompt(`1. Add \n 2. View \n 3. Remove \n 4. Exit \n Enter your choice: `);
    
    if(arr.length ==0 ){
        console.log("please choose an item")
    }

    if (choice == 1) {

        let item = prompt("Enter item: ");
        arr.push(item);
        console.log("Added:", arr);

    } else if (choice == 2) {

        console.log("Items:", arr);

    } else if (choice == 3) {

        arr.pop();
        console.log("Remove:", arr);

    } else if (choice == 4 ||choice==null) {

        console.log("Exit"); 
        break;

    } else {

        console.log("Choose only (1-4)");

    }
}