import {Command, flags} from '@oclif/command'
import {FB} from '@makepad/fbjs'
import Conf from 'conf'
import * as inquirer from 'inquirer'
import * as fs from 'fs'

export default class GroupsGet extends Command {
  static description = 'describe the command here'

  async run() {
    const {args, flags} = this.parse(GroupsGet)
  }
}
