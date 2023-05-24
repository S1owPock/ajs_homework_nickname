export default class Validator {
  static validateUsername(nickName) {
    const symbolsToUse = /^[a-zA-Z]([a-zA-Z-_\d]*[a-zA-Z])$/.test(nickName);
    const exceptThreeNumbersInRow = !/\d{4,}/.test(nickName);
    return symbolsToUse && exceptThreeNumbersInRow;
  }
}
