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
exports.run = void 0;
const core_1 = require("@actions/core");
const oauth_browser_js_1 = require("@clevercloud/client/esm/oauth.browser.js");
const prefix_url_js_1 = require("@clevercloud/client/esm/prefix-url.js");
const request_superagent_js_1 = require("@clevercloud/client/esm/request.superagent.js");
const application_js_1 = require("@clevercloud/client/esm/api/v2/application.js");
//mport AppConfig from 'clever-tools/src/models/app_configuration.js'
//import git from 'clever-tools/src/models/git.js'
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const organisationId = (0, core_1.getInput)('organisation_id');
        const applicationId = (0, core_1.getInput)('application_id');
        const API_OAUTH_TOKEN = (0, core_1.getInput)('oauth_token');
        const API_OAUTH_TOKEN_SECRET = (0, core_1.getInput)('oauth_secret');
        //const ms: string = core.getInput('milliseconds')
        //core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
        //core.debug(new Date().toTimeString())
        //await wait(parseInt(ms, 10))
        //core.debug(new Date().toTimeString())
        //core.setOutput('time', new Date().toTimeString())
        const API_HOST = 'https://api.clever-cloud.com';
        const tokens = {
            OAUTH_CONSUMER_KEY: 'T5nFjKeHH4AIlEveuGhB5S3xg8T19e',
            OAUTH_CONSUMER_SECRET: 'MgVMqTr6fWlf2M0tkC2MXOnhfqBWDT',
            API_OAUTH_TOKEN,
            API_OAUTH_TOKEN_SECRET,
        };
        const application = yield (0, application_js_1.get)({ id: organisationId, appId: applicationId })
            .then((0, prefix_url_js_1.prefixUrl)(API_HOST))
            .then((0, oauth_browser_js_1.addOauthHeader)(tokens))
            .then(request_superagent_js_1.request);
        (0, core_1.info)(`Deploying your application (${applicationId}) on CleverCloud...`);
        (0, core_1.info)(JSON.stringify(application));
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
        (0, core_1.info)('Deploy order has been queued');
        // fetch logs
    });
}
exports.run = run;
