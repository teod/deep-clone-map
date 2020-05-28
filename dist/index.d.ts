declare type Callback = (arg0: any, arg1?: string) => any;
declare function deepCloneMap<T>(o: T, cb?: Callback): T;
export default deepCloneMap;
