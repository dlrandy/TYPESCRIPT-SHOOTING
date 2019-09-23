type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose: string = 'dance';
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}
class Sneaker implements Shoe {
  purpose = 'walking'
}

let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'):Shoe{
    switch (type) {
      case 'balletFlat':
        return new BalletFlat
      case 'boot':
        return new Boot
      case 'sneaker':
        return new Sneaker
    }
  }
}


class RequestBuilder {
  private data: object | null = null
  private method: 'get' | 'post' | null = null
  private url: string | null = null
  constructor() {
    
  }

  setMethod(method: 'get' | 'post'):this{
    this.method = method
    return this
  }

  setData(data: object):this{
    this.data = data
    return this
  }
  setUrl(url: string): this{
    this.url = url
    return this
  }
  send(){
    
  }
}

new RequestBuilder()
  .setUrl('/users')
  .setMethod('get')
  .setData({firstName: 'Anna'})
  .send()












