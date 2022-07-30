const Hero = require('../entities/hero')
const MissingParamError = require('../errors/missingParamError')
const InvalidParamError = require('../errors/invalidParamError')

class HeroService {
  constructor({ heroRepository }) {
    this.repository = heroRepository
  }

  async find(itemId) {
    if (!itemId) throw new MissingParamError('id')
    if (typeof itemId !== 'number') throw new InvalidParamError('id')
    return this.repository.find(itemId)
  }

  async findAll() {
    return this.repository.find()
  }

  async create(data) {
    const totalItens = await this.repository.countItens()
    const hero = new Hero({
      ...data,
      id: (totalItens + 1)
    })
    return this.repository.create(hero)
  }
}

module.exports = HeroService