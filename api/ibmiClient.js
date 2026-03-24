// ibmiClient.js
// In a real setup, this module would call an RPG program on IBM i,
// e.g., via REST, database call, or program call.
// For v0.1, we simulate the response.

async function getOrderById(orderId) {
  // Simulated data; replace with real IBM i call later.
  if (orderId === "ORD1001") {
    return {
      orderId: "ORD1001",
      status: "SHIPPED",
      totalAmount: 125.5,
      currency: "USD"
    };
  }

  // Default "not found" style response
  return null;
}

module.exports = { getOrderById };
