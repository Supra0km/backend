import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({},[
      rules.required()

    ]),
    email: schema.string({},[
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email'}),

    ]),
    password: schema.string({},[
      rules.required(),
      rules.minLength(4)
    ]),
  })

  public messages: CustomMessages = {

    required: "O {{ field }} é obrigatório!!!",
    'email.unique': "E-mail já cadastrado!!!",
    'minLength': "Senha muito pequena!!!"

  }
}
