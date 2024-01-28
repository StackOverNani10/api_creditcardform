import app from "./app.js";
const PORT = 3500;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
    console.log("Aplication name", app.get("name"));
})