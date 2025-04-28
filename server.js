const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "https://prueba-tecnica-deiby.netlify.app",
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

app.listen(PORT, () => {
  console.log("Servidor en ", PORT);
});
