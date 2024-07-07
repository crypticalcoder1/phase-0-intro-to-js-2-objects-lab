// Write your solution in this file!
// Initialize the employee object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete property non-destructively
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete property destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Example usage
console.log("Initial Employee:");
console.log(employee);

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak Ave');
console.log("\nUpdated Employee (non-destructive):");
console.log(updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '789 Elm Blvd');
console.log("\nOriginal Employee (destructive):");
console.log(employee);

let employeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log("\nEmployee without Address (non-destructive):");
console.log(employeeWithoutAddress);

destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log("\nEmployee without Name (destructive):");
console.log(employee);
