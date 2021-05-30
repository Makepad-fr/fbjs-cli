import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import Conf from 'conf'

export default class Config extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    let willWrite = true
    const config = new Conf()
    if (config.has('username') && config.has('password')) {
      willWrite = (await inquirer.prompt(
        {
          message: 'An existing configuration exists. Do you want to overwrite ?',
          type: 'confirm',
          name: 'willWrite',
        }
      )).willWrite
    }
    if (willWrite) {
      const results =  await inquirer.prompt([
        {
          message: 'Facebook username or email',
          type: 'input',
          name: 'username',
        },
        {
          message: 'Password',
          type: 'password',
          name: 'password',
        },
      ])
      config.set('username', results.username)
      config.set('password', results.password)
    }
  }
}
