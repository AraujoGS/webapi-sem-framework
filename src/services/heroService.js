const Hero = require('../entities/Hero')

class HeroService {
  constructor({ heroRepository }) {
    this.repository = heroRepository
  }

  async find(itemId) {
    if (!itemId) throw new Error('É necessário informar o id')
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