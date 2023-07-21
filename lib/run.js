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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const core_1 = __importDefault(require("@actions/core"));
//mport AppConfig from 'clever-tools/src/models/app_configuration.js'
//import git from 'clever-tools/src/models/git.js'
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const applicationId = core_1.default.getInput('application_id');
        //const ms: string = core.getInput('milliseconds')
        //core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
        //core.debug(new Date().toTimeString())
        //await wait(parseInt(ms, 10))
        //core.debug(new Date().toTimeString())
        //core.setOutput('time', new Date().toTimeString())
        core_1.default.info(`Deploying your application (${applicationId}) on CleverCloud...`);
        // parse .clever.jsons
        //core.info(`Deploying application ${appId}}]`)
        // add remote
        //await git.addRemote(alias, deployUrl)
        // push
        /*await git.push(deployUrl, branchRefspec, true)
        .catch(async (err: Error) => {
          const isShallow = await git.isShallow()
          if (isShallow) {
            throw new Error('Failed to push your source code because your repository is shallow and therefore cannot be pushed to the Clever Cloud remote.')
          }
          else {
            throw err
          }
        })*/
        core_1.default.info('Deploy order has been queued');
        // fetch logs
    });
}
exports.run = run;
