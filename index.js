// Write your solution in this file!
let employee = {
    name: "luke",
    streetAddress: "123 tatonine",
}
function updateEmployeeWithKeyAndValue (employee, key, value) {
    return Object.assign({}, employee,{[key]:value})
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newemployee = {...employee}
    delete newemployee [key]
    return newemployee
}
function destructivelyDeleteFromEmployeeByKey(newemployee, key){
    delete newemployee [key]
    return newemployee
}