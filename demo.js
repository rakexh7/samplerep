// 1. Data pool for our generator
const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Eli"];
const lastNames = ["Smith", "Jones", "Taylor", "Brown", "Wilson"];
const roles = ["Developer", "Designer", "Manager", "Analyst"];

/**
 * 2. Helper function to pick a random item from any array
 * Formula: Math.floor(Math.random() * array.length)
 */
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * 3. Function to generate a full user object
 */
function createRandomUser() {
    const firstName = getRandomItem(firstNames);
    const lastName = getRandomItem(lastNames);
    
    return {
        id: Math.floor(Math.random() * 10000), // Random ID between 0-9999
        fullName: `${firstName} ${lastName}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
        role: getRandomItem(roles),
        isActive: Math.random() > 0.5, // 50/50 chance for true/false
        createdAt: new Date().toLocaleDateString()
    };
}

// 4. Usage: Generate and log a new user
const newUser = createRandomUser();
console.log("Generated User Profile:", newUser);

// 5. Extra Practice: Generate a team of 3 users
const team = Array.from({ length: 3 }, createRandomUser);
console.table(team);
 