type FirebaseDatabaseWriters<T = any> = {
  set: (val: T) => T | Promise<T>,
  transaction: (<T> (a: T) => T) | ((transactionUpdate: (a: any) => any, onComplete?: ((a: Error | null, b: boolean, c: firebase.database.DataSnapshot | null) => any) | undefined, applyLocally?: boolean | undefined) => Promise<T>),
  update: (<T>(a: T) => T) | ((values: Object, onComplete?: ((a: Error | null) => any) | undefined) => Promise<any>)
}

export default FirebaseDatabaseWriters