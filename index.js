"use strict";
exports.__esModule = true;
var ClassForImplements_1 = require("./basic/ClassForImplements");
var documentOne = new ClassForImplements_1.Invoice('Vinamilk', 'drink milk', 500000000);
var documentTwo = new ClassForImplements_1.Payment('Vietnam Airlines', 'fly', 250000000);
var allDocument = [];
allDocument.push(documentOne);
allDocument.push(documentTwo);
console.log(allDocument);
