"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateBookUseCase_1 = require("./CreateBookUseCase");
class CreateBookController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { author, quantity, title, volume, year, genre } = request.body;
            const createBookUseCase = tsyringe_1.container.resolve(CreateBookUseCase_1.CreateBookUseCase);
            yield createBookUseCase.execute({
                author,
                quantity,
                title,
                volume,
                year,
                genre
            });
            return response.status(201).send();
        });
    }
}
exports.CreateBookController = CreateBookController;
