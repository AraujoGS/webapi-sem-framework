const Hero = require('../entities/hero')
const MissingParamError = require('../errors/missingParamError')

class HeroService {
  constructor({ heroRepository }) {
    this.repository = heroRepository
  }

  async find(itemId) {
    if (!itemId) throw new MissingParamError('id')
    return this.repository.find(itemId)
  }

  async findAll() {
    return this.repository.find()
  }

  async create(data) {
    const totalItens = await this.repository.countItens()
    const hero = new Hero({
      ...data,
      id: totalItens++
    })
    return this.repository.create(hero)
  }
}

module.exports = HeroService