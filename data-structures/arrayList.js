class ArrayList {
  constructor() {
    this.length = 0
    this.data = {}
  }
  
  push(value) {
    this.data[this.length] = value
    this.length++
  }

  pop() {
    const item = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return item
  }

  get(index) {
    return this.data[index]
  }

  delete(index) {
    const item = this.data[index]
    this._collapseTo(index)
    return item
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--
  }

  serialize() {
    return this.data
  }
}

const list = new ArrayList()
list.push('a')
list.push('b')
console.log(list.serialize())
list.pop()
console.log(list.serialize())
console.log('get 0: ', list.get(0))
list.push('c')
list.push('d')
list.push('e')
list.delete(0)
console.log(list.serialize())

