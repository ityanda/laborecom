function localDate$1(y, m, d, H, M, S, L) {
    // Construct a new Date object based on the provided parameters
    // Months are 0-indexed in JavaScript Date objects (0 = January, 11 = December)
    let date = new Date(y, m - 1, d, H, M, S, L);

    // Optionally, you can return the Date object or manipulate it further
    return date;
}

// Example usage:
let myDate = localDate$1(2024, 6, 23, 10, 30, 0, 0);
console.log(myDate); // Output: Fri Jun 23 2024 10:30:00 GMT+0000 (Coordinated Universal Time)
