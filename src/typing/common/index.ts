export type TUnPacked<T> = T extends (infer U)[] ? U : T;

export type TModifyToString<T> = Omit<T, keyof T> & { [K in keyof T]: string };
