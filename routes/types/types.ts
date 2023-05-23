export type Query<TQuery extends object> = {
  [Key in keyof Partial<TQuery>]: TQuery[Key];
};
