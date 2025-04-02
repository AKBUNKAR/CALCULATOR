// Load saved values from localStorage
document.addEventListener("DOMContentLoaded", function () {
    const slPoints = localStorage.getItem('slPoints') || 0;
    const targetPoints = localStorage.getItem('targetPoints') || 0;
    
    console.log("SL Points from LocalStorage:", slPoints); // Debugging
    console.log("Target Points from LocalStorage:", targetPoints); // Debugging

    document.getElementById('slPoints').value = slPoints;
    document.getElementById('targetPoints').value = targetPoints;
    calculate();
});

document.getElementById('entry').addEventListener('input', function() {
    console.log("Entry Price:", this.value); // Debugging
    calculate();
});

document.getElementById('slPoints').addEventListener('input', function() {
    localStorage.setItem('slPoints', this.value);
    console.log("SL Points saved:", this.value); // Debugging
    calculate();
});

document.getElementById('targetPoints').addEventListener('input', function() {
    localStorage.setItem('targetPoints', this.value);
    console.log("Target Points saved:", this.value); // Debugging
    calculate();
});

function calculate() {
    let entry = parseFloat(document.getElementById('entry').value) || 0;
    let slPoints = parseFloat(document.getElementById('slPoints').value) || 0;
    let targetPoints = parseFloat(document.getElementById('targetPoints').value) || 0;

    console.log("Entry Price:", entry); // Debugging
    console.log("SL Points:", slPoints); // Debugging
    console.log("Target Points:", targetPoints); // Debugging
    
    // Ensure values are valid
    if (entry > 0) {
        document.getElementById('sl').value = entry - slPoints;
        document.getElementById('target').value = entry + targetPoints;
    } else {
        document.getElementById('sl').value = '';
        document.getElementById('target').value = '';
    }
}
