const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

const SECRET_KEY = "firma_prueba_de_maxima_seguridad_xd";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@example.com" && password === "123456") {
    const payload = {
      email,
      role: "admin",
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    res.json({ isValidate: true, token });
  } else {
    res.json({ isValidate: false, message: "Las credenciales son inválidas" });
  }
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
