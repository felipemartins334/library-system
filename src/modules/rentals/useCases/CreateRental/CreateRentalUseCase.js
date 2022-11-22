"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRentalUseCase = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const tsyringe_1 = require("tsyringe");
const data_source_1 = require("../../../../infra/database/data-source");
const Book_1 = require("../../../books/infra/typeorm/entities/Book");
const Rental_1 = require("../../infra/typeorm/entities/Rental");
let CreateRentalUseCase = class CreateRentalUseCase {
    execute({ book_id, duration, user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const rentalRepository = data_source_1.AppDataSource.getRepository(Rental_1.Rental);
            const bookRepository = data_source_1.AppDataSource.getRepository(Book_1.Book);
            const book = yield bookRepository.findOneBy({ id: book_id });
            bookRepository.save(book);
            const start_date = (0, dayjs_1.default)();
            const end_date = start_date.add(duration, 'day');
            const start_dateToDate = start_date.toDate();
            const end_dateToDate = end_date.toDate();
            const rental = new Rental_1.Rental(user_id, book_id, duration, start_dateToDate, end_dateToDate);
            yield rentalRepository.save(rental);
        });
    }
};
CreateRentalUseCase = __decorate([
    (0, tsyringe_1.injectable)()
], CreateRentalUseCase);
exports.CreateRentalUseCase = CreateRentalUseCase;
