document.addEventListener("DOMContentLoaded", () => {
    const graphContainer = document.getElementById("graph");
    
    // We want 53 columns and 7 rows (371 days)
    const totalDays = 53 * 7;
    
    // Generate random contribution levels (0 to 4)
    // We want mostly 0s, and some 1-4s to mimic a real graph
    for (let i = 0; i < totalDays; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        
        // Randomly assign a contribution level
        // Adjust probabilities to make it look realistic
        const rand = Math.random();
        let level = 0;
        
        if (rand > 0.95) level = 4;
        else if (rand > 0.85) level = 3;
        else if (rand > 0.70) level = 2;
        else if (rand > 0.50) level = 1;
        
        // You can leave some completely empty periods
        if (i > 100 && i < 120) level = 0; 
        
        day.setAttribute("data-level", level);
        graphContainer.appendChild(day);
    }
});
