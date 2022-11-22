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
exports.GetBooksController = void 0;
const tsyringe_1 = require("tsyringe");
const GetBooksUseCase_1 = require("./GetBooksUseCase");
class GetBooksController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = request.query.title;
            const getBooksUseCase = tsyringe_1.container.resolve(GetBooksUseCase_1.GetBooksUseCase);
            const books = yield getBooksUseCase.execute(title);
            return response.status(200).json(books);
        });
    }
}
exports.GetBooksController = GetBooksController;
