class Cdn {

  constructor() {
    this.host = 'http://cdn.control.fitness';
  }

  /**
   * Return image url
   * @param  {String} fileName [foo-bar.png]
   * @return {String}
   */
  image(fileName) {
    return `${this.host}/images/${fileName}`;
  }

}

export default new Cdn();
