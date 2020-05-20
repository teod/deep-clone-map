declare type Param = object | any[] | string | number | null;
declare type Callback = (arg0: any, arg1?: string) => any;
declare const _default: <T = Param>(param: T, callback?: Callback) => T;
export default _default;
