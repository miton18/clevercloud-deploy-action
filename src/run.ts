import { getInput, info, } from '@actions/core'
import { addOauthHeader } from '@clevercloud/client/esm/oauth.browser.js'
import { prefixUrl } from '@clevercloud/client/esm/prefix-url.js'
import { request } from '@clevercloud/client/esm/request.superagent.js'
import { get as getApplication } from '@clevercloud/client/esm/api/v2/application.js'

//mport AppConfig from 'clever-tools/src/models/app_configuration.js'
//import git from 'clever-tools/src/models/git.js'

export async function run(): Promise<void> {
  const organisationId = getInput('organisation_id')
  const applicationId = getInput('application_id')
  const API_OAUTH_TOKEN = getInput('oauth_token')
  const API_OAUTH_TOKEN_SECRET = getInput('oauth_secret')
  //const ms: string = core.getInput('milliseconds')
  //core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
  //core.debug(new Date().toTimeString())
  //await wait(parseInt(ms, 10))
  //core.debug(new Date().toTimeString())
  //core.setOutput('time', new Date().toTimeString())
  const API_HOST = 'https://api.clever-cloud.com'
  const tokens = {
    OAUTH_CONSUMER_KEY: 'T5nFjKeHH4AIlEveuGhB5S3xg8T19e',
    OAUTH_CONSUMER_SECRET: 'MgVMqTr6fWlf2M0tkC2MXOnhfqBWDT',
    API_OAUTH_TOKEN,
    API_OAUTH_TOKEN_SECRET,
  }

  const application = await getApplication({id: organisationId, appId: applicationId})
    .then(prefixUrl(API_HOST))
    .then(addOauthHeader(tokens))
    .then(request)

  info(`Deploying your application (${applicationId}) on CleverCloud...`)
  info(JSON.stringify(application))

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

  info('Deploy order has been queued')
  // fetch logs
}
