export class ModelPropertiesMapper<T> {
  constructor(private modelType: new () => T) {}

  mapOne(rawModel: object) {
    let modelInstance = new this.modelType();
    let properties = Object.getOwnPropertyNames(modelInstance);
    properties.forEach(p => {
      modelInstance[p] = rawModel[p];
    });
    return modelInstance;
  }

  mapMany(rawModel: Array<object>) {
    return rawModel.map(x => {
      let modelInstance = new this.modelType();
      let properties = Object.getOwnPropertyNames(modelInstance);
      properties.forEach(p => {
        modelInstance[p] = x[p];
      });
      return modelInstance;
    });
  }
}
