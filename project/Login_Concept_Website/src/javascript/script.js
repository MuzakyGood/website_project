import { BSQL } from "./BSQL/Database.js";

const data = new BSQL();

document.addEventListener('DOMContentLoaded', () => {
    data.debugShowLog();

    console.log('Status = ', data.getMsg());
});