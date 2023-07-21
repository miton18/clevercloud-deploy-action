import { setFailed } from '@actions/core'
import { run } from './run'

try {
  run()
}
catch (err) {
  if (err instanceof Error) setFailed(err.message)
  else if (typeof err === 'string') setFailed(err)
  else console.error(JSON.stringify(err))
}
