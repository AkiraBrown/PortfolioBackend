var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var blogDB = require("../db/dbConfig.ts");
var getAllBlogs = function () { return __awaiter(_this, void 0, void 0, function () {
    var allBlogs, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogDB.any("SELECT * FROM blogs")];
            case 1:
                allBlogs = _a.sent();
                return [2 /*return*/, allBlogs];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, error_1];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getOneBlog = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var selectBlog, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogDB.one("SELECT * FROM blogs WHERE id=$1", [
                        id,
                    ])];
            case 1:
                selectBlog = _a.sent();
                return [2 /*return*/, selectBlog];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, error_2];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateBlog = function (_a) { return __awaiter(_this, [_a], void 0, function (_b) {
    var updatedBlog, error_3;
    var id = _b.id, title = _b.title;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogDB.one("UPDATE blogs SET title=$1 WHERE id=$2 RETURNING *", [title, id])];
            case 1:
                updatedBlog = _c.sent();
                return [2 /*return*/, updatedBlog];
            case 2:
                error_3 = _c.sent();
                return [2 /*return*/, error_3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createBlog = function (_a) { return __awaiter(_this, [_a], void 0, function (_b) {
    var newBlog, error_4;
    var title = _b.title, date_uploaded = _b.date_uploaded, file_path = _b.file_path;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogDB.one("INSERT INTO blogs(title, date_uploaded, file_path) VALUES($1,$2,$3) RETURNING *", [title, date_uploaded, file_path])];
            case 1:
                newBlog = _c.sent();
                return [2 /*return*/, newBlog];
            case 2:
                error_4 = _c.sent();
                return [2 /*return*/, error_4];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteBlog = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var deletedBlog, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogDB.one("DELETE FROM blogs WHERE id=$1 RETURNING *", [id])];
            case 1:
                deletedBlog = _a.sent();
                return [2 /*return*/, deletedBlog];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, error_5];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports = {
    getAllBlogs: getAllBlogs,
    getOneBlog: getOneBlog,
    updateBlog: updateBlog,
    createBlog: createBlog,
    deleteBlog: deleteBlog,
};