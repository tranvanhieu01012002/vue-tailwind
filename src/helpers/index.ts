const getUrlAllWithFields = (resource: string, fields = "id,name") =>
  `${resource}?fields=${fields}&get-all=1`;
export { getUrlAllWithFields };
export * from "./constants";
