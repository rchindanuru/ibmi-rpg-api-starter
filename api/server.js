const express = require("express");
const { getOrderById } = require("./ibmiClient");

const app = express();
const port = process.env.PORT || 3000;

// Simple health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Example: GET /api/orders/:id
app.get("/api/orders/:id", async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await getOrderById(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    return res.json(order);
  } catch (err) {
    console.error("Error getting order:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`IBM i RPG API starter listening on port ${port}`);
});
