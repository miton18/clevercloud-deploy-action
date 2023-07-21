import { getInput, info } from '@actions/core'
//mport AppConfig from 'clever-tools/src/models/app_configuration.js'
//import git from 'clever-tools/src/models/git.js'

export async function run(): Promise<void> {
  const applicationId = getInput('application_id')
  //const ms: string = core.getInput('milliseconds')
  //core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
  //core.debug(new Date().toTimeString())
  //await wait(parseInt(ms, 10))
  //core.debug(new Date().toTimeString())
  //core.setOutput('time', new Date().toTimeString())
  info(`Deploying your application (${applicationId}) on CleverCloud...`)

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
