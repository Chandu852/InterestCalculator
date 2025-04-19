/*def a function to find the interest amount*/
function calcAmount() {
    // Get input values
    let p = parseFloat(document.getElementById("pamt").value);
    let r = parseFloat(document.getElementById("roi").value);
    let t = parseFloat(document.getElementById("Time").value);

    // Validate input
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        alert("CHECK BOSS.");
        return;
    }

    // Calculate simple interest and total amount
    let si = (p * r * t) / 100; // Simple interest
    let ta = p + si; // Total amount

    // Display results
    document.getElementById("intAmt").innerHTML = 'Interest Amount &#8377; ' + si.toFixed(2);
    document.getElementById("totAmt").innerHTML = 'Total Amount &#8377; ' + ta.toFixed(2);
}