declare type Param = object | any[] | string | number | null;
declare type Callback = (arg0: any, arg1?: string) => any;
declare function deepCloneMap<T = Param>(o: T, cb?: Callback): any[] | T;
export default deepCloneMap;
