export class DIProvider {

  private static _instance: DIProvider = null;

  private constructor() {
    // todo
  }

  static getInstance(): DIProvider {
    return this._instance ?? new DIProvider()
  }

}