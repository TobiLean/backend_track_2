
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organisation
 * 
 */
export type Organisation = $Result.DefaultSelection<Prisma.$OrganisationPayload>
/**
 * Model OrganisationsAndUsers
 * 
 */
export type OrganisationsAndUsers = $Result.DefaultSelection<Prisma.$OrganisationsAndUsersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.organisation`: Exposes CRUD operations for the **Organisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisation.findMany()
    * ```
    */
  get organisation(): Prisma.OrganisationDelegate<ExtArgs>;

  /**
   * `prisma.organisationsAndUsers`: Exposes CRUD operations for the **OrganisationsAndUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganisationsAndUsers
    * const organisationsAndUsers = await prisma.organisationsAndUsers.findMany()
    * ```
    */
  get organisationsAndUsers(): Prisma.OrganisationsAndUsersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Organisation: 'Organisation',
    OrganisationsAndUsers: 'OrganisationsAndUsers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "organisation" | "organisationsAndUsers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organisation: {
        payload: Prisma.$OrganisationPayload<ExtArgs>
        fields: Prisma.OrganisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          findFirst: {
            args: Prisma.OrganisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          findMany: {
            args: Prisma.OrganisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          create: {
            args: Prisma.OrganisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          createMany: {
            args: Prisma.OrganisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganisationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          delete: {
            args: Prisma.OrganisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          update: {
            args: Prisma.OrganisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          deleteMany: {
            args: Prisma.OrganisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          aggregate: {
            args: Prisma.OrganisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisation>
          }
          groupBy: {
            args: Prisma.OrganisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganisationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationCountAggregateOutputType> | number
          }
        }
      }
      OrganisationsAndUsers: {
        payload: Prisma.$OrganisationsAndUsersPayload<ExtArgs>
        fields: Prisma.OrganisationsAndUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganisationsAndUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganisationsAndUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload>
          }
          findFirst: {
            args: Prisma.OrganisationsAndUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganisationsAndUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload>
          }
          findMany: {
            args: Prisma.OrganisationsAndUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload>[]
          }
          create: {
            args: Prisma.OrganisationsAndUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload>
          }
          createMany: {
            args: Prisma.OrganisationsAndUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganisationsAndUsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload>[]
          }
          delete: {
            args: Prisma.OrganisationsAndUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload>
          }
          update: {
            args: Prisma.OrganisationsAndUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload>
          }
          deleteMany: {
            args: Prisma.OrganisationsAndUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganisationsAndUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganisationsAndUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsAndUsersPayload>
          }
          aggregate: {
            args: Prisma.OrganisationsAndUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisationsAndUsers>
          }
          groupBy: {
            args: Prisma.OrganisationsAndUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationsAndUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganisationsAndUsersCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationsAndUsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    OrganisationsAndUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrganisationsAndUsers?: boolean | UserCountOutputTypeCountOrganisationsAndUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganisationsAndUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationsAndUsersWhereInput
  }


  /**
   * Count Type OrganisationCountOutputType
   */

  export type OrganisationCountOutputType = {
    OrganisationsAndUsers: number
  }

  export type OrganisationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrganisationsAndUsers?: boolean | OrganisationCountOutputTypeCountOrganisationsAndUsersArgs
  }

  // Custom InputTypes
  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationCountOutputType
     */
    select?: OrganisationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountOrganisationsAndUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationsAndUsersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    firstName: number
    lastName: number
    email: number
    password: number
    phone: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    OrganisationsAndUsers?: boolean | User$OrganisationsAndUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrganisationsAndUsers?: boolean | User$OrganisationsAndUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      OrganisationsAndUsers: Prisma.$OrganisationsAndUsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      firstName: string
      lastName: string
      email: string
      password: string
      phone: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrganisationsAndUsers<T extends User$OrganisationsAndUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$OrganisationsAndUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.OrganisationsAndUsers
   */
  export type User$OrganisationsAndUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    where?: OrganisationsAndUsersWhereInput
    orderBy?: OrganisationsAndUsersOrderByWithRelationInput | OrganisationsAndUsersOrderByWithRelationInput[]
    cursor?: OrganisationsAndUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganisationsAndUsersScalarFieldEnum | OrganisationsAndUsersScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Organisation
   */

  export type AggregateOrganisation = {
    _count: OrganisationCountAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  export type OrganisationMinAggregateOutputType = {
    orgId: string | null
    name: string | null
    description: string | null
  }

  export type OrganisationMaxAggregateOutputType = {
    orgId: string | null
    name: string | null
    description: string | null
  }

  export type OrganisationCountAggregateOutputType = {
    orgId: number
    name: number
    description: number
    _all: number
  }


  export type OrganisationMinAggregateInputType = {
    orgId?: true
    name?: true
    description?: true
  }

  export type OrganisationMaxAggregateInputType = {
    orgId?: true
    name?: true
    description?: true
  }

  export type OrganisationCountAggregateInputType = {
    orgId?: true
    name?: true
    description?: true
    _all?: true
  }

  export type OrganisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisation to aggregate.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organisations
    **/
    _count?: true | OrganisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationMaxAggregateInputType
  }

  export type GetOrganisationAggregateType<T extends OrganisationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisation[P]>
      : GetScalarType<T[P], AggregateOrganisation[P]>
  }




  export type OrganisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationWhereInput
    orderBy?: OrganisationOrderByWithAggregationInput | OrganisationOrderByWithAggregationInput[]
    by: OrganisationScalarFieldEnum[] | OrganisationScalarFieldEnum
    having?: OrganisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationCountAggregateInputType | true
    _min?: OrganisationMinAggregateInputType
    _max?: OrganisationMaxAggregateInputType
  }

  export type OrganisationGroupByOutputType = {
    orgId: string
    name: string
    description: string | null
    _count: OrganisationCountAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  type GetOrganisationGroupByPayload<T extends OrganisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
        }
      >
    >


  export type OrganisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orgId?: boolean
    name?: boolean
    description?: boolean
    OrganisationsAndUsers?: boolean | Organisation$OrganisationsAndUsersArgs<ExtArgs>
    _count?: boolean | OrganisationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orgId?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectScalar = {
    orgId?: boolean
    name?: boolean
    description?: boolean
  }

  export type OrganisationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrganisationsAndUsers?: boolean | Organisation$OrganisationsAndUsersArgs<ExtArgs>
    _count?: boolean | OrganisationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganisationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organisation"
    objects: {
      OrganisationsAndUsers: Prisma.$OrganisationsAndUsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      orgId: string
      name: string
      description: string | null
    }, ExtArgs["result"]["organisation"]>
    composites: {}
  }

  type OrganisationGetPayload<S extends boolean | null | undefined | OrganisationDefaultArgs> = $Result.GetResult<Prisma.$OrganisationPayload, S>

  type OrganisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganisationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganisationCountAggregateInputType | true
    }

  export interface OrganisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organisation'], meta: { name: 'Organisation' } }
    /**
     * Find zero or one Organisation that matches the filter.
     * @param {OrganisationFindUniqueArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganisationFindUniqueArgs>(args: SelectSubset<T, OrganisationFindUniqueArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organisation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganisationFindUniqueOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganisationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganisationFindFirstArgs>(args?: SelectSubset<T, OrganisationFindFirstArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganisationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisation.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisation.findMany({ take: 10 })
     * 
     * // Only select the `orgId`
     * const organisationWithOrgIdOnly = await prisma.organisation.findMany({ select: { orgId: true } })
     * 
     */
    findMany<T extends OrganisationFindManyArgs>(args?: SelectSubset<T, OrganisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organisation.
     * @param {OrganisationCreateArgs} args - Arguments to create a Organisation.
     * @example
     * // Create one Organisation
     * const Organisation = await prisma.organisation.create({
     *   data: {
     *     // ... data to create a Organisation
     *   }
     * })
     * 
     */
    create<T extends OrganisationCreateArgs>(args: SelectSubset<T, OrganisationCreateArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organisations.
     * @param {OrganisationCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganisationCreateManyArgs>(args?: SelectSubset<T, OrganisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organisations and returns the data saved in the database.
     * @param {OrganisationCreateManyAndReturnArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organisations and only return the `orgId`
     * const organisationWithOrgIdOnly = await prisma.organisation.createManyAndReturn({ 
     *   select: { orgId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganisationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organisation.
     * @param {OrganisationDeleteArgs} args - Arguments to delete one Organisation.
     * @example
     * // Delete one Organisation
     * const Organisation = await prisma.organisation.delete({
     *   where: {
     *     // ... filter to delete one Organisation
     *   }
     * })
     * 
     */
    delete<T extends OrganisationDeleteArgs>(args: SelectSubset<T, OrganisationDeleteArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organisation.
     * @param {OrganisationUpdateArgs} args - Arguments to update one Organisation.
     * @example
     * // Update one Organisation
     * const organisation = await prisma.organisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganisationUpdateArgs>(args: SelectSubset<T, OrganisationUpdateArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organisations.
     * @param {OrganisationDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganisationDeleteManyArgs>(args?: SelectSubset<T, OrganisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganisationUpdateManyArgs>(args: SelectSubset<T, OrganisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organisation.
     * @param {OrganisationUpsertArgs} args - Arguments to update or create a Organisation.
     * @example
     * // Update or create a Organisation
     * const organisation = await prisma.organisation.upsert({
     *   create: {
     *     // ... data to create a Organisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisation we want to update
     *   }
     * })
     */
    upsert<T extends OrganisationUpsertArgs>(args: SelectSubset<T, OrganisationUpsertArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisation.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends OrganisationCountArgs>(
      args?: Subset<T, OrganisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganisationAggregateArgs>(args: Subset<T, OrganisationAggregateArgs>): Prisma.PrismaPromise<GetOrganisationAggregateType<T>>

    /**
     * Group by Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganisationGroupByArgs['orderBy'] }
        : { orderBy?: OrganisationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organisation model
   */
  readonly fields: OrganisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrganisationsAndUsers<T extends Organisation$OrganisationsAndUsersArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$OrganisationsAndUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organisation model
   */ 
  interface OrganisationFieldRefs {
    readonly orgId: FieldRef<"Organisation", 'String'>
    readonly name: FieldRef<"Organisation", 'String'>
    readonly description: FieldRef<"Organisation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organisation findUnique
   */
  export type OrganisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation findUniqueOrThrow
   */
  export type OrganisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation findFirst
   */
  export type OrganisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation findFirstOrThrow
   */
  export type OrganisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation findMany
   */
  export type OrganisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation create
   */
  export type OrganisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organisation.
     */
    data: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
  }

  /**
   * Organisation createMany
   */
  export type OrganisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationCreateManyInput | OrganisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organisation createManyAndReturn
   */
  export type OrganisationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationCreateManyInput | OrganisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organisation update
   */
  export type OrganisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organisation.
     */
    data: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
    /**
     * Choose, which Organisation to update.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation updateMany
   */
  export type OrganisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationWhereInput
  }

  /**
   * Organisation upsert
   */
  export type OrganisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organisation to update in case it exists.
     */
    where: OrganisationWhereUniqueInput
    /**
     * In case the Organisation found by the `where` argument doesn't exist, create a new Organisation with this data.
     */
    create: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
    /**
     * In case the Organisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
  }

  /**
   * Organisation delete
   */
  export type OrganisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter which Organisation to delete.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation deleteMany
   */
  export type OrganisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisations to delete
     */
    where?: OrganisationWhereInput
  }

  /**
   * Organisation.OrganisationsAndUsers
   */
  export type Organisation$OrganisationsAndUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    where?: OrganisationsAndUsersWhereInput
    orderBy?: OrganisationsAndUsersOrderByWithRelationInput | OrganisationsAndUsersOrderByWithRelationInput[]
    cursor?: OrganisationsAndUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganisationsAndUsersScalarFieldEnum | OrganisationsAndUsersScalarFieldEnum[]
  }

  /**
   * Organisation without action
   */
  export type OrganisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
  }


  /**
   * Model OrganisationsAndUsers
   */

  export type AggregateOrganisationsAndUsers = {
    _count: OrganisationsAndUsersCountAggregateOutputType | null
    _min: OrganisationsAndUsersMinAggregateOutputType | null
    _max: OrganisationsAndUsersMaxAggregateOutputType | null
  }

  export type OrganisationsAndUsersMinAggregateOutputType = {
    user_id: string | null
    org_id: string | null
  }

  export type OrganisationsAndUsersMaxAggregateOutputType = {
    user_id: string | null
    org_id: string | null
  }

  export type OrganisationsAndUsersCountAggregateOutputType = {
    user_id: number
    org_id: number
    _all: number
  }


  export type OrganisationsAndUsersMinAggregateInputType = {
    user_id?: true
    org_id?: true
  }

  export type OrganisationsAndUsersMaxAggregateInputType = {
    user_id?: true
    org_id?: true
  }

  export type OrganisationsAndUsersCountAggregateInputType = {
    user_id?: true
    org_id?: true
    _all?: true
  }

  export type OrganisationsAndUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganisationsAndUsers to aggregate.
     */
    where?: OrganisationsAndUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganisationsAndUsers to fetch.
     */
    orderBy?: OrganisationsAndUsersOrderByWithRelationInput | OrganisationsAndUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganisationsAndUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganisationsAndUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganisationsAndUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganisationsAndUsers
    **/
    _count?: true | OrganisationsAndUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationsAndUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationsAndUsersMaxAggregateInputType
  }

  export type GetOrganisationsAndUsersAggregateType<T extends OrganisationsAndUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisationsAndUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisationsAndUsers[P]>
      : GetScalarType<T[P], AggregateOrganisationsAndUsers[P]>
  }




  export type OrganisationsAndUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationsAndUsersWhereInput
    orderBy?: OrganisationsAndUsersOrderByWithAggregationInput | OrganisationsAndUsersOrderByWithAggregationInput[]
    by: OrganisationsAndUsersScalarFieldEnum[] | OrganisationsAndUsersScalarFieldEnum
    having?: OrganisationsAndUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationsAndUsersCountAggregateInputType | true
    _min?: OrganisationsAndUsersMinAggregateInputType
    _max?: OrganisationsAndUsersMaxAggregateInputType
  }

  export type OrganisationsAndUsersGroupByOutputType = {
    user_id: string
    org_id: string
    _count: OrganisationsAndUsersCountAggregateOutputType | null
    _min: OrganisationsAndUsersMinAggregateOutputType | null
    _max: OrganisationsAndUsersMaxAggregateOutputType | null
  }

  type GetOrganisationsAndUsersGroupByPayload<T extends OrganisationsAndUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationsAndUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationsAndUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationsAndUsersGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationsAndUsersGroupByOutputType[P]>
        }
      >
    >


  export type OrganisationsAndUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    org_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organisationsAndUsers"]>

  export type OrganisationsAndUsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    org_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organisationsAndUsers"]>

  export type OrganisationsAndUsersSelectScalar = {
    user_id?: boolean
    org_id?: boolean
  }

  export type OrganisationsAndUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }
  export type OrganisationsAndUsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }

  export type $OrganisationsAndUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganisationsAndUsers"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organisation: Prisma.$OrganisationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      org_id: string
    }, ExtArgs["result"]["organisationsAndUsers"]>
    composites: {}
  }

  type OrganisationsAndUsersGetPayload<S extends boolean | null | undefined | OrganisationsAndUsersDefaultArgs> = $Result.GetResult<Prisma.$OrganisationsAndUsersPayload, S>

  type OrganisationsAndUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganisationsAndUsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganisationsAndUsersCountAggregateInputType | true
    }

  export interface OrganisationsAndUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganisationsAndUsers'], meta: { name: 'OrganisationsAndUsers' } }
    /**
     * Find zero or one OrganisationsAndUsers that matches the filter.
     * @param {OrganisationsAndUsersFindUniqueArgs} args - Arguments to find a OrganisationsAndUsers
     * @example
     * // Get one OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganisationsAndUsersFindUniqueArgs>(args: SelectSubset<T, OrganisationsAndUsersFindUniqueArgs<ExtArgs>>): Prisma__OrganisationsAndUsersClient<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrganisationsAndUsers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganisationsAndUsersFindUniqueOrThrowArgs} args - Arguments to find a OrganisationsAndUsers
     * @example
     * // Get one OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganisationsAndUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganisationsAndUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganisationsAndUsersClient<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrganisationsAndUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAndUsersFindFirstArgs} args - Arguments to find a OrganisationsAndUsers
     * @example
     * // Get one OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganisationsAndUsersFindFirstArgs>(args?: SelectSubset<T, OrganisationsAndUsersFindFirstArgs<ExtArgs>>): Prisma__OrganisationsAndUsersClient<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrganisationsAndUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAndUsersFindFirstOrThrowArgs} args - Arguments to find a OrganisationsAndUsers
     * @example
     * // Get one OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganisationsAndUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganisationsAndUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganisationsAndUsersClient<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrganisationsAndUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAndUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.findMany()
     * 
     * // Get first 10 OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const organisationsAndUsersWithUser_idOnly = await prisma.organisationsAndUsers.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends OrganisationsAndUsersFindManyArgs>(args?: SelectSubset<T, OrganisationsAndUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrganisationsAndUsers.
     * @param {OrganisationsAndUsersCreateArgs} args - Arguments to create a OrganisationsAndUsers.
     * @example
     * // Create one OrganisationsAndUsers
     * const OrganisationsAndUsers = await prisma.organisationsAndUsers.create({
     *   data: {
     *     // ... data to create a OrganisationsAndUsers
     *   }
     * })
     * 
     */
    create<T extends OrganisationsAndUsersCreateArgs>(args: SelectSubset<T, OrganisationsAndUsersCreateArgs<ExtArgs>>): Prisma__OrganisationsAndUsersClient<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrganisationsAndUsers.
     * @param {OrganisationsAndUsersCreateManyArgs} args - Arguments to create many OrganisationsAndUsers.
     * @example
     * // Create many OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganisationsAndUsersCreateManyArgs>(args?: SelectSubset<T, OrganisationsAndUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganisationsAndUsers and returns the data saved in the database.
     * @param {OrganisationsAndUsersCreateManyAndReturnArgs} args - Arguments to create many OrganisationsAndUsers.
     * @example
     * // Create many OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganisationsAndUsers and only return the `user_id`
     * const organisationsAndUsersWithUser_idOnly = await prisma.organisationsAndUsers.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganisationsAndUsersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganisationsAndUsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrganisationsAndUsers.
     * @param {OrganisationsAndUsersDeleteArgs} args - Arguments to delete one OrganisationsAndUsers.
     * @example
     * // Delete one OrganisationsAndUsers
     * const OrganisationsAndUsers = await prisma.organisationsAndUsers.delete({
     *   where: {
     *     // ... filter to delete one OrganisationsAndUsers
     *   }
     * })
     * 
     */
    delete<T extends OrganisationsAndUsersDeleteArgs>(args: SelectSubset<T, OrganisationsAndUsersDeleteArgs<ExtArgs>>): Prisma__OrganisationsAndUsersClient<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrganisationsAndUsers.
     * @param {OrganisationsAndUsersUpdateArgs} args - Arguments to update one OrganisationsAndUsers.
     * @example
     * // Update one OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganisationsAndUsersUpdateArgs>(args: SelectSubset<T, OrganisationsAndUsersUpdateArgs<ExtArgs>>): Prisma__OrganisationsAndUsersClient<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrganisationsAndUsers.
     * @param {OrganisationsAndUsersDeleteManyArgs} args - Arguments to filter OrganisationsAndUsers to delete.
     * @example
     * // Delete a few OrganisationsAndUsers
     * const { count } = await prisma.organisationsAndUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganisationsAndUsersDeleteManyArgs>(args?: SelectSubset<T, OrganisationsAndUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganisationsAndUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAndUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganisationsAndUsersUpdateManyArgs>(args: SelectSubset<T, OrganisationsAndUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrganisationsAndUsers.
     * @param {OrganisationsAndUsersUpsertArgs} args - Arguments to update or create a OrganisationsAndUsers.
     * @example
     * // Update or create a OrganisationsAndUsers
     * const organisationsAndUsers = await prisma.organisationsAndUsers.upsert({
     *   create: {
     *     // ... data to create a OrganisationsAndUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganisationsAndUsers we want to update
     *   }
     * })
     */
    upsert<T extends OrganisationsAndUsersUpsertArgs>(args: SelectSubset<T, OrganisationsAndUsersUpsertArgs<ExtArgs>>): Prisma__OrganisationsAndUsersClient<$Result.GetResult<Prisma.$OrganisationsAndUsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrganisationsAndUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAndUsersCountArgs} args - Arguments to filter OrganisationsAndUsers to count.
     * @example
     * // Count the number of OrganisationsAndUsers
     * const count = await prisma.organisationsAndUsers.count({
     *   where: {
     *     // ... the filter for the OrganisationsAndUsers we want to count
     *   }
     * })
    **/
    count<T extends OrganisationsAndUsersCountArgs>(
      args?: Subset<T, OrganisationsAndUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationsAndUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganisationsAndUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAndUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganisationsAndUsersAggregateArgs>(args: Subset<T, OrganisationsAndUsersAggregateArgs>): Prisma.PrismaPromise<GetOrganisationsAndUsersAggregateType<T>>

    /**
     * Group by OrganisationsAndUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAndUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganisationsAndUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganisationsAndUsersGroupByArgs['orderBy'] }
        : { orderBy?: OrganisationsAndUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganisationsAndUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationsAndUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganisationsAndUsers model
   */
  readonly fields: OrganisationsAndUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganisationsAndUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganisationsAndUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    organisation<T extends OrganisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationDefaultArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganisationsAndUsers model
   */ 
  interface OrganisationsAndUsersFieldRefs {
    readonly user_id: FieldRef<"OrganisationsAndUsers", 'String'>
    readonly org_id: FieldRef<"OrganisationsAndUsers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrganisationsAndUsers findUnique
   */
  export type OrganisationsAndUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * Filter, which OrganisationsAndUsers to fetch.
     */
    where: OrganisationsAndUsersWhereUniqueInput
  }

  /**
   * OrganisationsAndUsers findUniqueOrThrow
   */
  export type OrganisationsAndUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * Filter, which OrganisationsAndUsers to fetch.
     */
    where: OrganisationsAndUsersWhereUniqueInput
  }

  /**
   * OrganisationsAndUsers findFirst
   */
  export type OrganisationsAndUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * Filter, which OrganisationsAndUsers to fetch.
     */
    where?: OrganisationsAndUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganisationsAndUsers to fetch.
     */
    orderBy?: OrganisationsAndUsersOrderByWithRelationInput | OrganisationsAndUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganisationsAndUsers.
     */
    cursor?: OrganisationsAndUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganisationsAndUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganisationsAndUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganisationsAndUsers.
     */
    distinct?: OrganisationsAndUsersScalarFieldEnum | OrganisationsAndUsersScalarFieldEnum[]
  }

  /**
   * OrganisationsAndUsers findFirstOrThrow
   */
  export type OrganisationsAndUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * Filter, which OrganisationsAndUsers to fetch.
     */
    where?: OrganisationsAndUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganisationsAndUsers to fetch.
     */
    orderBy?: OrganisationsAndUsersOrderByWithRelationInput | OrganisationsAndUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganisationsAndUsers.
     */
    cursor?: OrganisationsAndUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganisationsAndUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganisationsAndUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganisationsAndUsers.
     */
    distinct?: OrganisationsAndUsersScalarFieldEnum | OrganisationsAndUsersScalarFieldEnum[]
  }

  /**
   * OrganisationsAndUsers findMany
   */
  export type OrganisationsAndUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * Filter, which OrganisationsAndUsers to fetch.
     */
    where?: OrganisationsAndUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganisationsAndUsers to fetch.
     */
    orderBy?: OrganisationsAndUsersOrderByWithRelationInput | OrganisationsAndUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganisationsAndUsers.
     */
    cursor?: OrganisationsAndUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganisationsAndUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganisationsAndUsers.
     */
    skip?: number
    distinct?: OrganisationsAndUsersScalarFieldEnum | OrganisationsAndUsersScalarFieldEnum[]
  }

  /**
   * OrganisationsAndUsers create
   */
  export type OrganisationsAndUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganisationsAndUsers.
     */
    data: XOR<OrganisationsAndUsersCreateInput, OrganisationsAndUsersUncheckedCreateInput>
  }

  /**
   * OrganisationsAndUsers createMany
   */
  export type OrganisationsAndUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganisationsAndUsers.
     */
    data: OrganisationsAndUsersCreateManyInput | OrganisationsAndUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganisationsAndUsers createManyAndReturn
   */
  export type OrganisationsAndUsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrganisationsAndUsers.
     */
    data: OrganisationsAndUsersCreateManyInput | OrganisationsAndUsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganisationsAndUsers update
   */
  export type OrganisationsAndUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganisationsAndUsers.
     */
    data: XOR<OrganisationsAndUsersUpdateInput, OrganisationsAndUsersUncheckedUpdateInput>
    /**
     * Choose, which OrganisationsAndUsers to update.
     */
    where: OrganisationsAndUsersWhereUniqueInput
  }

  /**
   * OrganisationsAndUsers updateMany
   */
  export type OrganisationsAndUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganisationsAndUsers.
     */
    data: XOR<OrganisationsAndUsersUpdateManyMutationInput, OrganisationsAndUsersUncheckedUpdateManyInput>
    /**
     * Filter which OrganisationsAndUsers to update
     */
    where?: OrganisationsAndUsersWhereInput
  }

  /**
   * OrganisationsAndUsers upsert
   */
  export type OrganisationsAndUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganisationsAndUsers to update in case it exists.
     */
    where: OrganisationsAndUsersWhereUniqueInput
    /**
     * In case the OrganisationsAndUsers found by the `where` argument doesn't exist, create a new OrganisationsAndUsers with this data.
     */
    create: XOR<OrganisationsAndUsersCreateInput, OrganisationsAndUsersUncheckedCreateInput>
    /**
     * In case the OrganisationsAndUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganisationsAndUsersUpdateInput, OrganisationsAndUsersUncheckedUpdateInput>
  }

  /**
   * OrganisationsAndUsers delete
   */
  export type OrganisationsAndUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
    /**
     * Filter which OrganisationsAndUsers to delete.
     */
    where: OrganisationsAndUsersWhereUniqueInput
  }

  /**
   * OrganisationsAndUsers deleteMany
   */
  export type OrganisationsAndUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganisationsAndUsers to delete
     */
    where?: OrganisationsAndUsersWhereInput
  }

  /**
   * OrganisationsAndUsers without action
   */
  export type OrganisationsAndUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsAndUsers
     */
    select?: OrganisationsAndUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsAndUsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganisationScalarFieldEnum: {
    orgId: 'orgId',
    name: 'name',
    description: 'description'
  };

  export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum]


  export const OrganisationsAndUsersScalarFieldEnum: {
    user_id: 'user_id',
    org_id: 'org_id'
  };

  export type OrganisationsAndUsersScalarFieldEnum = (typeof OrganisationsAndUsersScalarFieldEnum)[keyof typeof OrganisationsAndUsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    OrganisationsAndUsers?: OrganisationsAndUsersListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    OrganisationsAndUsers?: OrganisationsAndUsersOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    OrganisationsAndUsers?: OrganisationsAndUsersListRelationFilter
  }, "userId" | "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type OrganisationWhereInput = {
    AND?: OrganisationWhereInput | OrganisationWhereInput[]
    OR?: OrganisationWhereInput[]
    NOT?: OrganisationWhereInput | OrganisationWhereInput[]
    orgId?: StringFilter<"Organisation"> | string
    name?: StringFilter<"Organisation"> | string
    description?: StringNullableFilter<"Organisation"> | string | null
    OrganisationsAndUsers?: OrganisationsAndUsersListRelationFilter
  }

  export type OrganisationOrderByWithRelationInput = {
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    OrganisationsAndUsers?: OrganisationsAndUsersOrderByRelationAggregateInput
  }

  export type OrganisationWhereUniqueInput = Prisma.AtLeast<{
    orgId?: string
    AND?: OrganisationWhereInput | OrganisationWhereInput[]
    OR?: OrganisationWhereInput[]
    NOT?: OrganisationWhereInput | OrganisationWhereInput[]
    name?: StringFilter<"Organisation"> | string
    description?: StringNullableFilter<"Organisation"> | string | null
    OrganisationsAndUsers?: OrganisationsAndUsersListRelationFilter
  }, "orgId" | "orgId">

  export type OrganisationOrderByWithAggregationInput = {
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: OrganisationCountOrderByAggregateInput
    _max?: OrganisationMaxOrderByAggregateInput
    _min?: OrganisationMinOrderByAggregateInput
  }

  export type OrganisationScalarWhereWithAggregatesInput = {
    AND?: OrganisationScalarWhereWithAggregatesInput | OrganisationScalarWhereWithAggregatesInput[]
    OR?: OrganisationScalarWhereWithAggregatesInput[]
    NOT?: OrganisationScalarWhereWithAggregatesInput | OrganisationScalarWhereWithAggregatesInput[]
    orgId?: StringWithAggregatesFilter<"Organisation"> | string
    name?: StringWithAggregatesFilter<"Organisation"> | string
    description?: StringNullableWithAggregatesFilter<"Organisation"> | string | null
  }

  export type OrganisationsAndUsersWhereInput = {
    AND?: OrganisationsAndUsersWhereInput | OrganisationsAndUsersWhereInput[]
    OR?: OrganisationsAndUsersWhereInput[]
    NOT?: OrganisationsAndUsersWhereInput | OrganisationsAndUsersWhereInput[]
    user_id?: StringFilter<"OrganisationsAndUsers"> | string
    org_id?: StringFilter<"OrganisationsAndUsers"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    organisation?: XOR<OrganisationRelationFilter, OrganisationWhereInput>
  }

  export type OrganisationsAndUsersOrderByWithRelationInput = {
    user_id?: SortOrder
    org_id?: SortOrder
    user?: UserOrderByWithRelationInput
    organisation?: OrganisationOrderByWithRelationInput
  }

  export type OrganisationsAndUsersWhereUniqueInput = Prisma.AtLeast<{
    user_id_org_id?: OrganisationsAndUsersUser_idOrg_idCompoundUniqueInput
    AND?: OrganisationsAndUsersWhereInput | OrganisationsAndUsersWhereInput[]
    OR?: OrganisationsAndUsersWhereInput[]
    NOT?: OrganisationsAndUsersWhereInput | OrganisationsAndUsersWhereInput[]
    user_id?: StringFilter<"OrganisationsAndUsers"> | string
    org_id?: StringFilter<"OrganisationsAndUsers"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    organisation?: XOR<OrganisationRelationFilter, OrganisationWhereInput>
  }, "user_id_org_id">

  export type OrganisationsAndUsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    org_id?: SortOrder
    _count?: OrganisationsAndUsersCountOrderByAggregateInput
    _max?: OrganisationsAndUsersMaxOrderByAggregateInput
    _min?: OrganisationsAndUsersMinOrderByAggregateInput
  }

  export type OrganisationsAndUsersScalarWhereWithAggregatesInput = {
    AND?: OrganisationsAndUsersScalarWhereWithAggregatesInput | OrganisationsAndUsersScalarWhereWithAggregatesInput[]
    OR?: OrganisationsAndUsersScalarWhereWithAggregatesInput[]
    NOT?: OrganisationsAndUsersScalarWhereWithAggregatesInput | OrganisationsAndUsersScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"OrganisationsAndUsers"> | string
    org_id?: StringWithAggregatesFilter<"OrganisationsAndUsers"> | string
  }

  export type UserCreateInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    OrganisationsAndUsers?: OrganisationsAndUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    OrganisationsAndUsers?: OrganisationsAndUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    OrganisationsAndUsers?: OrganisationsAndUsersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    OrganisationsAndUsers?: OrganisationsAndUsersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationCreateInput = {
    orgId: string
    name: string
    description?: string | null
    OrganisationsAndUsers?: OrganisationsAndUsersCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUncheckedCreateInput = {
    orgId: string
    name: string
    description?: string | null
    OrganisationsAndUsers?: OrganisationsAndUsersUncheckedCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUpdateInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    OrganisationsAndUsers?: OrganisationsAndUsersUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationUncheckedUpdateInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    OrganisationsAndUsers?: OrganisationsAndUsersUncheckedUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationCreateManyInput = {
    orgId: string
    name: string
    description?: string | null
  }

  export type OrganisationUpdateManyMutationInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationUncheckedUpdateManyInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationsAndUsersCreateInput = {
    user: UserCreateNestedOneWithoutOrganisationsAndUsersInput
    organisation: OrganisationCreateNestedOneWithoutOrganisationsAndUsersInput
  }

  export type OrganisationsAndUsersUncheckedCreateInput = {
    user_id: string
    org_id: string
  }

  export type OrganisationsAndUsersUpdateInput = {
    user?: UserUpdateOneRequiredWithoutOrganisationsAndUsersNestedInput
    organisation?: OrganisationUpdateOneRequiredWithoutOrganisationsAndUsersNestedInput
  }

  export type OrganisationsAndUsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
  }

  export type OrganisationsAndUsersCreateManyInput = {
    user_id: string
    org_id: string
  }

  export type OrganisationsAndUsersUpdateManyMutationInput = {

  }

  export type OrganisationsAndUsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrganisationsAndUsersListRelationFilter = {
    every?: OrganisationsAndUsersWhereInput
    some?: OrganisationsAndUsersWhereInput
    none?: OrganisationsAndUsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrganisationsAndUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrganisationCountOrderByAggregateInput = {
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type OrganisationMaxOrderByAggregateInput = {
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type OrganisationMinOrderByAggregateInput = {
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrganisationRelationFilter = {
    is?: OrganisationWhereInput
    isNot?: OrganisationWhereInput
  }

  export type OrganisationsAndUsersUser_idOrg_idCompoundUniqueInput = {
    user_id: string
    org_id: string
  }

  export type OrganisationsAndUsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    org_id?: SortOrder
  }

  export type OrganisationsAndUsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    org_id?: SortOrder
  }

  export type OrganisationsAndUsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    org_id?: SortOrder
  }

  export type OrganisationsAndUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganisationsAndUsersCreateWithoutUserInput, OrganisationsAndUsersUncheckedCreateWithoutUserInput> | OrganisationsAndUsersCreateWithoutUserInput[] | OrganisationsAndUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganisationsAndUsersCreateOrConnectWithoutUserInput | OrganisationsAndUsersCreateOrConnectWithoutUserInput[]
    createMany?: OrganisationsAndUsersCreateManyUserInputEnvelope
    connect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
  }

  export type OrganisationsAndUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganisationsAndUsersCreateWithoutUserInput, OrganisationsAndUsersUncheckedCreateWithoutUserInput> | OrganisationsAndUsersCreateWithoutUserInput[] | OrganisationsAndUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganisationsAndUsersCreateOrConnectWithoutUserInput | OrganisationsAndUsersCreateOrConnectWithoutUserInput[]
    createMany?: OrganisationsAndUsersCreateManyUserInputEnvelope
    connect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganisationsAndUsersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganisationsAndUsersCreateWithoutUserInput, OrganisationsAndUsersUncheckedCreateWithoutUserInput> | OrganisationsAndUsersCreateWithoutUserInput[] | OrganisationsAndUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganisationsAndUsersCreateOrConnectWithoutUserInput | OrganisationsAndUsersCreateOrConnectWithoutUserInput[]
    upsert?: OrganisationsAndUsersUpsertWithWhereUniqueWithoutUserInput | OrganisationsAndUsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganisationsAndUsersCreateManyUserInputEnvelope
    set?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    disconnect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    delete?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    connect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    update?: OrganisationsAndUsersUpdateWithWhereUniqueWithoutUserInput | OrganisationsAndUsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganisationsAndUsersUpdateManyWithWhereWithoutUserInput | OrganisationsAndUsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganisationsAndUsersScalarWhereInput | OrganisationsAndUsersScalarWhereInput[]
  }

  export type OrganisationsAndUsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganisationsAndUsersCreateWithoutUserInput, OrganisationsAndUsersUncheckedCreateWithoutUserInput> | OrganisationsAndUsersCreateWithoutUserInput[] | OrganisationsAndUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganisationsAndUsersCreateOrConnectWithoutUserInput | OrganisationsAndUsersCreateOrConnectWithoutUserInput[]
    upsert?: OrganisationsAndUsersUpsertWithWhereUniqueWithoutUserInput | OrganisationsAndUsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganisationsAndUsersCreateManyUserInputEnvelope
    set?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    disconnect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    delete?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    connect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    update?: OrganisationsAndUsersUpdateWithWhereUniqueWithoutUserInput | OrganisationsAndUsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganisationsAndUsersUpdateManyWithWhereWithoutUserInput | OrganisationsAndUsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganisationsAndUsersScalarWhereInput | OrganisationsAndUsersScalarWhereInput[]
  }

  export type OrganisationsAndUsersCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<OrganisationsAndUsersCreateWithoutOrganisationInput, OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput> | OrganisationsAndUsersCreateWithoutOrganisationInput[] | OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput | OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput[]
    createMany?: OrganisationsAndUsersCreateManyOrganisationInputEnvelope
    connect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
  }

  export type OrganisationsAndUsersUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<OrganisationsAndUsersCreateWithoutOrganisationInput, OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput> | OrganisationsAndUsersCreateWithoutOrganisationInput[] | OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput | OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput[]
    createMany?: OrganisationsAndUsersCreateManyOrganisationInputEnvelope
    connect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
  }

  export type OrganisationsAndUsersUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<OrganisationsAndUsersCreateWithoutOrganisationInput, OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput> | OrganisationsAndUsersCreateWithoutOrganisationInput[] | OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput | OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput[]
    upsert?: OrganisationsAndUsersUpsertWithWhereUniqueWithoutOrganisationInput | OrganisationsAndUsersUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: OrganisationsAndUsersCreateManyOrganisationInputEnvelope
    set?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    disconnect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    delete?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    connect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    update?: OrganisationsAndUsersUpdateWithWhereUniqueWithoutOrganisationInput | OrganisationsAndUsersUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: OrganisationsAndUsersUpdateManyWithWhereWithoutOrganisationInput | OrganisationsAndUsersUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: OrganisationsAndUsersScalarWhereInput | OrganisationsAndUsersScalarWhereInput[]
  }

  export type OrganisationsAndUsersUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<OrganisationsAndUsersCreateWithoutOrganisationInput, OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput> | OrganisationsAndUsersCreateWithoutOrganisationInput[] | OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput | OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput[]
    upsert?: OrganisationsAndUsersUpsertWithWhereUniqueWithoutOrganisationInput | OrganisationsAndUsersUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: OrganisationsAndUsersCreateManyOrganisationInputEnvelope
    set?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    disconnect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    delete?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    connect?: OrganisationsAndUsersWhereUniqueInput | OrganisationsAndUsersWhereUniqueInput[]
    update?: OrganisationsAndUsersUpdateWithWhereUniqueWithoutOrganisationInput | OrganisationsAndUsersUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: OrganisationsAndUsersUpdateManyWithWhereWithoutOrganisationInput | OrganisationsAndUsersUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: OrganisationsAndUsersScalarWhereInput | OrganisationsAndUsersScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrganisationsAndUsersInput = {
    create?: XOR<UserCreateWithoutOrganisationsAndUsersInput, UserUncheckedCreateWithoutOrganisationsAndUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganisationsAndUsersInput
    connect?: UserWhereUniqueInput
  }

  export type OrganisationCreateNestedOneWithoutOrganisationsAndUsersInput = {
    create?: XOR<OrganisationCreateWithoutOrganisationsAndUsersInput, OrganisationUncheckedCreateWithoutOrganisationsAndUsersInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutOrganisationsAndUsersInput
    connect?: OrganisationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrganisationsAndUsersNestedInput = {
    create?: XOR<UserCreateWithoutOrganisationsAndUsersInput, UserUncheckedCreateWithoutOrganisationsAndUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganisationsAndUsersInput
    upsert?: UserUpsertWithoutOrganisationsAndUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganisationsAndUsersInput, UserUpdateWithoutOrganisationsAndUsersInput>, UserUncheckedUpdateWithoutOrganisationsAndUsersInput>
  }

  export type OrganisationUpdateOneRequiredWithoutOrganisationsAndUsersNestedInput = {
    create?: XOR<OrganisationCreateWithoutOrganisationsAndUsersInput, OrganisationUncheckedCreateWithoutOrganisationsAndUsersInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutOrganisationsAndUsersInput
    upsert?: OrganisationUpsertWithoutOrganisationsAndUsersInput
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutOrganisationsAndUsersInput, OrganisationUpdateWithoutOrganisationsAndUsersInput>, OrganisationUncheckedUpdateWithoutOrganisationsAndUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganisationsAndUsersCreateWithoutUserInput = {
    organisation: OrganisationCreateNestedOneWithoutOrganisationsAndUsersInput
  }

  export type OrganisationsAndUsersUncheckedCreateWithoutUserInput = {
    org_id: string
  }

  export type OrganisationsAndUsersCreateOrConnectWithoutUserInput = {
    where: OrganisationsAndUsersWhereUniqueInput
    create: XOR<OrganisationsAndUsersCreateWithoutUserInput, OrganisationsAndUsersUncheckedCreateWithoutUserInput>
  }

  export type OrganisationsAndUsersCreateManyUserInputEnvelope = {
    data: OrganisationsAndUsersCreateManyUserInput | OrganisationsAndUsersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganisationsAndUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganisationsAndUsersWhereUniqueInput
    update: XOR<OrganisationsAndUsersUpdateWithoutUserInput, OrganisationsAndUsersUncheckedUpdateWithoutUserInput>
    create: XOR<OrganisationsAndUsersCreateWithoutUserInput, OrganisationsAndUsersUncheckedCreateWithoutUserInput>
  }

  export type OrganisationsAndUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganisationsAndUsersWhereUniqueInput
    data: XOR<OrganisationsAndUsersUpdateWithoutUserInput, OrganisationsAndUsersUncheckedUpdateWithoutUserInput>
  }

  export type OrganisationsAndUsersUpdateManyWithWhereWithoutUserInput = {
    where: OrganisationsAndUsersScalarWhereInput
    data: XOR<OrganisationsAndUsersUpdateManyMutationInput, OrganisationsAndUsersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganisationsAndUsersScalarWhereInput = {
    AND?: OrganisationsAndUsersScalarWhereInput | OrganisationsAndUsersScalarWhereInput[]
    OR?: OrganisationsAndUsersScalarWhereInput[]
    NOT?: OrganisationsAndUsersScalarWhereInput | OrganisationsAndUsersScalarWhereInput[]
    user_id?: StringFilter<"OrganisationsAndUsers"> | string
    org_id?: StringFilter<"OrganisationsAndUsers"> | string
  }

  export type OrganisationsAndUsersCreateWithoutOrganisationInput = {
    user: UserCreateNestedOneWithoutOrganisationsAndUsersInput
  }

  export type OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput = {
    user_id: string
  }

  export type OrganisationsAndUsersCreateOrConnectWithoutOrganisationInput = {
    where: OrganisationsAndUsersWhereUniqueInput
    create: XOR<OrganisationsAndUsersCreateWithoutOrganisationInput, OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput>
  }

  export type OrganisationsAndUsersCreateManyOrganisationInputEnvelope = {
    data: OrganisationsAndUsersCreateManyOrganisationInput | OrganisationsAndUsersCreateManyOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type OrganisationsAndUsersUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: OrganisationsAndUsersWhereUniqueInput
    update: XOR<OrganisationsAndUsersUpdateWithoutOrganisationInput, OrganisationsAndUsersUncheckedUpdateWithoutOrganisationInput>
    create: XOR<OrganisationsAndUsersCreateWithoutOrganisationInput, OrganisationsAndUsersUncheckedCreateWithoutOrganisationInput>
  }

  export type OrganisationsAndUsersUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: OrganisationsAndUsersWhereUniqueInput
    data: XOR<OrganisationsAndUsersUpdateWithoutOrganisationInput, OrganisationsAndUsersUncheckedUpdateWithoutOrganisationInput>
  }

  export type OrganisationsAndUsersUpdateManyWithWhereWithoutOrganisationInput = {
    where: OrganisationsAndUsersScalarWhereInput
    data: XOR<OrganisationsAndUsersUpdateManyMutationInput, OrganisationsAndUsersUncheckedUpdateManyWithoutOrganisationInput>
  }

  export type UserCreateWithoutOrganisationsAndUsersInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
  }

  export type UserUncheckedCreateWithoutOrganisationsAndUsersInput = {
    userId: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
  }

  export type UserCreateOrConnectWithoutOrganisationsAndUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganisationsAndUsersInput, UserUncheckedCreateWithoutOrganisationsAndUsersInput>
  }

  export type OrganisationCreateWithoutOrganisationsAndUsersInput = {
    orgId: string
    name: string
    description?: string | null
  }

  export type OrganisationUncheckedCreateWithoutOrganisationsAndUsersInput = {
    orgId: string
    name: string
    description?: string | null
  }

  export type OrganisationCreateOrConnectWithoutOrganisationsAndUsersInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutOrganisationsAndUsersInput, OrganisationUncheckedCreateWithoutOrganisationsAndUsersInput>
  }

  export type UserUpsertWithoutOrganisationsAndUsersInput = {
    update: XOR<UserUpdateWithoutOrganisationsAndUsersInput, UserUncheckedUpdateWithoutOrganisationsAndUsersInput>
    create: XOR<UserCreateWithoutOrganisationsAndUsersInput, UserUncheckedCreateWithoutOrganisationsAndUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganisationsAndUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganisationsAndUsersInput, UserUncheckedUpdateWithoutOrganisationsAndUsersInput>
  }

  export type UserUpdateWithoutOrganisationsAndUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutOrganisationsAndUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationUpsertWithoutOrganisationsAndUsersInput = {
    update: XOR<OrganisationUpdateWithoutOrganisationsAndUsersInput, OrganisationUncheckedUpdateWithoutOrganisationsAndUsersInput>
    create: XOR<OrganisationCreateWithoutOrganisationsAndUsersInput, OrganisationUncheckedCreateWithoutOrganisationsAndUsersInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutOrganisationsAndUsersInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutOrganisationsAndUsersInput, OrganisationUncheckedUpdateWithoutOrganisationsAndUsersInput>
  }

  export type OrganisationUpdateWithoutOrganisationsAndUsersInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationUncheckedUpdateWithoutOrganisationsAndUsersInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationsAndUsersCreateManyUserInput = {
    org_id: string
  }

  export type OrganisationsAndUsersUpdateWithoutUserInput = {
    organisation?: OrganisationUpdateOneRequiredWithoutOrganisationsAndUsersNestedInput
  }

  export type OrganisationsAndUsersUncheckedUpdateWithoutUserInput = {
    org_id?: StringFieldUpdateOperationsInput | string
  }

  export type OrganisationsAndUsersUncheckedUpdateManyWithoutUserInput = {
    org_id?: StringFieldUpdateOperationsInput | string
  }

  export type OrganisationsAndUsersCreateManyOrganisationInput = {
    user_id: string
  }

  export type OrganisationsAndUsersUpdateWithoutOrganisationInput = {
    user?: UserUpdateOneRequiredWithoutOrganisationsAndUsersNestedInput
  }

  export type OrganisationsAndUsersUncheckedUpdateWithoutOrganisationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type OrganisationsAndUsersUncheckedUpdateManyWithoutOrganisationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganisationCountOutputTypeDefaultArgs instead
     */
    export type OrganisationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganisationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganisationDefaultArgs instead
     */
    export type OrganisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganisationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganisationsAndUsersDefaultArgs instead
     */
    export type OrganisationsAndUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganisationsAndUsersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}