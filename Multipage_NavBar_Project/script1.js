// 1. LIVE CLOCK FUNCTION
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

// Run clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call so it doesn't wait 1 second to start


// 2. GREETING FUNCTION
function sayHello() {
    const input = document.getElementById('userName');
    const display = document.getElementById('greetingText');
    
    if (input.value.trim() !== "") {
        display.textContent = `Hello, ${input.value}! 👋`;
        input.value = ""; // Clear input after clicking
 } else {
        alert("Please enter a name first!");
    }
}


// 3. THEME TOGGLE FUNCTION
function toggleTheme() {
    // This looks at the <body> and adds/removes 
        //the 'dark-mode' class
    document.body.classList.toggle('dark-mode');
}
