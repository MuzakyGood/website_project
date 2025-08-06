import { BSQL } from "./BSQL/Database.js";

const data = new BSQL();

document.addEventListener('DOMContentLoaded', () => {
    data.debugShowLog();
});