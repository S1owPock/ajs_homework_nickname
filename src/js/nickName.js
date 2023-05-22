export default class Validator {
  static validateUsername(nickName) {
    const symbolsToUse = /^([^\d-\W])([a-zA-Z-_\d]*)([^\d-_\W])+$/.test(nickName);
    const exeptThreeNumbersInRow = !/\d{4,}/.test(nickName);
    return symbolsToUse && exeptThreeNumbersInRow;
  }
}
