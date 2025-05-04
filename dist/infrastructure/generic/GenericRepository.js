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
exports.GenericRepository = void 0;
class GenericRepository {
    constructor(repository) {
        this.repository = repository;
    }
    findAll() {
        return this.repository.find();
    }
    findById(id) {
        return this.repository.findOneById(id);
    }
    save(item) {
        return this.repository.save(item);
    }
    update(id, newItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.findById(id);
            if (item != null) {
                this.repository.merge(item, newItem);
                return yield this.save(item);
            }
            return item;
        });
    }
}
exports.GenericRepository = GenericRepository;
