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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.__esModule = true;
var api_1 = require("@polkadot/api");
var wsProvider = new api_1.WsProvider('ws://104.238.205.8:9301');
var ce = getCurrentEra().then(function (current_era) {
    //showNominations(['14Ns6kKbCoka3MS4Hn6b7oRw9fFejG8RH5rq5j63cWUfpPDJ', '12RYJb5gG4hfoWPK3owEYtmWoko8G6zwYpvDYTyXFVSfJr8Y','16GMHo9HZv8CcJy4WLoMaU9qusgzx2wxKDLbXStEBvt5274B'], current_era);
    //showNominations(['14Ns6kKbCoka3MS4Hn6b7oRw9fFejG8RH5rq5j63cWUfpPDJ', '12RYJb5gG4hfoWPK3owEYtmWoko8G6zwYpvDYTyXFVSfJr8Y', '16GMHo9HZv8CcJy4WLoMaU9qusgzx2wxKDLbXStEBvt5274B'], current_era - 1);
    //showNominations(['14Ns6kKbCoka3MS4Hn6b7oRw9fFejG8RH5rq5j63cWUfpPDJ', '12RYJb5gG4hfoWPK3owEYtmWoko8G6zwYpvDYTyXFVSfJr8Y', '16GMHo9HZv8CcJy4WLoMaU9qusgzx2wxKDLbXStEBvt5274B'], current_era - 2);
    //console.log('Current era:' + current_era);
    getEraNominators(current_era);
});
function getEraNominators(requested_era) {
    return __awaiter(this, void 0, void 0, function () {
        var api, promises, era, bh, nom_results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.ApiPromise.create({ provider: wsProvider })];
                case 1:
                    api = _a.sent();
                    promises = [];
                    era = new Era();
                    return [4 /*yield*/, getBlockForEra(requested_era).then(function (era_hash) {
                            return era_hash;
                        })];
                case 2:
                    bh = _a.sent();
                    era.era = requested_era;
                    era.blockhash = bh;
                    return [4 /*yield*/, api.query.staking.nominators.entriesAt(bh).then(function (nominations) {
                            var _loop_1 = function (nom_address, validators) {
                                var nominator = new Nominator();
                                nominator.address = nom_address.toHuman().toString();
                                var nom_bond = api.query.balances.account(nom_address).then(function (x) {
                                    nominator.bond = x.toString();
                                    return "finished";
                                });
                                promises.push(nom_bond);
                                //console.log('length:'+validators.unwrapOrDefault().targets.length);
                                for (var i = 0; i < validators.unwrapOrDefault().targets.length; i++) {
                                    var validator = new Validator();
                                    validator.address = validators.unwrapOrDefault().targets[i].toHuman();
                                    nominator.validators.push(validator);
                                }
                                era.nominators.push(nominator);
                            };
                            for (var _i = 0, nominations_1 = nominations; _i < nominations_1.length; _i++) {
                                var _a = nominations_1[_i], nom_address = _a[0], validators = _a[1];
                                _loop_1(nom_address, validators);
                            }
                        })];
                case 3:
                    nom_results = _a.sent();
                    promises.push(nom_results);
                    Promise.all(promises).then(function (values) {
                        console.log(era);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function getCurrentEra() {
    return __awaiter(this, void 0, void 0, function () {
        var api, active_era;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.ApiPromise.create({ provider: wsProvider })];
                case 1:
                    api = _a.sent();
                    return [4 /*yield*/, api.query.staking.activeEra().then(function (x) {
                            return x.unwrapOrDefault().index.toNumber();
                        })];
                case 2:
                    active_era = _a.sent();
                    return [2 /*return*/, active_era];
            }
        });
    });
}
function getBlockForEra(desired_era) {
    return __awaiter(this, void 0, void 0, function () {
        var api, currentBlock, blockNumber, blockHash, active_era;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.ApiPromise.create({ provider: wsProvider })];
                case 1:
                    api = _a.sent();
                    return [4 /*yield*/, api.rpc.chain.getBlock()];
                case 2:
                    currentBlock = _a.sent();
                    blockNumber = currentBlock.block.header.number.toNumber();
                    return [4 /*yield*/, api.rpc.chain.getBlockHash(blockNumber).then(function (x) {
                            return x;
                        })];
                case 3:
                    blockHash = _a.sent();
                    return [4 /*yield*/, api.query.staking.activeEra().then(function (x) {
                            return x.unwrapOrDefault().index.toNumber();
                        })];
                case 4:
                    active_era = _a.sent();
                    console.log("Current era:" + active_era);
                    console.log("Attempting to find desired era");
                    _a.label = 5;
                case 5:
                    if (!(desired_era != active_era)) return [3 /*break*/, 8];
                    blockNumber -= 1000;
                    return [4 /*yield*/, api.rpc.chain.getBlockHash(blockNumber).then(function (bh) {
                            return bh;
                        })];
                case 6:
                    blockHash = _a.sent();
                    return [4 /*yield*/, api.query.staking.activeEra.at(blockHash).then(function (x) {
                            return x.unwrapOrDefault().index.toNumber();
                        })];
                case 7:
                    active_era = _a.sent();
                    console.log("Found era:" + active_era);
                    return [3 /*break*/, 5];
                case 8:
                    console.log("Success, blockhash: " + blockHash.hash.toHuman());
                    return [2 /*return*/, blockHash];
            }
        });
    });
}
var Nominator = /** @class */ (function () {
    function Nominator() {
        this.address = "none";
        this.bond = "-1";
        this.validators = new Array();
    }
    return Nominator;
}());
var Validator = /** @class */ (function () {
    function Validator() {
        this.address = "";
        this.bond = "";
        this.commission = 0;
    }
    return Validator;
}());
var Era = /** @class */ (function () {
    function Era() {
        this.era = -1;
        this.network = -1;
        this.nominators = new Array();
    }
    return Era;
}());
