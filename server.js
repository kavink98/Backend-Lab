"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(3000);
app.get('/html', (req, res) => {
    res.send('<html><body><h1>Hello World!</h1></body></html>');
});
app.get('/json', (req, res) => {
    res.send({ firsName: 'John', lastName: 'doe' });
});
