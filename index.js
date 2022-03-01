// Write your solution in this file!
const employee = {
    name: "will",
    streetAddress: "Listmore Avenue"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
const newEmployeee = { ...employee };
newEmployeee[key] = value;
return newEmployeee; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) { 
employee[key] = value;
return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
const newEmployeee = { ...employee };
delete newEmployeee[key];
return newEmployeee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
delete employee[key];
return employee;
}