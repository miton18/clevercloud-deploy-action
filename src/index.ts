import * as core from '@actions/core'
import { run } from './run'

try {
  run()
}
catch (err) {
  if (err instanceof Error) core.setFailed(err.message)
  else if (typeof err === 'string') core.setFailed(err)
  else console.error(JSON.stringify(err))
}
