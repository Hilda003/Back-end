function calculateSalary() {
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    let salary = 0;

    if (hoursWorked > 40) {
        const overtimeHours = hoursWorked - 40;
        salary = (40 * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
    } else {
        salary = hoursWorked * hourlyRate;
    }

    document.getElementById('result').innerText = `Total Salary: $${salary.toFixed(2)}`;
}
