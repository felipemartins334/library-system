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
exports.GetRentalsUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const data_source_1 = require("../../../../infra/database/data-source");
const dayjs_1 = __importDefault(require("dayjs"));
let GetRentalsUseCase = class GetRentalsUseCase {
    execute(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (name) {
                const rentals = yield data_source_1.AppDataSource.manager.query(`SELECT rental.id, rental.start_date, rental.expiration_date, rental.duration, user.name, book.title FROM user INNER JOIN rental ON rental.user_id = user.id INNER JOIN book ON rental.book_id = book.id WHERE user.name LIKE '${name}%'`);
                rentals.forEach(rental => {
                    rental.start_date = (0, dayjs_1.default)(rental.start_date).format("DD-MM-YYYY");
                    rental.expiration_date = (0, dayjs_1.default)(rental.expiration_date).format("DD-MM-YYYY");
                });
                return rentals;
            }
            const rentals = yield data_source_1.AppDataSource.manager.query("SELECT rental.id, rental.start_date, rental.expiration_date, rental.duration, user.name, book.title FROM rental INNER JOIN user ON rental.user_id = user.id INNER JOIN book ON rental.book_id = book.id");
            rentals.forEach(rental => {
                rental.start_date = (0, dayjs_1.default)(rental.start_date).format("DD-MM-YYYY");
                rental.expiration_date = (0, dayjs_1.default)(rental.expiration_date).format("DD-MM-YYYY");
            });
            return rentals;
        });
    }
};
GetRentalsUseCase = __decorate([
    (0, tsyringe_1.injectable)()
], GetRentalsUseCase);
exports.GetRentalsUseCase = GetRentalsUseCase;
