const InvalidParamError = require('../errors/invalidParamError')
const MissingParamError = require('../errors/missingParamError')
class Hero {
  constructor({ id, name, age, power }) {
    this._validateParams({ id, name, age, power })
    this.id = id
    this.name = name
    this.age = age
    this.power = power
  }

  _validateParams(data) {
    if (!data.id) {
      throw new MissingParamError('id')
    }

    if (typeof data.id !== 'number') {
      throw new InvalidParamError('id')
    }

    if (!data.name) {
      throw new MissingParamError('name')
    }

    if (typeof data.id !== 'string') {
      throw new InvalidParamError('name')
    }

    if (!data.age) {
      throw new MissingParamError('age')
    }

    if (typeof data.age !== 'number') {
      throw new InvalidParamError('age')
    }

    if (!data.power) {
      throw new MissingParamError('power')
    }

    if (typeof data.power !== 'string') {
      throw new InvalidParamError('power')
    }

  }
}

module.exports = Hero