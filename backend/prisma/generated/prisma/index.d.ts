
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
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model ListingApplication
 * 
 */
export type ListingApplication = $Result.DefaultSelection<Prisma.$ListingApplicationPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Analysis
 * 
 */
export type Analysis = $Result.DefaultSelection<Prisma.$AnalysisPayload>
/**
 * Model AnalysisHistory
 * 
 */
export type AnalysisHistory = $Result.DefaultSelection<Prisma.$AnalysisHistoryPayload>
/**
 * Model AccountDeletionRequest
 * 
 */
export type AccountDeletionRequest = $Result.DefaultSelection<Prisma.$AccountDeletionRequestPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ProjectType: {
  BUY: 'BUY',
  RENT: 'RENT',
  SELL: 'SELL',
  INVEST: 'INVEST'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const MaturityLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type MaturityLevel = (typeof MaturityLevel)[keyof typeof MaturityLevel]


export const CommercialPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type CommercialPriority = (typeof CommercialPriority)[keyof typeof CommercialPriority]


export const AnalysisStatus: {
  SENT: 'SENT',
  FAVORITE: 'FAVORITE',
  IN_PROGRESS: 'IN_PROGRESS',
  PRIORITY: 'PRIORITY',
  INCOMPLETE: 'INCOMPLETE',
  PROCESSED: 'PROCESSED',
  TO_RECONTACT: 'TO_RECONTACT',
  ARCHIVED: 'ARCHIVED'
};

export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus]


export const Urgency: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Urgency = (typeof Urgency)[keyof typeof Urgency]


export const MaritalStatus: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  PARTNERED: 'PARTNERED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const AccountDeletionRequestStatus: {
  PENDING: 'PENDING',
  PROCESSED: 'PROCESSED',
  CANCELLED: 'CANCELLED'
};

export type AccountDeletionRequestStatus = (typeof AccountDeletionRequestStatus)[keyof typeof AccountDeletionRequestStatus]


export const ListingStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const ListingApplicationStatus: {
  INTERESTED: 'INTERESTED',
  CONTACTED: 'CONTACTED',
  VISIT_SCHEDULED: 'VISIT_SCHEDULED',
  RESERVED: 'RESERVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type ListingApplicationStatus = (typeof ListingApplicationStatus)[keyof typeof ListingApplicationStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ProjectType = $Enums.ProjectType

export const ProjectType: typeof $Enums.ProjectType

export type MaturityLevel = $Enums.MaturityLevel

export const MaturityLevel: typeof $Enums.MaturityLevel

export type CommercialPriority = $Enums.CommercialPriority

export const CommercialPriority: typeof $Enums.CommercialPriority

export type AnalysisStatus = $Enums.AnalysisStatus

export const AnalysisStatus: typeof $Enums.AnalysisStatus

export type Urgency = $Enums.Urgency

export const Urgency: typeof $Enums.Urgency

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type AccountDeletionRequestStatus = $Enums.AccountDeletionRequestStatus

export const AccountDeletionRequestStatus: typeof $Enums.AccountDeletionRequestStatus

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type ListingApplicationStatus = $Enums.ListingApplicationStatus

export const ListingApplicationStatus: typeof $Enums.ListingApplicationStatus

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listingApplication`: Exposes CRUD operations for the **ListingApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListingApplications
    * const listingApplications = await prisma.listingApplication.findMany()
    * ```
    */
  get listingApplication(): Prisma.ListingApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysis`: Exposes CRUD operations for the **Analysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analyses
    * const analyses = await prisma.analysis.findMany()
    * ```
    */
  get analysis(): Prisma.AnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisHistory`: Exposes CRUD operations for the **AnalysisHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisHistories
    * const analysisHistories = await prisma.analysisHistory.findMany()
    * ```
    */
  get analysisHistory(): Prisma.AnalysisHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountDeletionRequest`: Exposes CRUD operations for the **AccountDeletionRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountDeletionRequests
    * const accountDeletionRequests = await prisma.accountDeletionRequest.findMany()
    * ```
    */
  get accountDeletionRequest(): Prisma.AccountDeletionRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Review: 'Review',
    Listing: 'Listing',
    ListingApplication: 'ListingApplication',
    RefreshToken: 'RefreshToken',
    Analysis: 'Analysis',
    AnalysisHistory: 'AnalysisHistory',
    AccountDeletionRequest: 'AccountDeletionRequest',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "review" | "listing" | "listingApplication" | "refreshToken" | "analysis" | "analysisHistory" | "accountDeletionRequest" | "auditLog"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      ListingApplication: {
        payload: Prisma.$ListingApplicationPayload<ExtArgs>
        fields: Prisma.ListingApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>
          }
          findFirst: {
            args: Prisma.ListingApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>
          }
          findMany: {
            args: Prisma.ListingApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>[]
          }
          create: {
            args: Prisma.ListingApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>
          }
          createMany: {
            args: Prisma.ListingApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>[]
          }
          delete: {
            args: Prisma.ListingApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>
          }
          update: {
            args: Prisma.ListingApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ListingApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ListingApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingApplicationPayload>
          }
          aggregate: {
            args: Prisma.ListingApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListingApplication>
          }
          groupBy: {
            args: Prisma.ListingApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ListingApplicationCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Analysis: {
        payload: Prisma.$AnalysisPayload<ExtArgs>
        fields: Prisma.AnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          findFirst: {
            args: Prisma.AnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          findMany: {
            args: Prisma.AnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          create: {
            args: Prisma.AnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          createMany: {
            args: Prisma.AnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          delete: {
            args: Prisma.AnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          update: {
            args: Prisma.AnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          aggregate: {
            args: Prisma.AnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysis>
          }
          groupBy: {
            args: Prisma.AnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisCountAggregateOutputType> | number
          }
        }
      }
      AnalysisHistory: {
        payload: Prisma.$AnalysisHistoryPayload<ExtArgs>
        fields: Prisma.AnalysisHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          findFirst: {
            args: Prisma.AnalysisHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          findMany: {
            args: Prisma.AnalysisHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>[]
          }
          create: {
            args: Prisma.AnalysisHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          createMany: {
            args: Prisma.AnalysisHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>[]
          }
          delete: {
            args: Prisma.AnalysisHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          update: {
            args: Prisma.AnalysisHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          aggregate: {
            args: Prisma.AnalysisHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisHistory>
          }
          groupBy: {
            args: Prisma.AnalysisHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisHistoryCountAggregateOutputType> | number
          }
        }
      }
      AccountDeletionRequest: {
        payload: Prisma.$AccountDeletionRequestPayload<ExtArgs>
        fields: Prisma.AccountDeletionRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountDeletionRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountDeletionRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          findFirst: {
            args: Prisma.AccountDeletionRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountDeletionRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          findMany: {
            args: Prisma.AccountDeletionRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>[]
          }
          create: {
            args: Prisma.AccountDeletionRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          createMany: {
            args: Prisma.AccountDeletionRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountDeletionRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>[]
          }
          delete: {
            args: Prisma.AccountDeletionRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          update: {
            args: Prisma.AccountDeletionRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeletionRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountDeletionRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountDeletionRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>[]
          }
          upsert: {
            args: Prisma.AccountDeletionRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDeletionRequestPayload>
          }
          aggregate: {
            args: Prisma.AccountDeletionRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountDeletionRequest>
          }
          groupBy: {
            args: Prisma.AccountDeletionRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountDeletionRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountDeletionRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AccountDeletionRequestCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    review?: ReviewOmit
    listing?: ListingOmit
    listingApplication?: ListingApplicationOmit
    refreshToken?: RefreshTokenOmit
    analysis?: AnalysisOmit
    analysisHistory?: AnalysisHistoryOmit
    accountDeletionRequest?: AccountDeletionRequestOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    analyses: number
    refreshTokens: number
    auditLogs: number
    accountDeletionRequests: number
    reviews: number
    listingsCreated: number
    listingApplications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | UserCountOutputTypeCountAnalysesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    accountDeletionRequests?: boolean | UserCountOutputTypeCountAccountDeletionRequestsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    listingsCreated?: boolean | UserCountOutputTypeCountListingsCreatedArgs
    listingApplications?: boolean | UserCountOutputTypeCountListingApplicationsArgs
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
  export type UserCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountDeletionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDeletionRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingApplicationWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    applications: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ListingCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     */
    select?: ListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingApplicationWhereInput
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
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    passwordHash: number
    role: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    passwordHash: string
    role: $Enums.Role
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
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
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    analyses?: boolean | User$analysesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    accountDeletionRequests?: boolean | User$accountDeletionRequestsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    listingsCreated?: boolean | User$listingsCreatedArgs<ExtArgs>
    listingApplications?: boolean | User$listingApplicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "passwordHash" | "role" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | User$analysesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    accountDeletionRequests?: boolean | User$accountDeletionRequestsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    listingsCreated?: boolean | User$listingsCreatedArgs<ExtArgs>
    listingApplications?: boolean | User$listingApplicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      analyses: Prisma.$AnalysisPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      accountDeletionRequests: Prisma.$AccountDeletionRequestPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      listingsCreated: Prisma.$ListingPayload<ExtArgs>[]
      listingApplications: Prisma.$ListingApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string | null
      passwordHash: string
      role: $Enums.Role
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyses<T extends User$analysesArgs<ExtArgs> = {}>(args?: Subset<T, User$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accountDeletionRequests<T extends User$accountDeletionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountDeletionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listingsCreated<T extends User$listingsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listingApplications<T extends User$listingApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.analyses
   */
  export type User$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    cursor?: AnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.accountDeletionRequests
   */
  export type User$accountDeletionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    where?: AccountDeletionRequestWhereInput
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    cursor?: AccountDeletionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountDeletionRequestScalarFieldEnum | AccountDeletionRequestScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.listingsCreated
   */
  export type User$listingsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * User.listingApplications
   */
  export type User$listingApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    where?: ListingApplicationWhereInput
    orderBy?: ListingApplicationOrderByWithRelationInput | ListingApplicationOrderByWithRelationInput[]
    cursor?: ListingApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingApplicationScalarFieldEnum | ListingApplicationScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    userId: string
    rating: number
    comment: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rating: number
      comment: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    surface: number | null
    price: Decimal | null
    rooms: number | null
  }

  export type ListingSumAggregateOutputType = {
    surface: number | null
    price: Decimal | null
    rooms: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    propertyType: string | null
    city: string | null
    district: string | null
    address: string | null
    surface: number | null
    price: Decimal | null
    priceLabel: string | null
    rooms: number | null
    status: $Enums.ListingStatus | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    propertyType: string | null
    city: string | null
    district: string | null
    address: string | null
    surface: number | null
    price: Decimal | null
    priceLabel: string | null
    rooms: number | null
    status: $Enums.ListingStatus | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    title: number
    description: number
    propertyType: number
    city: number
    district: number
    address: number
    surface: number
    price: number
    priceLabel: number
    rooms: number
    imageUrls: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    surface?: true
    price?: true
    rooms?: true
  }

  export type ListingSumAggregateInputType = {
    surface?: true
    price?: true
    rooms?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    propertyType?: true
    city?: true
    district?: true
    address?: true
    surface?: true
    price?: true
    priceLabel?: true
    rooms?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    propertyType?: true
    city?: true
    district?: true
    address?: true
    surface?: true
    price?: true
    priceLabel?: true
    rooms?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    propertyType?: true
    city?: true
    district?: true
    address?: true
    surface?: true
    price?: true
    priceLabel?: true
    rooms?: true
    imageUrls?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    title: string
    description: string
    propertyType: string
    city: string
    district: string | null
    address: string | null
    surface: number | null
    price: Decimal | null
    priceLabel: string | null
    rooms: number | null
    imageUrls: string[]
    status: $Enums.ListingStatus
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    propertyType?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    surface?: boolean
    price?: boolean
    priceLabel?: boolean
    rooms?: boolean
    imageUrls?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Listing$createdByArgs<ExtArgs>
    applications?: boolean | Listing$applicationsArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    propertyType?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    surface?: boolean
    price?: boolean
    priceLabel?: boolean
    rooms?: boolean
    imageUrls?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Listing$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    propertyType?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    surface?: boolean
    price?: boolean
    priceLabel?: boolean
    rooms?: boolean
    imageUrls?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Listing$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    propertyType?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    surface?: boolean
    price?: boolean
    priceLabel?: boolean
    rooms?: boolean
    imageUrls?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "propertyType" | "city" | "district" | "address" | "surface" | "price" | "priceLabel" | "rooms" | "imageUrls" | "status" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Listing$createdByArgs<ExtArgs>
    applications?: boolean | Listing$applicationsArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Listing$createdByArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Listing$createdByArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      applications: Prisma.$ListingApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      propertyType: string
      city: string
      district: string | null
      address: string | null
      surface: number | null
      price: Prisma.Decimal | null
      priceLabel: string | null
      rooms: number | null
      imageUrls: string[]
      status: $Enums.ListingStatus
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Listing$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Listing$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applications<T extends Listing$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly title: FieldRef<"Listing", 'String'>
    readonly description: FieldRef<"Listing", 'String'>
    readonly propertyType: FieldRef<"Listing", 'String'>
    readonly city: FieldRef<"Listing", 'String'>
    readonly district: FieldRef<"Listing", 'String'>
    readonly address: FieldRef<"Listing", 'String'>
    readonly surface: FieldRef<"Listing", 'Float'>
    readonly price: FieldRef<"Listing", 'Decimal'>
    readonly priceLabel: FieldRef<"Listing", 'String'>
    readonly rooms: FieldRef<"Listing", 'Int'>
    readonly imageUrls: FieldRef<"Listing", 'String[]'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly createdById: FieldRef<"Listing", 'String'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing.createdBy
   */
  export type Listing$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Listing.applications
   */
  export type Listing$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    where?: ListingApplicationWhereInput
    orderBy?: ListingApplicationOrderByWithRelationInput | ListingApplicationOrderByWithRelationInput[]
    cursor?: ListingApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingApplicationScalarFieldEnum | ListingApplicationScalarFieldEnum[]
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model ListingApplication
   */

  export type AggregateListingApplication = {
    _count: ListingApplicationCountAggregateOutputType | null
    _avg: ListingApplicationAvgAggregateOutputType | null
    _sum: ListingApplicationSumAggregateOutputType | null
    _min: ListingApplicationMinAggregateOutputType | null
    _max: ListingApplicationMaxAggregateOutputType | null
  }

  export type ListingApplicationAvgAggregateOutputType = {
    childrenCount: number | null
  }

  export type ListingApplicationSumAggregateOutputType = {
    childrenCount: number | null
  }

  export type ListingApplicationMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    userId: string | null
    budget: string | null
    phone: string | null
    profession: string | null
    maritalStatus: $Enums.MaritalStatus | null
    hasChildren: boolean | null
    childrenCount: number | null
    message: string | null
    status: $Enums.ListingApplicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingApplicationMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    userId: string | null
    budget: string | null
    phone: string | null
    profession: string | null
    maritalStatus: $Enums.MaritalStatus | null
    hasChildren: boolean | null
    childrenCount: number | null
    message: string | null
    status: $Enums.ListingApplicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingApplicationCountAggregateOutputType = {
    id: number
    listingId: number
    userId: number
    budget: number
    phone: number
    profession: number
    maritalStatus: number
    hasChildren: number
    childrenCount: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingApplicationAvgAggregateInputType = {
    childrenCount?: true
  }

  export type ListingApplicationSumAggregateInputType = {
    childrenCount?: true
  }

  export type ListingApplicationMinAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    budget?: true
    phone?: true
    profession?: true
    maritalStatus?: true
    hasChildren?: true
    childrenCount?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingApplicationMaxAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    budget?: true
    phone?: true
    profession?: true
    maritalStatus?: true
    hasChildren?: true
    childrenCount?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingApplicationCountAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    budget?: true
    phone?: true
    profession?: true
    maritalStatus?: true
    hasChildren?: true
    childrenCount?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingApplication to aggregate.
     */
    where?: ListingApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingApplications to fetch.
     */
    orderBy?: ListingApplicationOrderByWithRelationInput | ListingApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListingApplications
    **/
    _count?: true | ListingApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingApplicationMaxAggregateInputType
  }

  export type GetListingApplicationAggregateType<T extends ListingApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateListingApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListingApplication[P]>
      : GetScalarType<T[P], AggregateListingApplication[P]>
  }




  export type ListingApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingApplicationWhereInput
    orderBy?: ListingApplicationOrderByWithAggregationInput | ListingApplicationOrderByWithAggregationInput[]
    by: ListingApplicationScalarFieldEnum[] | ListingApplicationScalarFieldEnum
    having?: ListingApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingApplicationCountAggregateInputType | true
    _avg?: ListingApplicationAvgAggregateInputType
    _sum?: ListingApplicationSumAggregateInputType
    _min?: ListingApplicationMinAggregateInputType
    _max?: ListingApplicationMaxAggregateInputType
  }

  export type ListingApplicationGroupByOutputType = {
    id: string
    listingId: string
    userId: string
    budget: string
    phone: string
    profession: string | null
    maritalStatus: $Enums.MaritalStatus | null
    hasChildren: boolean | null
    childrenCount: number | null
    message: string | null
    status: $Enums.ListingApplicationStatus
    createdAt: Date
    updatedAt: Date
    _count: ListingApplicationCountAggregateOutputType | null
    _avg: ListingApplicationAvgAggregateOutputType | null
    _sum: ListingApplicationSumAggregateOutputType | null
    _min: ListingApplicationMinAggregateOutputType | null
    _max: ListingApplicationMaxAggregateOutputType | null
  }

  type GetListingApplicationGroupByPayload<T extends ListingApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ListingApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ListingApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    budget?: boolean
    phone?: boolean
    profession?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    childrenCount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingApplication"]>

  export type ListingApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    budget?: boolean
    phone?: boolean
    profession?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    childrenCount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingApplication"]>

  export type ListingApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    budget?: boolean
    phone?: boolean
    profession?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    childrenCount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingApplication"]>

  export type ListingApplicationSelectScalar = {
    id?: boolean
    listingId?: boolean
    userId?: boolean
    budget?: boolean
    phone?: boolean
    profession?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    childrenCount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "userId" | "budget" | "phone" | "profession" | "maritalStatus" | "hasChildren" | "childrenCount" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["listingApplication"]>
  export type ListingApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListingApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListingApplication"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      userId: string
      budget: string
      phone: string
      profession: string | null
      maritalStatus: $Enums.MaritalStatus | null
      hasChildren: boolean | null
      childrenCount: number | null
      message: string | null
      status: $Enums.ListingApplicationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listingApplication"]>
    composites: {}
  }

  type ListingApplicationGetPayload<S extends boolean | null | undefined | ListingApplicationDefaultArgs> = $Result.GetResult<Prisma.$ListingApplicationPayload, S>

  type ListingApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingApplicationCountAggregateInputType | true
    }

  export interface ListingApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListingApplication'], meta: { name: 'ListingApplication' } }
    /**
     * Find zero or one ListingApplication that matches the filter.
     * @param {ListingApplicationFindUniqueArgs} args - Arguments to find a ListingApplication
     * @example
     * // Get one ListingApplication
     * const listingApplication = await prisma.listingApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingApplicationFindUniqueArgs>(args: SelectSubset<T, ListingApplicationFindUniqueArgs<ExtArgs>>): Prisma__ListingApplicationClient<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListingApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingApplicationFindUniqueOrThrowArgs} args - Arguments to find a ListingApplication
     * @example
     * // Get one ListingApplication
     * const listingApplication = await prisma.listingApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingApplicationClient<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingApplicationFindFirstArgs} args - Arguments to find a ListingApplication
     * @example
     * // Get one ListingApplication
     * const listingApplication = await prisma.listingApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingApplicationFindFirstArgs>(args?: SelectSubset<T, ListingApplicationFindFirstArgs<ExtArgs>>): Prisma__ListingApplicationClient<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingApplicationFindFirstOrThrowArgs} args - Arguments to find a ListingApplication
     * @example
     * // Get one ListingApplication
     * const listingApplication = await prisma.listingApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingApplicationClient<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListingApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListingApplications
     * const listingApplications = await prisma.listingApplication.findMany()
     * 
     * // Get first 10 ListingApplications
     * const listingApplications = await prisma.listingApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingApplicationWithIdOnly = await prisma.listingApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingApplicationFindManyArgs>(args?: SelectSubset<T, ListingApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListingApplication.
     * @param {ListingApplicationCreateArgs} args - Arguments to create a ListingApplication.
     * @example
     * // Create one ListingApplication
     * const ListingApplication = await prisma.listingApplication.create({
     *   data: {
     *     // ... data to create a ListingApplication
     *   }
     * })
     * 
     */
    create<T extends ListingApplicationCreateArgs>(args: SelectSubset<T, ListingApplicationCreateArgs<ExtArgs>>): Prisma__ListingApplicationClient<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListingApplications.
     * @param {ListingApplicationCreateManyArgs} args - Arguments to create many ListingApplications.
     * @example
     * // Create many ListingApplications
     * const listingApplication = await prisma.listingApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingApplicationCreateManyArgs>(args?: SelectSubset<T, ListingApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListingApplications and returns the data saved in the database.
     * @param {ListingApplicationCreateManyAndReturnArgs} args - Arguments to create many ListingApplications.
     * @example
     * // Create many ListingApplications
     * const listingApplication = await prisma.listingApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListingApplications and only return the `id`
     * const listingApplicationWithIdOnly = await prisma.listingApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListingApplication.
     * @param {ListingApplicationDeleteArgs} args - Arguments to delete one ListingApplication.
     * @example
     * // Delete one ListingApplication
     * const ListingApplication = await prisma.listingApplication.delete({
     *   where: {
     *     // ... filter to delete one ListingApplication
     *   }
     * })
     * 
     */
    delete<T extends ListingApplicationDeleteArgs>(args: SelectSubset<T, ListingApplicationDeleteArgs<ExtArgs>>): Prisma__ListingApplicationClient<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListingApplication.
     * @param {ListingApplicationUpdateArgs} args - Arguments to update one ListingApplication.
     * @example
     * // Update one ListingApplication
     * const listingApplication = await prisma.listingApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingApplicationUpdateArgs>(args: SelectSubset<T, ListingApplicationUpdateArgs<ExtArgs>>): Prisma__ListingApplicationClient<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListingApplications.
     * @param {ListingApplicationDeleteManyArgs} args - Arguments to filter ListingApplications to delete.
     * @example
     * // Delete a few ListingApplications
     * const { count } = await prisma.listingApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingApplicationDeleteManyArgs>(args?: SelectSubset<T, ListingApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListingApplications
     * const listingApplication = await prisma.listingApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingApplicationUpdateManyArgs>(args: SelectSubset<T, ListingApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingApplications and returns the data updated in the database.
     * @param {ListingApplicationUpdateManyAndReturnArgs} args - Arguments to update many ListingApplications.
     * @example
     * // Update many ListingApplications
     * const listingApplication = await prisma.listingApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListingApplications and only return the `id`
     * const listingApplicationWithIdOnly = await prisma.listingApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListingApplication.
     * @param {ListingApplicationUpsertArgs} args - Arguments to update or create a ListingApplication.
     * @example
     * // Update or create a ListingApplication
     * const listingApplication = await prisma.listingApplication.upsert({
     *   create: {
     *     // ... data to create a ListingApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListingApplication we want to update
     *   }
     * })
     */
    upsert<T extends ListingApplicationUpsertArgs>(args: SelectSubset<T, ListingApplicationUpsertArgs<ExtArgs>>): Prisma__ListingApplicationClient<$Result.GetResult<Prisma.$ListingApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListingApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingApplicationCountArgs} args - Arguments to filter ListingApplications to count.
     * @example
     * // Count the number of ListingApplications
     * const count = await prisma.listingApplication.count({
     *   where: {
     *     // ... the filter for the ListingApplications we want to count
     *   }
     * })
    **/
    count<T extends ListingApplicationCountArgs>(
      args?: Subset<T, ListingApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListingApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingApplicationAggregateArgs>(args: Subset<T, ListingApplicationAggregateArgs>): Prisma.PrismaPromise<GetListingApplicationAggregateType<T>>

    /**
     * Group by ListingApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingApplicationGroupByArgs} args - Group by arguments.
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
      T extends ListingApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ListingApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListingApplication model
   */
  readonly fields: ListingApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListingApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListingApplication model
   */
  interface ListingApplicationFieldRefs {
    readonly id: FieldRef<"ListingApplication", 'String'>
    readonly listingId: FieldRef<"ListingApplication", 'String'>
    readonly userId: FieldRef<"ListingApplication", 'String'>
    readonly budget: FieldRef<"ListingApplication", 'String'>
    readonly phone: FieldRef<"ListingApplication", 'String'>
    readonly profession: FieldRef<"ListingApplication", 'String'>
    readonly maritalStatus: FieldRef<"ListingApplication", 'MaritalStatus'>
    readonly hasChildren: FieldRef<"ListingApplication", 'Boolean'>
    readonly childrenCount: FieldRef<"ListingApplication", 'Int'>
    readonly message: FieldRef<"ListingApplication", 'String'>
    readonly status: FieldRef<"ListingApplication", 'ListingApplicationStatus'>
    readonly createdAt: FieldRef<"ListingApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"ListingApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListingApplication findUnique
   */
  export type ListingApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ListingApplication to fetch.
     */
    where: ListingApplicationWhereUniqueInput
  }

  /**
   * ListingApplication findUniqueOrThrow
   */
  export type ListingApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ListingApplication to fetch.
     */
    where: ListingApplicationWhereUniqueInput
  }

  /**
   * ListingApplication findFirst
   */
  export type ListingApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ListingApplication to fetch.
     */
    where?: ListingApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingApplications to fetch.
     */
    orderBy?: ListingApplicationOrderByWithRelationInput | ListingApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingApplications.
     */
    cursor?: ListingApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingApplications.
     */
    distinct?: ListingApplicationScalarFieldEnum | ListingApplicationScalarFieldEnum[]
  }

  /**
   * ListingApplication findFirstOrThrow
   */
  export type ListingApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ListingApplication to fetch.
     */
    where?: ListingApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingApplications to fetch.
     */
    orderBy?: ListingApplicationOrderByWithRelationInput | ListingApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingApplications.
     */
    cursor?: ListingApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingApplications.
     */
    distinct?: ListingApplicationScalarFieldEnum | ListingApplicationScalarFieldEnum[]
  }

  /**
   * ListingApplication findMany
   */
  export type ListingApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ListingApplications to fetch.
     */
    where?: ListingApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingApplications to fetch.
     */
    orderBy?: ListingApplicationOrderByWithRelationInput | ListingApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListingApplications.
     */
    cursor?: ListingApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingApplications.
     */
    skip?: number
    distinct?: ListingApplicationScalarFieldEnum | ListingApplicationScalarFieldEnum[]
  }

  /**
   * ListingApplication create
   */
  export type ListingApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a ListingApplication.
     */
    data: XOR<ListingApplicationCreateInput, ListingApplicationUncheckedCreateInput>
  }

  /**
   * ListingApplication createMany
   */
  export type ListingApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListingApplications.
     */
    data: ListingApplicationCreateManyInput | ListingApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingApplication createManyAndReturn
   */
  export type ListingApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many ListingApplications.
     */
    data: ListingApplicationCreateManyInput | ListingApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingApplication update
   */
  export type ListingApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a ListingApplication.
     */
    data: XOR<ListingApplicationUpdateInput, ListingApplicationUncheckedUpdateInput>
    /**
     * Choose, which ListingApplication to update.
     */
    where: ListingApplicationWhereUniqueInput
  }

  /**
   * ListingApplication updateMany
   */
  export type ListingApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListingApplications.
     */
    data: XOR<ListingApplicationUpdateManyMutationInput, ListingApplicationUncheckedUpdateManyInput>
    /**
     * Filter which ListingApplications to update
     */
    where?: ListingApplicationWhereInput
    /**
     * Limit how many ListingApplications to update.
     */
    limit?: number
  }

  /**
   * ListingApplication updateManyAndReturn
   */
  export type ListingApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * The data used to update ListingApplications.
     */
    data: XOR<ListingApplicationUpdateManyMutationInput, ListingApplicationUncheckedUpdateManyInput>
    /**
     * Filter which ListingApplications to update
     */
    where?: ListingApplicationWhereInput
    /**
     * Limit how many ListingApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingApplication upsert
   */
  export type ListingApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the ListingApplication to update in case it exists.
     */
    where: ListingApplicationWhereUniqueInput
    /**
     * In case the ListingApplication found by the `where` argument doesn't exist, create a new ListingApplication with this data.
     */
    create: XOR<ListingApplicationCreateInput, ListingApplicationUncheckedCreateInput>
    /**
     * In case the ListingApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingApplicationUpdateInput, ListingApplicationUncheckedUpdateInput>
  }

  /**
   * ListingApplication delete
   */
  export type ListingApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
    /**
     * Filter which ListingApplication to delete.
     */
    where: ListingApplicationWhereUniqueInput
  }

  /**
   * ListingApplication deleteMany
   */
  export type ListingApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingApplications to delete
     */
    where?: ListingApplicationWhereInput
    /**
     * Limit how many ListingApplications to delete.
     */
    limit?: number
  }

  /**
   * ListingApplication without action
   */
  export type ListingApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingApplication
     */
    select?: ListingApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingApplication
     */
    omit?: ListingApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingApplicationInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    expiresAt: number
    revokedAt: number
    userAgent: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    tokenHash: string
    userId: string
    expiresAt: Date
    revokedAt: Date | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "expiresAt" | "revokedAt" | "userAgent" | "ipAddress" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      userId: string
      expiresAt: Date
      revokedAt: Date | null
      userAgent: string | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly userAgent: FieldRef<"RefreshToken", 'String'>
    readonly ipAddress: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Analysis
   */

  export type AggregateAnalysis = {
    _count: AnalysisCountAggregateOutputType | null
    _avg: AnalysisAvgAggregateOutputType | null
    _sum: AnalysisSumAggregateOutputType | null
    _min: AnalysisMinAggregateOutputType | null
    _max: AnalysisMaxAggregateOutputType | null
  }

  export type AnalysisAvgAggregateOutputType = {
    budget: Decimal | null
    surface: number | null
    childrenCount: number | null
    score: number | null
  }

  export type AnalysisSumAggregateOutputType = {
    budget: Decimal | null
    surface: number | null
    childrenCount: number | null
    score: number | null
  }

  export type AnalysisMinAggregateOutputType = {
    id: string | null
    userId: string | null
    projectType: $Enums.ProjectType | null
    city: string | null
    district: string | null
    budget: Decimal | null
    budgetRange: string | null
    propertyType: string | null
    surface: number | null
    surfaceRange: string | null
    urgency: $Enums.Urgency | null
    objective: string | null
    message: string | null
    profession: string | null
    maritalStatus: $Enums.MaritalStatus | null
    hasChildren: boolean | null
    childrenCount: number | null
    personalNotes: string | null
    consentAccepted: boolean | null
    score: number | null
    maturityLevel: $Enums.MaturityLevel | null
    commercialPriority: $Enums.CommercialPriority | null
    profileType: string | null
    recommendedService: string | null
    nextAction: string | null
    status: $Enums.AnalysisStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalysisMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    projectType: $Enums.ProjectType | null
    city: string | null
    district: string | null
    budget: Decimal | null
    budgetRange: string | null
    propertyType: string | null
    surface: number | null
    surfaceRange: string | null
    urgency: $Enums.Urgency | null
    objective: string | null
    message: string | null
    profession: string | null
    maritalStatus: $Enums.MaritalStatus | null
    hasChildren: boolean | null
    childrenCount: number | null
    personalNotes: string | null
    consentAccepted: boolean | null
    score: number | null
    maturityLevel: $Enums.MaturityLevel | null
    commercialPriority: $Enums.CommercialPriority | null
    profileType: string | null
    recommendedService: string | null
    nextAction: string | null
    status: $Enums.AnalysisStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalysisCountAggregateOutputType = {
    id: number
    userId: number
    projectType: number
    city: number
    district: number
    budget: number
    budgetRange: number
    propertyType: number
    surface: number
    surfaceRange: number
    urgency: number
    objective: number
    message: number
    profession: number
    maritalStatus: number
    hasChildren: number
    childrenCount: number
    personalNotes: number
    consentAccepted: number
    score: number
    maturityLevel: number
    commercialPriority: number
    profileType: number
    recommendedService: number
    strengths: number
    missingInfo: number
    recommendations: number
    nextAction: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnalysisAvgAggregateInputType = {
    budget?: true
    surface?: true
    childrenCount?: true
    score?: true
  }

  export type AnalysisSumAggregateInputType = {
    budget?: true
    surface?: true
    childrenCount?: true
    score?: true
  }

  export type AnalysisMinAggregateInputType = {
    id?: true
    userId?: true
    projectType?: true
    city?: true
    district?: true
    budget?: true
    budgetRange?: true
    propertyType?: true
    surface?: true
    surfaceRange?: true
    urgency?: true
    objective?: true
    message?: true
    profession?: true
    maritalStatus?: true
    hasChildren?: true
    childrenCount?: true
    personalNotes?: true
    consentAccepted?: true
    score?: true
    maturityLevel?: true
    commercialPriority?: true
    profileType?: true
    recommendedService?: true
    nextAction?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalysisMaxAggregateInputType = {
    id?: true
    userId?: true
    projectType?: true
    city?: true
    district?: true
    budget?: true
    budgetRange?: true
    propertyType?: true
    surface?: true
    surfaceRange?: true
    urgency?: true
    objective?: true
    message?: true
    profession?: true
    maritalStatus?: true
    hasChildren?: true
    childrenCount?: true
    personalNotes?: true
    consentAccepted?: true
    score?: true
    maturityLevel?: true
    commercialPriority?: true
    profileType?: true
    recommendedService?: true
    nextAction?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalysisCountAggregateInputType = {
    id?: true
    userId?: true
    projectType?: true
    city?: true
    district?: true
    budget?: true
    budgetRange?: true
    propertyType?: true
    surface?: true
    surfaceRange?: true
    urgency?: true
    objective?: true
    message?: true
    profession?: true
    maritalStatus?: true
    hasChildren?: true
    childrenCount?: true
    personalNotes?: true
    consentAccepted?: true
    score?: true
    maturityLevel?: true
    commercialPriority?: true
    profileType?: true
    recommendedService?: true
    strengths?: true
    missingInfo?: true
    recommendations?: true
    nextAction?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analysis to aggregate.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analyses
    **/
    _count?: true | AnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisMaxAggregateInputType
  }

  export type GetAnalysisAggregateType<T extends AnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysis[P]>
      : GetScalarType<T[P], AggregateAnalysis[P]>
  }




  export type AnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithAggregationInput | AnalysisOrderByWithAggregationInput[]
    by: AnalysisScalarFieldEnum[] | AnalysisScalarFieldEnum
    having?: AnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisCountAggregateInputType | true
    _avg?: AnalysisAvgAggregateInputType
    _sum?: AnalysisSumAggregateInputType
    _min?: AnalysisMinAggregateInputType
    _max?: AnalysisMaxAggregateInputType
  }

  export type AnalysisGroupByOutputType = {
    id: string
    userId: string
    projectType: $Enums.ProjectType
    city: string
    district: string | null
    budget: Decimal | null
    budgetRange: string | null
    propertyType: string | null
    surface: number | null
    surfaceRange: string | null
    urgency: $Enums.Urgency
    objective: string | null
    message: string | null
    profession: string | null
    maritalStatus: $Enums.MaritalStatus | null
    hasChildren: boolean | null
    childrenCount: number | null
    personalNotes: string | null
    consentAccepted: boolean
    score: number
    maturityLevel: $Enums.MaturityLevel
    commercialPriority: $Enums.CommercialPriority
    profileType: string
    recommendedService: string
    strengths: string[]
    missingInfo: string[]
    recommendations: string[]
    nextAction: string
    status: $Enums.AnalysisStatus
    createdAt: Date
    updatedAt: Date
    _count: AnalysisCountAggregateOutputType | null
    _avg: AnalysisAvgAggregateOutputType | null
    _sum: AnalysisSumAggregateOutputType | null
    _min: AnalysisMinAggregateOutputType | null
    _max: AnalysisMaxAggregateOutputType | null
  }

  type GetAnalysisGroupByPayload<T extends AnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectType?: boolean
    city?: boolean
    district?: boolean
    budget?: boolean
    budgetRange?: boolean
    propertyType?: boolean
    surface?: boolean
    surfaceRange?: boolean
    urgency?: boolean
    objective?: boolean
    message?: boolean
    profession?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    childrenCount?: boolean
    personalNotes?: boolean
    consentAccepted?: boolean
    score?: boolean
    maturityLevel?: boolean
    commercialPriority?: boolean
    profileType?: boolean
    recommendedService?: boolean
    strengths?: boolean
    missingInfo?: boolean
    recommendations?: boolean
    nextAction?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectType?: boolean
    city?: boolean
    district?: boolean
    budget?: boolean
    budgetRange?: boolean
    propertyType?: boolean
    surface?: boolean
    surfaceRange?: boolean
    urgency?: boolean
    objective?: boolean
    message?: boolean
    profession?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    childrenCount?: boolean
    personalNotes?: boolean
    consentAccepted?: boolean
    score?: boolean
    maturityLevel?: boolean
    commercialPriority?: boolean
    profileType?: boolean
    recommendedService?: boolean
    strengths?: boolean
    missingInfo?: boolean
    recommendations?: boolean
    nextAction?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectType?: boolean
    city?: boolean
    district?: boolean
    budget?: boolean
    budgetRange?: boolean
    propertyType?: boolean
    surface?: boolean
    surfaceRange?: boolean
    urgency?: boolean
    objective?: boolean
    message?: boolean
    profession?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    childrenCount?: boolean
    personalNotes?: boolean
    consentAccepted?: boolean
    score?: boolean
    maturityLevel?: boolean
    commercialPriority?: boolean
    profileType?: boolean
    recommendedService?: boolean
    strengths?: boolean
    missingInfo?: boolean
    recommendations?: boolean
    nextAction?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectScalar = {
    id?: boolean
    userId?: boolean
    projectType?: boolean
    city?: boolean
    district?: boolean
    budget?: boolean
    budgetRange?: boolean
    propertyType?: boolean
    surface?: boolean
    surfaceRange?: boolean
    urgency?: boolean
    objective?: boolean
    message?: boolean
    profession?: boolean
    maritalStatus?: boolean
    hasChildren?: boolean
    childrenCount?: boolean
    personalNotes?: boolean
    consentAccepted?: boolean
    score?: boolean
    maturityLevel?: boolean
    commercialPriority?: boolean
    profileType?: boolean
    recommendedService?: boolean
    strengths?: boolean
    missingInfo?: boolean
    recommendations?: boolean
    nextAction?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "projectType" | "city" | "district" | "budget" | "budgetRange" | "propertyType" | "surface" | "surfaceRange" | "urgency" | "objective" | "message" | "profession" | "maritalStatus" | "hasChildren" | "childrenCount" | "personalNotes" | "consentAccepted" | "score" | "maturityLevel" | "commercialPriority" | "profileType" | "recommendedService" | "strengths" | "missingInfo" | "recommendations" | "nextAction" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["analysis"]>
  export type AnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      projectType: $Enums.ProjectType
      city: string
      district: string | null
      budget: Prisma.Decimal | null
      budgetRange: string | null
      propertyType: string | null
      surface: number | null
      surfaceRange: string | null
      urgency: $Enums.Urgency
      objective: string | null
      message: string | null
      profession: string | null
      maritalStatus: $Enums.MaritalStatus | null
      hasChildren: boolean | null
      childrenCount: number | null
      personalNotes: string | null
      consentAccepted: boolean
      score: number
      maturityLevel: $Enums.MaturityLevel
      commercialPriority: $Enums.CommercialPriority
      profileType: string
      recommendedService: string
      strengths: string[]
      missingInfo: string[]
      recommendations: string[]
      nextAction: string
      status: $Enums.AnalysisStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["analysis"]>
    composites: {}
  }

  type AnalysisGetPayload<S extends boolean | null | undefined | AnalysisDefaultArgs> = $Result.GetResult<Prisma.$AnalysisPayload, S>

  type AnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisCountAggregateInputType | true
    }

  export interface AnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analysis'], meta: { name: 'Analysis' } }
    /**
     * Find zero or one Analysis that matches the filter.
     * @param {AnalysisFindUniqueArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisFindUniqueArgs>(args: SelectSubset<T, AnalysisFindUniqueArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisFindUniqueOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisFindFirstArgs>(args?: SelectSubset<T, AnalysisFindFirstArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyses
     * const analyses = await prisma.analysis.findMany()
     * 
     * // Get first 10 Analyses
     * const analyses = await prisma.analysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisWithIdOnly = await prisma.analysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisFindManyArgs>(args?: SelectSubset<T, AnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analysis.
     * @param {AnalysisCreateArgs} args - Arguments to create a Analysis.
     * @example
     * // Create one Analysis
     * const Analysis = await prisma.analysis.create({
     *   data: {
     *     // ... data to create a Analysis
     *   }
     * })
     * 
     */
    create<T extends AnalysisCreateArgs>(args: SelectSubset<T, AnalysisCreateArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analyses.
     * @param {AnalysisCreateManyArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisCreateManyArgs>(args?: SelectSubset<T, AnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analyses and returns the data saved in the database.
     * @param {AnalysisCreateManyAndReturnArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analysis.
     * @param {AnalysisDeleteArgs} args - Arguments to delete one Analysis.
     * @example
     * // Delete one Analysis
     * const Analysis = await prisma.analysis.delete({
     *   where: {
     *     // ... filter to delete one Analysis
     *   }
     * })
     * 
     */
    delete<T extends AnalysisDeleteArgs>(args: SelectSubset<T, AnalysisDeleteArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analysis.
     * @param {AnalysisUpdateArgs} args - Arguments to update one Analysis.
     * @example
     * // Update one Analysis
     * const analysis = await prisma.analysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisUpdateArgs>(args: SelectSubset<T, AnalysisUpdateArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analyses.
     * @param {AnalysisDeleteManyArgs} args - Arguments to filter Analyses to delete.
     * @example
     * // Delete a few Analyses
     * const { count } = await prisma.analysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisDeleteManyArgs>(args?: SelectSubset<T, AnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisUpdateManyArgs>(args: SelectSubset<T, AnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses and returns the data updated in the database.
     * @param {AnalysisUpdateManyAndReturnArgs} args - Arguments to update many Analyses.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analysis.
     * @param {AnalysisUpsertArgs} args - Arguments to update or create a Analysis.
     * @example
     * // Update or create a Analysis
     * const analysis = await prisma.analysis.upsert({
     *   create: {
     *     // ... data to create a Analysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analysis we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisUpsertArgs>(args: SelectSubset<T, AnalysisUpsertArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCountArgs} args - Arguments to filter Analyses to count.
     * @example
     * // Count the number of Analyses
     * const count = await prisma.analysis.count({
     *   where: {
     *     // ... the filter for the Analyses we want to count
     *   }
     * })
    **/
    count<T extends AnalysisCountArgs>(
      args?: Subset<T, AnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisAggregateArgs>(args: Subset<T, AnalysisAggregateArgs>): Prisma.PrismaPromise<GetAnalysisAggregateType<T>>

    /**
     * Group by Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisGroupByArgs} args - Group by arguments.
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
      T extends AnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analysis model
   */
  readonly fields: AnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Analysis model
   */
  interface AnalysisFieldRefs {
    readonly id: FieldRef<"Analysis", 'String'>
    readonly userId: FieldRef<"Analysis", 'String'>
    readonly projectType: FieldRef<"Analysis", 'ProjectType'>
    readonly city: FieldRef<"Analysis", 'String'>
    readonly district: FieldRef<"Analysis", 'String'>
    readonly budget: FieldRef<"Analysis", 'Decimal'>
    readonly budgetRange: FieldRef<"Analysis", 'String'>
    readonly propertyType: FieldRef<"Analysis", 'String'>
    readonly surface: FieldRef<"Analysis", 'Float'>
    readonly surfaceRange: FieldRef<"Analysis", 'String'>
    readonly urgency: FieldRef<"Analysis", 'Urgency'>
    readonly objective: FieldRef<"Analysis", 'String'>
    readonly message: FieldRef<"Analysis", 'String'>
    readonly profession: FieldRef<"Analysis", 'String'>
    readonly maritalStatus: FieldRef<"Analysis", 'MaritalStatus'>
    readonly hasChildren: FieldRef<"Analysis", 'Boolean'>
    readonly childrenCount: FieldRef<"Analysis", 'Int'>
    readonly personalNotes: FieldRef<"Analysis", 'String'>
    readonly consentAccepted: FieldRef<"Analysis", 'Boolean'>
    readonly score: FieldRef<"Analysis", 'Int'>
    readonly maturityLevel: FieldRef<"Analysis", 'MaturityLevel'>
    readonly commercialPriority: FieldRef<"Analysis", 'CommercialPriority'>
    readonly profileType: FieldRef<"Analysis", 'String'>
    readonly recommendedService: FieldRef<"Analysis", 'String'>
    readonly strengths: FieldRef<"Analysis", 'String[]'>
    readonly missingInfo: FieldRef<"Analysis", 'String[]'>
    readonly recommendations: FieldRef<"Analysis", 'String[]'>
    readonly nextAction: FieldRef<"Analysis", 'String'>
    readonly status: FieldRef<"Analysis", 'AnalysisStatus'>
    readonly createdAt: FieldRef<"Analysis", 'DateTime'>
    readonly updatedAt: FieldRef<"Analysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analysis findUnique
   */
  export type AnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis findUniqueOrThrow
   */
  export type AnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis findFirst
   */
  export type AnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis findFirstOrThrow
   */
  export type AnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis findMany
   */
  export type AnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis create
   */
  export type AnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a Analysis.
     */
    data: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>
  }

  /**
   * Analysis createMany
   */
  export type AnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analysis createManyAndReturn
   */
  export type AnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analysis update
   */
  export type AnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a Analysis.
     */
    data: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>
    /**
     * Choose, which Analysis to update.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis updateMany
   */
  export type AnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
  }

  /**
   * Analysis updateManyAndReturn
   */
  export type AnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analysis upsert
   */
  export type AnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the Analysis to update in case it exists.
     */
    where: AnalysisWhereUniqueInput
    /**
     * In case the Analysis found by the `where` argument doesn't exist, create a new Analysis with this data.
     */
    create: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>
    /**
     * In case the Analysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>
  }

  /**
   * Analysis delete
   */
  export type AnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter which Analysis to delete.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis deleteMany
   */
  export type AnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyses to delete
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to delete.
     */
    limit?: number
  }

  /**
   * Analysis without action
   */
  export type AnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisHistory
   */

  export type AggregateAnalysisHistory = {
    _count: AnalysisHistoryCountAggregateOutputType | null
    _min: AnalysisHistoryMinAggregateOutputType | null
    _max: AnalysisHistoryMaxAggregateOutputType | null
  }

  export type AnalysisHistoryMinAggregateOutputType = {
    id: string | null
    originalAnalysisId: string | null
    userId: string | null
    userEmail: string | null
    userFirstName: string | null
    userLastName: string | null
    userPhone: string | null
    deletedBy: string | null
    deletedAt: Date | null
  }

  export type AnalysisHistoryMaxAggregateOutputType = {
    id: string | null
    originalAnalysisId: string | null
    userId: string | null
    userEmail: string | null
    userFirstName: string | null
    userLastName: string | null
    userPhone: string | null
    deletedBy: string | null
    deletedAt: Date | null
  }

  export type AnalysisHistoryCountAggregateOutputType = {
    id: number
    originalAnalysisId: number
    userId: number
    userEmail: number
    userFirstName: number
    userLastName: number
    userPhone: number
    snapshot: number
    deletedBy: number
    deletedAt: number
    _all: number
  }


  export type AnalysisHistoryMinAggregateInputType = {
    id?: true
    originalAnalysisId?: true
    userId?: true
    userEmail?: true
    userFirstName?: true
    userLastName?: true
    userPhone?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type AnalysisHistoryMaxAggregateInputType = {
    id?: true
    originalAnalysisId?: true
    userId?: true
    userEmail?: true
    userFirstName?: true
    userLastName?: true
    userPhone?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type AnalysisHistoryCountAggregateInputType = {
    id?: true
    originalAnalysisId?: true
    userId?: true
    userEmail?: true
    userFirstName?: true
    userLastName?: true
    userPhone?: true
    snapshot?: true
    deletedBy?: true
    deletedAt?: true
    _all?: true
  }

  export type AnalysisHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisHistory to aggregate.
     */
    where?: AnalysisHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHistories to fetch.
     */
    orderBy?: AnalysisHistoryOrderByWithRelationInput | AnalysisHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisHistories
    **/
    _count?: true | AnalysisHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisHistoryMaxAggregateInputType
  }

  export type GetAnalysisHistoryAggregateType<T extends AnalysisHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisHistory[P]>
      : GetScalarType<T[P], AggregateAnalysisHistory[P]>
  }




  export type AnalysisHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisHistoryWhereInput
    orderBy?: AnalysisHistoryOrderByWithAggregationInput | AnalysisHistoryOrderByWithAggregationInput[]
    by: AnalysisHistoryScalarFieldEnum[] | AnalysisHistoryScalarFieldEnum
    having?: AnalysisHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisHistoryCountAggregateInputType | true
    _min?: AnalysisHistoryMinAggregateInputType
    _max?: AnalysisHistoryMaxAggregateInputType
  }

  export type AnalysisHistoryGroupByOutputType = {
    id: string
    originalAnalysisId: string
    userId: string | null
    userEmail: string
    userFirstName: string
    userLastName: string
    userPhone: string | null
    snapshot: JsonValue
    deletedBy: string
    deletedAt: Date
    _count: AnalysisHistoryCountAggregateOutputType | null
    _min: AnalysisHistoryMinAggregateOutputType | null
    _max: AnalysisHistoryMaxAggregateOutputType | null
  }

  type GetAnalysisHistoryGroupByPayload<T extends AnalysisHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalAnalysisId?: boolean
    userId?: boolean
    userEmail?: boolean
    userFirstName?: boolean
    userLastName?: boolean
    userPhone?: boolean
    snapshot?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["analysisHistory"]>

  export type AnalysisHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalAnalysisId?: boolean
    userId?: boolean
    userEmail?: boolean
    userFirstName?: boolean
    userLastName?: boolean
    userPhone?: boolean
    snapshot?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["analysisHistory"]>

  export type AnalysisHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalAnalysisId?: boolean
    userId?: boolean
    userEmail?: boolean
    userFirstName?: boolean
    userLastName?: boolean
    userPhone?: boolean
    snapshot?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["analysisHistory"]>

  export type AnalysisHistorySelectScalar = {
    id?: boolean
    originalAnalysisId?: boolean
    userId?: boolean
    userEmail?: boolean
    userFirstName?: boolean
    userLastName?: boolean
    userPhone?: boolean
    snapshot?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
  }

  export type AnalysisHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalAnalysisId" | "userId" | "userEmail" | "userFirstName" | "userLastName" | "userPhone" | "snapshot" | "deletedBy" | "deletedAt", ExtArgs["result"]["analysisHistory"]>

  export type $AnalysisHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalAnalysisId: string
      userId: string | null
      userEmail: string
      userFirstName: string
      userLastName: string
      userPhone: string | null
      snapshot: Prisma.JsonValue
      deletedBy: string
      deletedAt: Date
    }, ExtArgs["result"]["analysisHistory"]>
    composites: {}
  }

  type AnalysisHistoryGetPayload<S extends boolean | null | undefined | AnalysisHistoryDefaultArgs> = $Result.GetResult<Prisma.$AnalysisHistoryPayload, S>

  type AnalysisHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisHistoryCountAggregateInputType | true
    }

  export interface AnalysisHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisHistory'], meta: { name: 'AnalysisHistory' } }
    /**
     * Find zero or one AnalysisHistory that matches the filter.
     * @param {AnalysisHistoryFindUniqueArgs} args - Arguments to find a AnalysisHistory
     * @example
     * // Get one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisHistoryFindUniqueArgs>(args: SelectSubset<T, AnalysisHistoryFindUniqueArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisHistoryFindUniqueOrThrowArgs} args - Arguments to find a AnalysisHistory
     * @example
     * // Get one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryFindFirstArgs} args - Arguments to find a AnalysisHistory
     * @example
     * // Get one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisHistoryFindFirstArgs>(args?: SelectSubset<T, AnalysisHistoryFindFirstArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryFindFirstOrThrowArgs} args - Arguments to find a AnalysisHistory
     * @example
     * // Get one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisHistories
     * const analysisHistories = await prisma.analysisHistory.findMany()
     * 
     * // Get first 10 AnalysisHistories
     * const analysisHistories = await prisma.analysisHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisHistoryWithIdOnly = await prisma.analysisHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisHistoryFindManyArgs>(args?: SelectSubset<T, AnalysisHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisHistory.
     * @param {AnalysisHistoryCreateArgs} args - Arguments to create a AnalysisHistory.
     * @example
     * // Create one AnalysisHistory
     * const AnalysisHistory = await prisma.analysisHistory.create({
     *   data: {
     *     // ... data to create a AnalysisHistory
     *   }
     * })
     * 
     */
    create<T extends AnalysisHistoryCreateArgs>(args: SelectSubset<T, AnalysisHistoryCreateArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisHistories.
     * @param {AnalysisHistoryCreateManyArgs} args - Arguments to create many AnalysisHistories.
     * @example
     * // Create many AnalysisHistories
     * const analysisHistory = await prisma.analysisHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisHistoryCreateManyArgs>(args?: SelectSubset<T, AnalysisHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisHistories and returns the data saved in the database.
     * @param {AnalysisHistoryCreateManyAndReturnArgs} args - Arguments to create many AnalysisHistories.
     * @example
     * // Create many AnalysisHistories
     * const analysisHistory = await prisma.analysisHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisHistories and only return the `id`
     * const analysisHistoryWithIdOnly = await prisma.analysisHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisHistory.
     * @param {AnalysisHistoryDeleteArgs} args - Arguments to delete one AnalysisHistory.
     * @example
     * // Delete one AnalysisHistory
     * const AnalysisHistory = await prisma.analysisHistory.delete({
     *   where: {
     *     // ... filter to delete one AnalysisHistory
     *   }
     * })
     * 
     */
    delete<T extends AnalysisHistoryDeleteArgs>(args: SelectSubset<T, AnalysisHistoryDeleteArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisHistory.
     * @param {AnalysisHistoryUpdateArgs} args - Arguments to update one AnalysisHistory.
     * @example
     * // Update one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisHistoryUpdateArgs>(args: SelectSubset<T, AnalysisHistoryUpdateArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisHistories.
     * @param {AnalysisHistoryDeleteManyArgs} args - Arguments to filter AnalysisHistories to delete.
     * @example
     * // Delete a few AnalysisHistories
     * const { count } = await prisma.analysisHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisHistoryDeleteManyArgs>(args?: SelectSubset<T, AnalysisHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisHistories
     * const analysisHistory = await prisma.analysisHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisHistoryUpdateManyArgs>(args: SelectSubset<T, AnalysisHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisHistories and returns the data updated in the database.
     * @param {AnalysisHistoryUpdateManyAndReturnArgs} args - Arguments to update many AnalysisHistories.
     * @example
     * // Update many AnalysisHistories
     * const analysisHistory = await prisma.analysisHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisHistories and only return the `id`
     * const analysisHistoryWithIdOnly = await prisma.analysisHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisHistory.
     * @param {AnalysisHistoryUpsertArgs} args - Arguments to update or create a AnalysisHistory.
     * @example
     * // Update or create a AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.upsert({
     *   create: {
     *     // ... data to create a AnalysisHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisHistory we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisHistoryUpsertArgs>(args: SelectSubset<T, AnalysisHistoryUpsertArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryCountArgs} args - Arguments to filter AnalysisHistories to count.
     * @example
     * // Count the number of AnalysisHistories
     * const count = await prisma.analysisHistory.count({
     *   where: {
     *     // ... the filter for the AnalysisHistories we want to count
     *   }
     * })
    **/
    count<T extends AnalysisHistoryCountArgs>(
      args?: Subset<T, AnalysisHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisHistoryAggregateArgs>(args: Subset<T, AnalysisHistoryAggregateArgs>): Prisma.PrismaPromise<GetAnalysisHistoryAggregateType<T>>

    /**
     * Group by AnalysisHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryGroupByArgs} args - Group by arguments.
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
      T extends AnalysisHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisHistory model
   */
  readonly fields: AnalysisHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AnalysisHistory model
   */
  interface AnalysisHistoryFieldRefs {
    readonly id: FieldRef<"AnalysisHistory", 'String'>
    readonly originalAnalysisId: FieldRef<"AnalysisHistory", 'String'>
    readonly userId: FieldRef<"AnalysisHistory", 'String'>
    readonly userEmail: FieldRef<"AnalysisHistory", 'String'>
    readonly userFirstName: FieldRef<"AnalysisHistory", 'String'>
    readonly userLastName: FieldRef<"AnalysisHistory", 'String'>
    readonly userPhone: FieldRef<"AnalysisHistory", 'String'>
    readonly snapshot: FieldRef<"AnalysisHistory", 'Json'>
    readonly deletedBy: FieldRef<"AnalysisHistory", 'String'>
    readonly deletedAt: FieldRef<"AnalysisHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisHistory findUnique
   */
  export type AnalysisHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistory to fetch.
     */
    where: AnalysisHistoryWhereUniqueInput
  }

  /**
   * AnalysisHistory findUniqueOrThrow
   */
  export type AnalysisHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistory to fetch.
     */
    where: AnalysisHistoryWhereUniqueInput
  }

  /**
   * AnalysisHistory findFirst
   */
  export type AnalysisHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistory to fetch.
     */
    where?: AnalysisHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHistories to fetch.
     */
    orderBy?: AnalysisHistoryOrderByWithRelationInput | AnalysisHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisHistories.
     */
    cursor?: AnalysisHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisHistories.
     */
    distinct?: AnalysisHistoryScalarFieldEnum | AnalysisHistoryScalarFieldEnum[]
  }

  /**
   * AnalysisHistory findFirstOrThrow
   */
  export type AnalysisHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistory to fetch.
     */
    where?: AnalysisHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHistories to fetch.
     */
    orderBy?: AnalysisHistoryOrderByWithRelationInput | AnalysisHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisHistories.
     */
    cursor?: AnalysisHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisHistories.
     */
    distinct?: AnalysisHistoryScalarFieldEnum | AnalysisHistoryScalarFieldEnum[]
  }

  /**
   * AnalysisHistory findMany
   */
  export type AnalysisHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistories to fetch.
     */
    where?: AnalysisHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHistories to fetch.
     */
    orderBy?: AnalysisHistoryOrderByWithRelationInput | AnalysisHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisHistories.
     */
    cursor?: AnalysisHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHistories.
     */
    skip?: number
    distinct?: AnalysisHistoryScalarFieldEnum | AnalysisHistoryScalarFieldEnum[]
  }

  /**
   * AnalysisHistory create
   */
  export type AnalysisHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalysisHistory.
     */
    data: XOR<AnalysisHistoryCreateInput, AnalysisHistoryUncheckedCreateInput>
  }

  /**
   * AnalysisHistory createMany
   */
  export type AnalysisHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisHistories.
     */
    data: AnalysisHistoryCreateManyInput | AnalysisHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisHistory createManyAndReturn
   */
  export type AnalysisHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisHistories.
     */
    data: AnalysisHistoryCreateManyInput | AnalysisHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisHistory update
   */
  export type AnalysisHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalysisHistory.
     */
    data: XOR<AnalysisHistoryUpdateInput, AnalysisHistoryUncheckedUpdateInput>
    /**
     * Choose, which AnalysisHistory to update.
     */
    where: AnalysisHistoryWhereUniqueInput
  }

  /**
   * AnalysisHistory updateMany
   */
  export type AnalysisHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisHistories.
     */
    data: XOR<AnalysisHistoryUpdateManyMutationInput, AnalysisHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisHistories to update
     */
    where?: AnalysisHistoryWhereInput
    /**
     * Limit how many AnalysisHistories to update.
     */
    limit?: number
  }

  /**
   * AnalysisHistory updateManyAndReturn
   */
  export type AnalysisHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisHistories.
     */
    data: XOR<AnalysisHistoryUpdateManyMutationInput, AnalysisHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisHistories to update
     */
    where?: AnalysisHistoryWhereInput
    /**
     * Limit how many AnalysisHistories to update.
     */
    limit?: number
  }

  /**
   * AnalysisHistory upsert
   */
  export type AnalysisHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalysisHistory to update in case it exists.
     */
    where: AnalysisHistoryWhereUniqueInput
    /**
     * In case the AnalysisHistory found by the `where` argument doesn't exist, create a new AnalysisHistory with this data.
     */
    create: XOR<AnalysisHistoryCreateInput, AnalysisHistoryUncheckedCreateInput>
    /**
     * In case the AnalysisHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisHistoryUpdateInput, AnalysisHistoryUncheckedUpdateInput>
  }

  /**
   * AnalysisHistory delete
   */
  export type AnalysisHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter which AnalysisHistory to delete.
     */
    where: AnalysisHistoryWhereUniqueInput
  }

  /**
   * AnalysisHistory deleteMany
   */
  export type AnalysisHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisHistories to delete
     */
    where?: AnalysisHistoryWhereInput
    /**
     * Limit how many AnalysisHistories to delete.
     */
    limit?: number
  }

  /**
   * AnalysisHistory without action
   */
  export type AnalysisHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
  }


  /**
   * Model AccountDeletionRequest
   */

  export type AggregateAccountDeletionRequest = {
    _count: AccountDeletionRequestCountAggregateOutputType | null
    _min: AccountDeletionRequestMinAggregateOutputType | null
    _max: AccountDeletionRequestMaxAggregateOutputType | null
  }

  export type AccountDeletionRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: string | null
    status: $Enums.AccountDeletionRequestStatus | null
    createdAt: Date | null
    processedAt: Date | null
    processedByAdminId: string | null
  }

  export type AccountDeletionRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: string | null
    status: $Enums.AccountDeletionRequestStatus | null
    createdAt: Date | null
    processedAt: Date | null
    processedByAdminId: string | null
  }

  export type AccountDeletionRequestCountAggregateOutputType = {
    id: number
    userId: number
    reason: number
    status: number
    userSnapshot: number
    createdAt: number
    processedAt: number
    processedByAdminId: number
    _all: number
  }


  export type AccountDeletionRequestMinAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    status?: true
    createdAt?: true
    processedAt?: true
    processedByAdminId?: true
  }

  export type AccountDeletionRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    status?: true
    createdAt?: true
    processedAt?: true
    processedByAdminId?: true
  }

  export type AccountDeletionRequestCountAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    status?: true
    userSnapshot?: true
    createdAt?: true
    processedAt?: true
    processedByAdminId?: true
    _all?: true
  }

  export type AccountDeletionRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountDeletionRequest to aggregate.
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDeletionRequests to fetch.
     */
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountDeletionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDeletionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDeletionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountDeletionRequests
    **/
    _count?: true | AccountDeletionRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountDeletionRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountDeletionRequestMaxAggregateInputType
  }

  export type GetAccountDeletionRequestAggregateType<T extends AccountDeletionRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountDeletionRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountDeletionRequest[P]>
      : GetScalarType<T[P], AggregateAccountDeletionRequest[P]>
  }




  export type AccountDeletionRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDeletionRequestWhereInput
    orderBy?: AccountDeletionRequestOrderByWithAggregationInput | AccountDeletionRequestOrderByWithAggregationInput[]
    by: AccountDeletionRequestScalarFieldEnum[] | AccountDeletionRequestScalarFieldEnum
    having?: AccountDeletionRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountDeletionRequestCountAggregateInputType | true
    _min?: AccountDeletionRequestMinAggregateInputType
    _max?: AccountDeletionRequestMaxAggregateInputType
  }

  export type AccountDeletionRequestGroupByOutputType = {
    id: string
    userId: string
    reason: string | null
    status: $Enums.AccountDeletionRequestStatus
    userSnapshot: JsonValue
    createdAt: Date
    processedAt: Date | null
    processedByAdminId: string | null
    _count: AccountDeletionRequestCountAggregateOutputType | null
    _min: AccountDeletionRequestMinAggregateOutputType | null
    _max: AccountDeletionRequestMaxAggregateOutputType | null
  }

  type GetAccountDeletionRequestGroupByPayload<T extends AccountDeletionRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountDeletionRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountDeletionRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountDeletionRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AccountDeletionRequestGroupByOutputType[P]>
        }
      >
    >


  export type AccountDeletionRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    status?: boolean
    userSnapshot?: boolean
    createdAt?: boolean
    processedAt?: boolean
    processedByAdminId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountDeletionRequest"]>

  export type AccountDeletionRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    status?: boolean
    userSnapshot?: boolean
    createdAt?: boolean
    processedAt?: boolean
    processedByAdminId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountDeletionRequest"]>

  export type AccountDeletionRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    status?: boolean
    userSnapshot?: boolean
    createdAt?: boolean
    processedAt?: boolean
    processedByAdminId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountDeletionRequest"]>

  export type AccountDeletionRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    reason?: boolean
    status?: boolean
    userSnapshot?: boolean
    createdAt?: boolean
    processedAt?: boolean
    processedByAdminId?: boolean
  }

  export type AccountDeletionRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reason" | "status" | "userSnapshot" | "createdAt" | "processedAt" | "processedByAdminId", ExtArgs["result"]["accountDeletionRequest"]>
  export type AccountDeletionRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountDeletionRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountDeletionRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountDeletionRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountDeletionRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reason: string | null
      status: $Enums.AccountDeletionRequestStatus
      userSnapshot: Prisma.JsonValue
      createdAt: Date
      processedAt: Date | null
      processedByAdminId: string | null
    }, ExtArgs["result"]["accountDeletionRequest"]>
    composites: {}
  }

  type AccountDeletionRequestGetPayload<S extends boolean | null | undefined | AccountDeletionRequestDefaultArgs> = $Result.GetResult<Prisma.$AccountDeletionRequestPayload, S>

  type AccountDeletionRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountDeletionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountDeletionRequestCountAggregateInputType | true
    }

  export interface AccountDeletionRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountDeletionRequest'], meta: { name: 'AccountDeletionRequest' } }
    /**
     * Find zero or one AccountDeletionRequest that matches the filter.
     * @param {AccountDeletionRequestFindUniqueArgs} args - Arguments to find a AccountDeletionRequest
     * @example
     * // Get one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountDeletionRequestFindUniqueArgs>(args: SelectSubset<T, AccountDeletionRequestFindUniqueArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountDeletionRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountDeletionRequestFindUniqueOrThrowArgs} args - Arguments to find a AccountDeletionRequest
     * @example
     * // Get one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountDeletionRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountDeletionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountDeletionRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestFindFirstArgs} args - Arguments to find a AccountDeletionRequest
     * @example
     * // Get one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountDeletionRequestFindFirstArgs>(args?: SelectSubset<T, AccountDeletionRequestFindFirstArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountDeletionRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestFindFirstOrThrowArgs} args - Arguments to find a AccountDeletionRequest
     * @example
     * // Get one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountDeletionRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountDeletionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountDeletionRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountDeletionRequests
     * const accountDeletionRequests = await prisma.accountDeletionRequest.findMany()
     * 
     * // Get first 10 AccountDeletionRequests
     * const accountDeletionRequests = await prisma.accountDeletionRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountDeletionRequestWithIdOnly = await prisma.accountDeletionRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountDeletionRequestFindManyArgs>(args?: SelectSubset<T, AccountDeletionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountDeletionRequest.
     * @param {AccountDeletionRequestCreateArgs} args - Arguments to create a AccountDeletionRequest.
     * @example
     * // Create one AccountDeletionRequest
     * const AccountDeletionRequest = await prisma.accountDeletionRequest.create({
     *   data: {
     *     // ... data to create a AccountDeletionRequest
     *   }
     * })
     * 
     */
    create<T extends AccountDeletionRequestCreateArgs>(args: SelectSubset<T, AccountDeletionRequestCreateArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountDeletionRequests.
     * @param {AccountDeletionRequestCreateManyArgs} args - Arguments to create many AccountDeletionRequests.
     * @example
     * // Create many AccountDeletionRequests
     * const accountDeletionRequest = await prisma.accountDeletionRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountDeletionRequestCreateManyArgs>(args?: SelectSubset<T, AccountDeletionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountDeletionRequests and returns the data saved in the database.
     * @param {AccountDeletionRequestCreateManyAndReturnArgs} args - Arguments to create many AccountDeletionRequests.
     * @example
     * // Create many AccountDeletionRequests
     * const accountDeletionRequest = await prisma.accountDeletionRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountDeletionRequests and only return the `id`
     * const accountDeletionRequestWithIdOnly = await prisma.accountDeletionRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountDeletionRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountDeletionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountDeletionRequest.
     * @param {AccountDeletionRequestDeleteArgs} args - Arguments to delete one AccountDeletionRequest.
     * @example
     * // Delete one AccountDeletionRequest
     * const AccountDeletionRequest = await prisma.accountDeletionRequest.delete({
     *   where: {
     *     // ... filter to delete one AccountDeletionRequest
     *   }
     * })
     * 
     */
    delete<T extends AccountDeletionRequestDeleteArgs>(args: SelectSubset<T, AccountDeletionRequestDeleteArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountDeletionRequest.
     * @param {AccountDeletionRequestUpdateArgs} args - Arguments to update one AccountDeletionRequest.
     * @example
     * // Update one AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountDeletionRequestUpdateArgs>(args: SelectSubset<T, AccountDeletionRequestUpdateArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountDeletionRequests.
     * @param {AccountDeletionRequestDeleteManyArgs} args - Arguments to filter AccountDeletionRequests to delete.
     * @example
     * // Delete a few AccountDeletionRequests
     * const { count } = await prisma.accountDeletionRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeletionRequestDeleteManyArgs>(args?: SelectSubset<T, AccountDeletionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountDeletionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountDeletionRequests
     * const accountDeletionRequest = await prisma.accountDeletionRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountDeletionRequestUpdateManyArgs>(args: SelectSubset<T, AccountDeletionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountDeletionRequests and returns the data updated in the database.
     * @param {AccountDeletionRequestUpdateManyAndReturnArgs} args - Arguments to update many AccountDeletionRequests.
     * @example
     * // Update many AccountDeletionRequests
     * const accountDeletionRequest = await prisma.accountDeletionRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountDeletionRequests and only return the `id`
     * const accountDeletionRequestWithIdOnly = await prisma.accountDeletionRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountDeletionRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountDeletionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountDeletionRequest.
     * @param {AccountDeletionRequestUpsertArgs} args - Arguments to update or create a AccountDeletionRequest.
     * @example
     * // Update or create a AccountDeletionRequest
     * const accountDeletionRequest = await prisma.accountDeletionRequest.upsert({
     *   create: {
     *     // ... data to create a AccountDeletionRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountDeletionRequest we want to update
     *   }
     * })
     */
    upsert<T extends AccountDeletionRequestUpsertArgs>(args: SelectSubset<T, AccountDeletionRequestUpsertArgs<ExtArgs>>): Prisma__AccountDeletionRequestClient<$Result.GetResult<Prisma.$AccountDeletionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountDeletionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestCountArgs} args - Arguments to filter AccountDeletionRequests to count.
     * @example
     * // Count the number of AccountDeletionRequests
     * const count = await prisma.accountDeletionRequest.count({
     *   where: {
     *     // ... the filter for the AccountDeletionRequests we want to count
     *   }
     * })
    **/
    count<T extends AccountDeletionRequestCountArgs>(
      args?: Subset<T, AccountDeletionRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountDeletionRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountDeletionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountDeletionRequestAggregateArgs>(args: Subset<T, AccountDeletionRequestAggregateArgs>): Prisma.PrismaPromise<GetAccountDeletionRequestAggregateType<T>>

    /**
     * Group by AccountDeletionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDeletionRequestGroupByArgs} args - Group by arguments.
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
      T extends AccountDeletionRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountDeletionRequestGroupByArgs['orderBy'] }
        : { orderBy?: AccountDeletionRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountDeletionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountDeletionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountDeletionRequest model
   */
  readonly fields: AccountDeletionRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountDeletionRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountDeletionRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccountDeletionRequest model
   */
  interface AccountDeletionRequestFieldRefs {
    readonly id: FieldRef<"AccountDeletionRequest", 'String'>
    readonly userId: FieldRef<"AccountDeletionRequest", 'String'>
    readonly reason: FieldRef<"AccountDeletionRequest", 'String'>
    readonly status: FieldRef<"AccountDeletionRequest", 'AccountDeletionRequestStatus'>
    readonly userSnapshot: FieldRef<"AccountDeletionRequest", 'Json'>
    readonly createdAt: FieldRef<"AccountDeletionRequest", 'DateTime'>
    readonly processedAt: FieldRef<"AccountDeletionRequest", 'DateTime'>
    readonly processedByAdminId: FieldRef<"AccountDeletionRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccountDeletionRequest findUnique
   */
  export type AccountDeletionRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequest to fetch.
     */
    where: AccountDeletionRequestWhereUniqueInput
  }

  /**
   * AccountDeletionRequest findUniqueOrThrow
   */
  export type AccountDeletionRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequest to fetch.
     */
    where: AccountDeletionRequestWhereUniqueInput
  }

  /**
   * AccountDeletionRequest findFirst
   */
  export type AccountDeletionRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequest to fetch.
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDeletionRequests to fetch.
     */
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountDeletionRequests.
     */
    cursor?: AccountDeletionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDeletionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDeletionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDeletionRequests.
     */
    distinct?: AccountDeletionRequestScalarFieldEnum | AccountDeletionRequestScalarFieldEnum[]
  }

  /**
   * AccountDeletionRequest findFirstOrThrow
   */
  export type AccountDeletionRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequest to fetch.
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDeletionRequests to fetch.
     */
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountDeletionRequests.
     */
    cursor?: AccountDeletionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDeletionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDeletionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDeletionRequests.
     */
    distinct?: AccountDeletionRequestScalarFieldEnum | AccountDeletionRequestScalarFieldEnum[]
  }

  /**
   * AccountDeletionRequest findMany
   */
  export type AccountDeletionRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * Filter, which AccountDeletionRequests to fetch.
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDeletionRequests to fetch.
     */
    orderBy?: AccountDeletionRequestOrderByWithRelationInput | AccountDeletionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountDeletionRequests.
     */
    cursor?: AccountDeletionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDeletionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDeletionRequests.
     */
    skip?: number
    distinct?: AccountDeletionRequestScalarFieldEnum | AccountDeletionRequestScalarFieldEnum[]
  }

  /**
   * AccountDeletionRequest create
   */
  export type AccountDeletionRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountDeletionRequest.
     */
    data: XOR<AccountDeletionRequestCreateInput, AccountDeletionRequestUncheckedCreateInput>
  }

  /**
   * AccountDeletionRequest createMany
   */
  export type AccountDeletionRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountDeletionRequests.
     */
    data: AccountDeletionRequestCreateManyInput | AccountDeletionRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountDeletionRequest createManyAndReturn
   */
  export type AccountDeletionRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * The data used to create many AccountDeletionRequests.
     */
    data: AccountDeletionRequestCreateManyInput | AccountDeletionRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountDeletionRequest update
   */
  export type AccountDeletionRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountDeletionRequest.
     */
    data: XOR<AccountDeletionRequestUpdateInput, AccountDeletionRequestUncheckedUpdateInput>
    /**
     * Choose, which AccountDeletionRequest to update.
     */
    where: AccountDeletionRequestWhereUniqueInput
  }

  /**
   * AccountDeletionRequest updateMany
   */
  export type AccountDeletionRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountDeletionRequests.
     */
    data: XOR<AccountDeletionRequestUpdateManyMutationInput, AccountDeletionRequestUncheckedUpdateManyInput>
    /**
     * Filter which AccountDeletionRequests to update
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * Limit how many AccountDeletionRequests to update.
     */
    limit?: number
  }

  /**
   * AccountDeletionRequest updateManyAndReturn
   */
  export type AccountDeletionRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * The data used to update AccountDeletionRequests.
     */
    data: XOR<AccountDeletionRequestUpdateManyMutationInput, AccountDeletionRequestUncheckedUpdateManyInput>
    /**
     * Filter which AccountDeletionRequests to update
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * Limit how many AccountDeletionRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountDeletionRequest upsert
   */
  export type AccountDeletionRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountDeletionRequest to update in case it exists.
     */
    where: AccountDeletionRequestWhereUniqueInput
    /**
     * In case the AccountDeletionRequest found by the `where` argument doesn't exist, create a new AccountDeletionRequest with this data.
     */
    create: XOR<AccountDeletionRequestCreateInput, AccountDeletionRequestUncheckedCreateInput>
    /**
     * In case the AccountDeletionRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountDeletionRequestUpdateInput, AccountDeletionRequestUncheckedUpdateInput>
  }

  /**
   * AccountDeletionRequest delete
   */
  export type AccountDeletionRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
    /**
     * Filter which AccountDeletionRequest to delete.
     */
    where: AccountDeletionRequestWhereUniqueInput
  }

  /**
   * AccountDeletionRequest deleteMany
   */
  export type AccountDeletionRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountDeletionRequests to delete
     */
    where?: AccountDeletionRequestWhereInput
    /**
     * Limit how many AccountDeletionRequests to delete.
     */
    limit?: number
  }

  /**
   * AccountDeletionRequest without action
   */
  export type AccountDeletionRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDeletionRequest
     */
    select?: AccountDeletionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDeletionRequest
     */
    omit?: AccountDeletionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDeletionRequestInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    entity: string
    entityId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entity" | "entityId" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      entity: string
      entityId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    role: 'role',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    propertyType: 'propertyType',
    city: 'city',
    district: 'district',
    address: 'address',
    surface: 'surface',
    price: 'price',
    priceLabel: 'priceLabel',
    rooms: 'rooms',
    imageUrls: 'imageUrls',
    status: 'status',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const ListingApplicationScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    userId: 'userId',
    budget: 'budget',
    phone: 'phone',
    profession: 'profession',
    maritalStatus: 'maritalStatus',
    hasChildren: 'hasChildren',
    childrenCount: 'childrenCount',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingApplicationScalarFieldEnum = (typeof ListingApplicationScalarFieldEnum)[keyof typeof ListingApplicationScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const AnalysisScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectType: 'projectType',
    city: 'city',
    district: 'district',
    budget: 'budget',
    budgetRange: 'budgetRange',
    propertyType: 'propertyType',
    surface: 'surface',
    surfaceRange: 'surfaceRange',
    urgency: 'urgency',
    objective: 'objective',
    message: 'message',
    profession: 'profession',
    maritalStatus: 'maritalStatus',
    hasChildren: 'hasChildren',
    childrenCount: 'childrenCount',
    personalNotes: 'personalNotes',
    consentAccepted: 'consentAccepted',
    score: 'score',
    maturityLevel: 'maturityLevel',
    commercialPriority: 'commercialPriority',
    profileType: 'profileType',
    recommendedService: 'recommendedService',
    strengths: 'strengths',
    missingInfo: 'missingInfo',
    recommendations: 'recommendations',
    nextAction: 'nextAction',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnalysisScalarFieldEnum = (typeof AnalysisScalarFieldEnum)[keyof typeof AnalysisScalarFieldEnum]


  export const AnalysisHistoryScalarFieldEnum: {
    id: 'id',
    originalAnalysisId: 'originalAnalysisId',
    userId: 'userId',
    userEmail: 'userEmail',
    userFirstName: 'userFirstName',
    userLastName: 'userLastName',
    userPhone: 'userPhone',
    snapshot: 'snapshot',
    deletedBy: 'deletedBy',
    deletedAt: 'deletedAt'
  };

  export type AnalysisHistoryScalarFieldEnum = (typeof AnalysisHistoryScalarFieldEnum)[keyof typeof AnalysisHistoryScalarFieldEnum]


  export const AccountDeletionRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reason: 'reason',
    status: 'status',
    userSnapshot: 'userSnapshot',
    createdAt: 'createdAt',
    processedAt: 'processedAt',
    processedByAdminId: 'processedByAdminId'
  };

  export type AccountDeletionRequestScalarFieldEnum = (typeof AccountDeletionRequestScalarFieldEnum)[keyof typeof AccountDeletionRequestScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ListingApplicationStatus'
   */
  export type EnumListingApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingApplicationStatus'>
    


  /**
   * Reference to a field of type 'ListingApplicationStatus[]'
   */
  export type ListEnumListingApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'ProjectType'
   */
  export type EnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType'>
    


  /**
   * Reference to a field of type 'ProjectType[]'
   */
  export type ListEnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType[]'>
    


  /**
   * Reference to a field of type 'Urgency'
   */
  export type EnumUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgency'>
    


  /**
   * Reference to a field of type 'Urgency[]'
   */
  export type ListEnumUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgency[]'>
    


  /**
   * Reference to a field of type 'MaturityLevel'
   */
  export type EnumMaturityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaturityLevel'>
    


  /**
   * Reference to a field of type 'MaturityLevel[]'
   */
  export type ListEnumMaturityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaturityLevel[]'>
    


  /**
   * Reference to a field of type 'CommercialPriority'
   */
  export type EnumCommercialPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommercialPriority'>
    


  /**
   * Reference to a field of type 'CommercialPriority[]'
   */
  export type ListEnumCommercialPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommercialPriority[]'>
    


  /**
   * Reference to a field of type 'AnalysisStatus'
   */
  export type EnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus'>
    


  /**
   * Reference to a field of type 'AnalysisStatus[]'
   */
  export type ListEnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AccountDeletionRequestStatus'
   */
  export type EnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountDeletionRequestStatus'>
    


  /**
   * Reference to a field of type 'AccountDeletionRequestStatus[]'
   */
  export type ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountDeletionRequestStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    analyses?: AnalysisListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    accountDeletionRequests?: AccountDeletionRequestListRelationFilter
    reviews?: ReviewListRelationFilter
    listingsCreated?: ListingListRelationFilter
    listingApplications?: ListingApplicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    analyses?: AnalysisOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    accountDeletionRequests?: AccountDeletionRequestOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    listingsCreated?: ListingOrderByRelationAggregateInput
    listingApplications?: ListingApplicationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    analyses?: AnalysisListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    accountDeletionRequests?: AccountDeletionRequestListRelationFilter
    reviews?: ReviewListRelationFilter
    listingsCreated?: ListingListRelationFilter
    listingApplications?: ListingApplicationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    propertyType?: StringFilter<"Listing"> | string
    city?: StringFilter<"Listing"> | string
    district?: StringNullableFilter<"Listing"> | string | null
    address?: StringNullableFilter<"Listing"> | string | null
    surface?: FloatNullableFilter<"Listing"> | number | null
    price?: DecimalNullableFilter<"Listing"> | Decimal | DecimalJsLike | number | string | null
    priceLabel?: StringNullableFilter<"Listing"> | string | null
    rooms?: IntNullableFilter<"Listing"> | number | null
    imageUrls?: StringNullableListFilter<"Listing">
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    createdById?: StringNullableFilter<"Listing"> | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    applications?: ListingApplicationListRelationFilter
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    city?: SortOrder
    district?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    priceLabel?: SortOrderInput | SortOrder
    rooms?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    applications?: ListingApplicationOrderByRelationAggregateInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    propertyType?: StringFilter<"Listing"> | string
    city?: StringFilter<"Listing"> | string
    district?: StringNullableFilter<"Listing"> | string | null
    address?: StringNullableFilter<"Listing"> | string | null
    surface?: FloatNullableFilter<"Listing"> | number | null
    price?: DecimalNullableFilter<"Listing"> | Decimal | DecimalJsLike | number | string | null
    priceLabel?: StringNullableFilter<"Listing"> | string | null
    rooms?: IntNullableFilter<"Listing"> | number | null
    imageUrls?: StringNullableListFilter<"Listing">
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    createdById?: StringNullableFilter<"Listing"> | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    applications?: ListingApplicationListRelationFilter
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    city?: SortOrder
    district?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    priceLabel?: SortOrderInput | SortOrder
    rooms?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    title?: StringWithAggregatesFilter<"Listing"> | string
    description?: StringWithAggregatesFilter<"Listing"> | string
    propertyType?: StringWithAggregatesFilter<"Listing"> | string
    city?: StringWithAggregatesFilter<"Listing"> | string
    district?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    address?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    surface?: FloatNullableWithAggregatesFilter<"Listing"> | number | null
    price?: DecimalNullableWithAggregatesFilter<"Listing"> | Decimal | DecimalJsLike | number | string | null
    priceLabel?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    rooms?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    imageUrls?: StringNullableListFilter<"Listing">
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    createdById?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type ListingApplicationWhereInput = {
    AND?: ListingApplicationWhereInput | ListingApplicationWhereInput[]
    OR?: ListingApplicationWhereInput[]
    NOT?: ListingApplicationWhereInput | ListingApplicationWhereInput[]
    id?: StringFilter<"ListingApplication"> | string
    listingId?: StringFilter<"ListingApplication"> | string
    userId?: StringFilter<"ListingApplication"> | string
    budget?: StringFilter<"ListingApplication"> | string
    phone?: StringFilter<"ListingApplication"> | string
    profession?: StringNullableFilter<"ListingApplication"> | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"ListingApplication"> | $Enums.MaritalStatus | null
    hasChildren?: BoolNullableFilter<"ListingApplication"> | boolean | null
    childrenCount?: IntNullableFilter<"ListingApplication"> | number | null
    message?: StringNullableFilter<"ListingApplication"> | string | null
    status?: EnumListingApplicationStatusFilter<"ListingApplication"> | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFilter<"ListingApplication"> | Date | string
    updatedAt?: DateTimeFilter<"ListingApplication"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ListingApplicationOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    budget?: SortOrder
    phone?: SortOrder
    profession?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    hasChildren?: SortOrderInput | SortOrder
    childrenCount?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ListingApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    listingId_userId?: ListingApplicationListingIdUserIdCompoundUniqueInput
    AND?: ListingApplicationWhereInput | ListingApplicationWhereInput[]
    OR?: ListingApplicationWhereInput[]
    NOT?: ListingApplicationWhereInput | ListingApplicationWhereInput[]
    listingId?: StringFilter<"ListingApplication"> | string
    userId?: StringFilter<"ListingApplication"> | string
    budget?: StringFilter<"ListingApplication"> | string
    phone?: StringFilter<"ListingApplication"> | string
    profession?: StringNullableFilter<"ListingApplication"> | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"ListingApplication"> | $Enums.MaritalStatus | null
    hasChildren?: BoolNullableFilter<"ListingApplication"> | boolean | null
    childrenCount?: IntNullableFilter<"ListingApplication"> | number | null
    message?: StringNullableFilter<"ListingApplication"> | string | null
    status?: EnumListingApplicationStatusFilter<"ListingApplication"> | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFilter<"ListingApplication"> | Date | string
    updatedAt?: DateTimeFilter<"ListingApplication"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "listingId_userId">

  export type ListingApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    budget?: SortOrder
    phone?: SortOrder
    profession?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    hasChildren?: SortOrderInput | SortOrder
    childrenCount?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingApplicationCountOrderByAggregateInput
    _avg?: ListingApplicationAvgOrderByAggregateInput
    _max?: ListingApplicationMaxOrderByAggregateInput
    _min?: ListingApplicationMinOrderByAggregateInput
    _sum?: ListingApplicationSumOrderByAggregateInput
  }

  export type ListingApplicationScalarWhereWithAggregatesInput = {
    AND?: ListingApplicationScalarWhereWithAggregatesInput | ListingApplicationScalarWhereWithAggregatesInput[]
    OR?: ListingApplicationScalarWhereWithAggregatesInput[]
    NOT?: ListingApplicationScalarWhereWithAggregatesInput | ListingApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ListingApplication"> | string
    listingId?: StringWithAggregatesFilter<"ListingApplication"> | string
    userId?: StringWithAggregatesFilter<"ListingApplication"> | string
    budget?: StringWithAggregatesFilter<"ListingApplication"> | string
    phone?: StringWithAggregatesFilter<"ListingApplication"> | string
    profession?: StringNullableWithAggregatesFilter<"ListingApplication"> | string | null
    maritalStatus?: EnumMaritalStatusNullableWithAggregatesFilter<"ListingApplication"> | $Enums.MaritalStatus | null
    hasChildren?: BoolNullableWithAggregatesFilter<"ListingApplication"> | boolean | null
    childrenCount?: IntNullableWithAggregatesFilter<"ListingApplication"> | number | null
    message?: StringNullableWithAggregatesFilter<"ListingApplication"> | string | null
    status?: EnumListingApplicationStatusWithAggregatesFilter<"ListingApplication"> | $Enums.ListingApplicationStatus
    createdAt?: DateTimeWithAggregatesFilter<"ListingApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ListingApplication"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
    userAgent?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type AnalysisWhereInput = {
    AND?: AnalysisWhereInput | AnalysisWhereInput[]
    OR?: AnalysisWhereInput[]
    NOT?: AnalysisWhereInput | AnalysisWhereInput[]
    id?: StringFilter<"Analysis"> | string
    userId?: StringFilter<"Analysis"> | string
    projectType?: EnumProjectTypeFilter<"Analysis"> | $Enums.ProjectType
    city?: StringFilter<"Analysis"> | string
    district?: StringNullableFilter<"Analysis"> | string | null
    budget?: DecimalNullableFilter<"Analysis"> | Decimal | DecimalJsLike | number | string | null
    budgetRange?: StringNullableFilter<"Analysis"> | string | null
    propertyType?: StringNullableFilter<"Analysis"> | string | null
    surface?: FloatNullableFilter<"Analysis"> | number | null
    surfaceRange?: StringNullableFilter<"Analysis"> | string | null
    urgency?: EnumUrgencyFilter<"Analysis"> | $Enums.Urgency
    objective?: StringNullableFilter<"Analysis"> | string | null
    message?: StringNullableFilter<"Analysis"> | string | null
    profession?: StringNullableFilter<"Analysis"> | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"Analysis"> | $Enums.MaritalStatus | null
    hasChildren?: BoolNullableFilter<"Analysis"> | boolean | null
    childrenCount?: IntNullableFilter<"Analysis"> | number | null
    personalNotes?: StringNullableFilter<"Analysis"> | string | null
    consentAccepted?: BoolFilter<"Analysis"> | boolean
    score?: IntFilter<"Analysis"> | number
    maturityLevel?: EnumMaturityLevelFilter<"Analysis"> | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFilter<"Analysis"> | $Enums.CommercialPriority
    profileType?: StringFilter<"Analysis"> | string
    recommendedService?: StringFilter<"Analysis"> | string
    strengths?: StringNullableListFilter<"Analysis">
    missingInfo?: StringNullableListFilter<"Analysis">
    recommendations?: StringNullableListFilter<"Analysis">
    nextAction?: StringFilter<"Analysis"> | string
    status?: EnumAnalysisStatusFilter<"Analysis"> | $Enums.AnalysisStatus
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
    updatedAt?: DateTimeFilter<"Analysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnalysisOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectType?: SortOrder
    city?: SortOrder
    district?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    budgetRange?: SortOrderInput | SortOrder
    propertyType?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    surfaceRange?: SortOrderInput | SortOrder
    urgency?: SortOrder
    objective?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    hasChildren?: SortOrderInput | SortOrder
    childrenCount?: SortOrderInput | SortOrder
    personalNotes?: SortOrderInput | SortOrder
    consentAccepted?: SortOrder
    score?: SortOrder
    maturityLevel?: SortOrder
    commercialPriority?: SortOrder
    profileType?: SortOrder
    recommendedService?: SortOrder
    strengths?: SortOrder
    missingInfo?: SortOrder
    recommendations?: SortOrder
    nextAction?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisWhereInput | AnalysisWhereInput[]
    OR?: AnalysisWhereInput[]
    NOT?: AnalysisWhereInput | AnalysisWhereInput[]
    userId?: StringFilter<"Analysis"> | string
    projectType?: EnumProjectTypeFilter<"Analysis"> | $Enums.ProjectType
    city?: StringFilter<"Analysis"> | string
    district?: StringNullableFilter<"Analysis"> | string | null
    budget?: DecimalNullableFilter<"Analysis"> | Decimal | DecimalJsLike | number | string | null
    budgetRange?: StringNullableFilter<"Analysis"> | string | null
    propertyType?: StringNullableFilter<"Analysis"> | string | null
    surface?: FloatNullableFilter<"Analysis"> | number | null
    surfaceRange?: StringNullableFilter<"Analysis"> | string | null
    urgency?: EnumUrgencyFilter<"Analysis"> | $Enums.Urgency
    objective?: StringNullableFilter<"Analysis"> | string | null
    message?: StringNullableFilter<"Analysis"> | string | null
    profession?: StringNullableFilter<"Analysis"> | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"Analysis"> | $Enums.MaritalStatus | null
    hasChildren?: BoolNullableFilter<"Analysis"> | boolean | null
    childrenCount?: IntNullableFilter<"Analysis"> | number | null
    personalNotes?: StringNullableFilter<"Analysis"> | string | null
    consentAccepted?: BoolFilter<"Analysis"> | boolean
    score?: IntFilter<"Analysis"> | number
    maturityLevel?: EnumMaturityLevelFilter<"Analysis"> | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFilter<"Analysis"> | $Enums.CommercialPriority
    profileType?: StringFilter<"Analysis"> | string
    recommendedService?: StringFilter<"Analysis"> | string
    strengths?: StringNullableListFilter<"Analysis">
    missingInfo?: StringNullableListFilter<"Analysis">
    recommendations?: StringNullableListFilter<"Analysis">
    nextAction?: StringFilter<"Analysis"> | string
    status?: EnumAnalysisStatusFilter<"Analysis"> | $Enums.AnalysisStatus
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
    updatedAt?: DateTimeFilter<"Analysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectType?: SortOrder
    city?: SortOrder
    district?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    budgetRange?: SortOrderInput | SortOrder
    propertyType?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    surfaceRange?: SortOrderInput | SortOrder
    urgency?: SortOrder
    objective?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    hasChildren?: SortOrderInput | SortOrder
    childrenCount?: SortOrderInput | SortOrder
    personalNotes?: SortOrderInput | SortOrder
    consentAccepted?: SortOrder
    score?: SortOrder
    maturityLevel?: SortOrder
    commercialPriority?: SortOrder
    profileType?: SortOrder
    recommendedService?: SortOrder
    strengths?: SortOrder
    missingInfo?: SortOrder
    recommendations?: SortOrder
    nextAction?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnalysisCountOrderByAggregateInput
    _avg?: AnalysisAvgOrderByAggregateInput
    _max?: AnalysisMaxOrderByAggregateInput
    _min?: AnalysisMinOrderByAggregateInput
    _sum?: AnalysisSumOrderByAggregateInput
  }

  export type AnalysisScalarWhereWithAggregatesInput = {
    AND?: AnalysisScalarWhereWithAggregatesInput | AnalysisScalarWhereWithAggregatesInput[]
    OR?: AnalysisScalarWhereWithAggregatesInput[]
    NOT?: AnalysisScalarWhereWithAggregatesInput | AnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analysis"> | string
    userId?: StringWithAggregatesFilter<"Analysis"> | string
    projectType?: EnumProjectTypeWithAggregatesFilter<"Analysis"> | $Enums.ProjectType
    city?: StringWithAggregatesFilter<"Analysis"> | string
    district?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    budget?: DecimalNullableWithAggregatesFilter<"Analysis"> | Decimal | DecimalJsLike | number | string | null
    budgetRange?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    propertyType?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    surface?: FloatNullableWithAggregatesFilter<"Analysis"> | number | null
    surfaceRange?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    urgency?: EnumUrgencyWithAggregatesFilter<"Analysis"> | $Enums.Urgency
    objective?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    message?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    profession?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    maritalStatus?: EnumMaritalStatusNullableWithAggregatesFilter<"Analysis"> | $Enums.MaritalStatus | null
    hasChildren?: BoolNullableWithAggregatesFilter<"Analysis"> | boolean | null
    childrenCount?: IntNullableWithAggregatesFilter<"Analysis"> | number | null
    personalNotes?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    consentAccepted?: BoolWithAggregatesFilter<"Analysis"> | boolean
    score?: IntWithAggregatesFilter<"Analysis"> | number
    maturityLevel?: EnumMaturityLevelWithAggregatesFilter<"Analysis"> | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityWithAggregatesFilter<"Analysis"> | $Enums.CommercialPriority
    profileType?: StringWithAggregatesFilter<"Analysis"> | string
    recommendedService?: StringWithAggregatesFilter<"Analysis"> | string
    strengths?: StringNullableListFilter<"Analysis">
    missingInfo?: StringNullableListFilter<"Analysis">
    recommendations?: StringNullableListFilter<"Analysis">
    nextAction?: StringWithAggregatesFilter<"Analysis"> | string
    status?: EnumAnalysisStatusWithAggregatesFilter<"Analysis"> | $Enums.AnalysisStatus
    createdAt?: DateTimeWithAggregatesFilter<"Analysis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Analysis"> | Date | string
  }

  export type AnalysisHistoryWhereInput = {
    AND?: AnalysisHistoryWhereInput | AnalysisHistoryWhereInput[]
    OR?: AnalysisHistoryWhereInput[]
    NOT?: AnalysisHistoryWhereInput | AnalysisHistoryWhereInput[]
    id?: StringFilter<"AnalysisHistory"> | string
    originalAnalysisId?: StringFilter<"AnalysisHistory"> | string
    userId?: StringNullableFilter<"AnalysisHistory"> | string | null
    userEmail?: StringFilter<"AnalysisHistory"> | string
    userFirstName?: StringFilter<"AnalysisHistory"> | string
    userLastName?: StringFilter<"AnalysisHistory"> | string
    userPhone?: StringNullableFilter<"AnalysisHistory"> | string | null
    snapshot?: JsonFilter<"AnalysisHistory">
    deletedBy?: StringFilter<"AnalysisHistory"> | string
    deletedAt?: DateTimeFilter<"AnalysisHistory"> | Date | string
  }

  export type AnalysisHistoryOrderByWithRelationInput = {
    id?: SortOrder
    originalAnalysisId?: SortOrder
    userId?: SortOrderInput | SortOrder
    userEmail?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userPhone?: SortOrderInput | SortOrder
    snapshot?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type AnalysisHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisHistoryWhereInput | AnalysisHistoryWhereInput[]
    OR?: AnalysisHistoryWhereInput[]
    NOT?: AnalysisHistoryWhereInput | AnalysisHistoryWhereInput[]
    originalAnalysisId?: StringFilter<"AnalysisHistory"> | string
    userId?: StringNullableFilter<"AnalysisHistory"> | string | null
    userEmail?: StringFilter<"AnalysisHistory"> | string
    userFirstName?: StringFilter<"AnalysisHistory"> | string
    userLastName?: StringFilter<"AnalysisHistory"> | string
    userPhone?: StringNullableFilter<"AnalysisHistory"> | string | null
    snapshot?: JsonFilter<"AnalysisHistory">
    deletedBy?: StringFilter<"AnalysisHistory"> | string
    deletedAt?: DateTimeFilter<"AnalysisHistory"> | Date | string
  }, "id">

  export type AnalysisHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    originalAnalysisId?: SortOrder
    userId?: SortOrderInput | SortOrder
    userEmail?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userPhone?: SortOrderInput | SortOrder
    snapshot?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
    _count?: AnalysisHistoryCountOrderByAggregateInput
    _max?: AnalysisHistoryMaxOrderByAggregateInput
    _min?: AnalysisHistoryMinOrderByAggregateInput
  }

  export type AnalysisHistoryScalarWhereWithAggregatesInput = {
    AND?: AnalysisHistoryScalarWhereWithAggregatesInput | AnalysisHistoryScalarWhereWithAggregatesInput[]
    OR?: AnalysisHistoryScalarWhereWithAggregatesInput[]
    NOT?: AnalysisHistoryScalarWhereWithAggregatesInput | AnalysisHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisHistory"> | string
    originalAnalysisId?: StringWithAggregatesFilter<"AnalysisHistory"> | string
    userId?: StringNullableWithAggregatesFilter<"AnalysisHistory"> | string | null
    userEmail?: StringWithAggregatesFilter<"AnalysisHistory"> | string
    userFirstName?: StringWithAggregatesFilter<"AnalysisHistory"> | string
    userLastName?: StringWithAggregatesFilter<"AnalysisHistory"> | string
    userPhone?: StringNullableWithAggregatesFilter<"AnalysisHistory"> | string | null
    snapshot?: JsonWithAggregatesFilter<"AnalysisHistory">
    deletedBy?: StringWithAggregatesFilter<"AnalysisHistory"> | string
    deletedAt?: DateTimeWithAggregatesFilter<"AnalysisHistory"> | Date | string
  }

  export type AccountDeletionRequestWhereInput = {
    AND?: AccountDeletionRequestWhereInput | AccountDeletionRequestWhereInput[]
    OR?: AccountDeletionRequestWhereInput[]
    NOT?: AccountDeletionRequestWhereInput | AccountDeletionRequestWhereInput[]
    id?: StringFilter<"AccountDeletionRequest"> | string
    userId?: StringFilter<"AccountDeletionRequest"> | string
    reason?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    status?: EnumAccountDeletionRequestStatusFilter<"AccountDeletionRequest"> | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonFilter<"AccountDeletionRequest">
    createdAt?: DateTimeFilter<"AccountDeletionRequest"> | Date | string
    processedAt?: DateTimeNullableFilter<"AccountDeletionRequest"> | Date | string | null
    processedByAdminId?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountDeletionRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    userSnapshot?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processedByAdminId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountDeletionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountDeletionRequestWhereInput | AccountDeletionRequestWhereInput[]
    OR?: AccountDeletionRequestWhereInput[]
    NOT?: AccountDeletionRequestWhereInput | AccountDeletionRequestWhereInput[]
    userId?: StringFilter<"AccountDeletionRequest"> | string
    reason?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    status?: EnumAccountDeletionRequestStatusFilter<"AccountDeletionRequest"> | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonFilter<"AccountDeletionRequest">
    createdAt?: DateTimeFilter<"AccountDeletionRequest"> | Date | string
    processedAt?: DateTimeNullableFilter<"AccountDeletionRequest"> | Date | string | null
    processedByAdminId?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountDeletionRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    userSnapshot?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processedByAdminId?: SortOrderInput | SortOrder
    _count?: AccountDeletionRequestCountOrderByAggregateInput
    _max?: AccountDeletionRequestMaxOrderByAggregateInput
    _min?: AccountDeletionRequestMinOrderByAggregateInput
  }

  export type AccountDeletionRequestScalarWhereWithAggregatesInput = {
    AND?: AccountDeletionRequestScalarWhereWithAggregatesInput | AccountDeletionRequestScalarWhereWithAggregatesInput[]
    OR?: AccountDeletionRequestScalarWhereWithAggregatesInput[]
    NOT?: AccountDeletionRequestScalarWhereWithAggregatesInput | AccountDeletionRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountDeletionRequest"> | string
    userId?: StringWithAggregatesFilter<"AccountDeletionRequest"> | string
    reason?: StringNullableWithAggregatesFilter<"AccountDeletionRequest"> | string | null
    status?: EnumAccountDeletionRequestStatusWithAggregatesFilter<"AccountDeletionRequest"> | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonWithAggregatesFilter<"AccountDeletionRequest">
    createdAt?: DateTimeWithAggregatesFilter<"AccountDeletionRequest"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"AccountDeletionRequest"> | Date | string | null
    processedByAdminId?: StringNullableWithAggregatesFilter<"AccountDeletionRequest"> | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    listingsCreated?: ListingCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    listingsCreated?: ListingUncheckedCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUncheckedUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    id?: string
    title: string
    description: string
    propertyType: string
    city: string
    district?: string | null
    address?: string | null
    surface?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceLabel?: string | null
    rooms?: number | null
    imageUrls?: ListingCreateimageUrlsInput | string[]
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutListingsCreatedInput
    applications?: ListingApplicationCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    propertyType: string
    city: string
    district?: string | null
    address?: string | null
    surface?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceLabel?: string | null
    rooms?: number | null
    imageUrls?: ListingCreateimageUrlsInput | string[]
    status?: $Enums.ListingStatus
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ListingApplicationUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutListingsCreatedNestedInput
    applications?: ListingApplicationUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ListingApplicationUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    id?: string
    title: string
    description: string
    propertyType: string
    city: string
    district?: string | null
    address?: string | null
    surface?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceLabel?: string | null
    rooms?: number | null
    imageUrls?: ListingCreateimageUrlsInput | string[]
    status?: $Enums.ListingStatus
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingApplicationCreateInput = {
    id?: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutApplicationsInput
    user: UserCreateNestedOneWithoutListingApplicationsInput
  }

  export type ListingApplicationUncheckedCreateInput = {
    id?: string
    listingId: string
    userId: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UserUpdateOneRequiredWithoutListingApplicationsNestedInput
  }

  export type ListingApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingApplicationCreateManyInput = {
    id?: string
    listingId: string
    userId: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    tokenHash: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateInput = {
    id?: string
    projectType: $Enums.ProjectType
    city: string
    district?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    budgetRange?: string | null
    propertyType?: string | null
    surface?: number | null
    surfaceRange?: string | null
    urgency: $Enums.Urgency
    objective?: string | null
    message?: string | null
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    personalNotes?: string | null
    consentAccepted: boolean
    score: number
    maturityLevel: $Enums.MaturityLevel
    commercialPriority: $Enums.CommercialPriority
    profileType: string
    recommendedService: string
    strengths?: AnalysisCreatestrengthsInput | string[]
    missingInfo?: AnalysisCreatemissingInfoInput | string[]
    recommendations?: AnalysisCreaterecommendationsInput | string[]
    nextAction: string
    status?: $Enums.AnalysisStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnalysesInput
  }

  export type AnalysisUncheckedCreateInput = {
    id?: string
    userId: string
    projectType: $Enums.ProjectType
    city: string
    district?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    budgetRange?: string | null
    propertyType?: string | null
    surface?: number | null
    surfaceRange?: string | null
    urgency: $Enums.Urgency
    objective?: string | null
    message?: string | null
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    personalNotes?: string | null
    consentAccepted: boolean
    score: number
    maturityLevel: $Enums.MaturityLevel
    commercialPriority: $Enums.CommercialPriority
    profileType: string
    recommendedService: string
    strengths?: AnalysisCreatestrengthsInput | string[]
    missingInfo?: AnalysisCreatemissingInfoInput | string[]
    recommendations?: AnalysisCreaterecommendationsInput | string[]
    nextAction: string
    status?: $Enums.AnalysisStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    surfaceRange?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    personalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    maturityLevel?: EnumMaturityLevelFieldUpdateOperationsInput | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFieldUpdateOperationsInput | $Enums.CommercialPriority
    profileType?: StringFieldUpdateOperationsInput | string
    recommendedService?: StringFieldUpdateOperationsInput | string
    strengths?: AnalysisUpdatestrengthsInput | string[]
    missingInfo?: AnalysisUpdatemissingInfoInput | string[]
    recommendations?: AnalysisUpdaterecommendationsInput | string[]
    nextAction?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type AnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    surfaceRange?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    personalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    maturityLevel?: EnumMaturityLevelFieldUpdateOperationsInput | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFieldUpdateOperationsInput | $Enums.CommercialPriority
    profileType?: StringFieldUpdateOperationsInput | string
    recommendedService?: StringFieldUpdateOperationsInput | string
    strengths?: AnalysisUpdatestrengthsInput | string[]
    missingInfo?: AnalysisUpdatemissingInfoInput | string[]
    recommendations?: AnalysisUpdaterecommendationsInput | string[]
    nextAction?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateManyInput = {
    id?: string
    userId: string
    projectType: $Enums.ProjectType
    city: string
    district?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    budgetRange?: string | null
    propertyType?: string | null
    surface?: number | null
    surfaceRange?: string | null
    urgency: $Enums.Urgency
    objective?: string | null
    message?: string | null
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    personalNotes?: string | null
    consentAccepted: boolean
    score: number
    maturityLevel: $Enums.MaturityLevel
    commercialPriority: $Enums.CommercialPriority
    profileType: string
    recommendedService: string
    strengths?: AnalysisCreatestrengthsInput | string[]
    missingInfo?: AnalysisCreatemissingInfoInput | string[]
    recommendations?: AnalysisCreaterecommendationsInput | string[]
    nextAction: string
    status?: $Enums.AnalysisStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    surfaceRange?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    personalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    maturityLevel?: EnumMaturityLevelFieldUpdateOperationsInput | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFieldUpdateOperationsInput | $Enums.CommercialPriority
    profileType?: StringFieldUpdateOperationsInput | string
    recommendedService?: StringFieldUpdateOperationsInput | string
    strengths?: AnalysisUpdatestrengthsInput | string[]
    missingInfo?: AnalysisUpdatemissingInfoInput | string[]
    recommendations?: AnalysisUpdaterecommendationsInput | string[]
    nextAction?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    surfaceRange?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    personalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    maturityLevel?: EnumMaturityLevelFieldUpdateOperationsInput | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFieldUpdateOperationsInput | $Enums.CommercialPriority
    profileType?: StringFieldUpdateOperationsInput | string
    recommendedService?: StringFieldUpdateOperationsInput | string
    strengths?: AnalysisUpdatestrengthsInput | string[]
    missingInfo?: AnalysisUpdatemissingInfoInput | string[]
    recommendations?: AnalysisUpdaterecommendationsInput | string[]
    nextAction?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHistoryCreateInput = {
    id?: string
    originalAnalysisId: string
    userId?: string | null
    userEmail: string
    userFirstName: string
    userLastName: string
    userPhone?: string | null
    snapshot: JsonNullValueInput | InputJsonValue
    deletedBy: string
    deletedAt?: Date | string
  }

  export type AnalysisHistoryUncheckedCreateInput = {
    id?: string
    originalAnalysisId: string
    userId?: string | null
    userEmail: string
    userFirstName: string
    userLastName: string
    userPhone?: string | null
    snapshot: JsonNullValueInput | InputJsonValue
    deletedBy: string
    deletedAt?: Date | string
  }

  export type AnalysisHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalAnalysisId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: JsonNullValueInput | InputJsonValue
    deletedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalAnalysisId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: JsonNullValueInput | InputJsonValue
    deletedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHistoryCreateManyInput = {
    id?: string
    originalAnalysisId: string
    userId?: string | null
    userEmail: string
    userFirstName: string
    userLastName: string
    userPhone?: string | null
    snapshot: JsonNullValueInput | InputJsonValue
    deletedBy: string
    deletedAt?: Date | string
  }

  export type AnalysisHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalAnalysisId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: JsonNullValueInput | InputJsonValue
    deletedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalAnalysisId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: JsonNullValueInput | InputJsonValue
    deletedBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDeletionRequestCreateInput = {
    id?: string
    reason?: string | null
    status?: $Enums.AccountDeletionRequestStatus
    userSnapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    processedByAdminId?: string | null
    user: UserCreateNestedOneWithoutAccountDeletionRequestsInput
  }

  export type AccountDeletionRequestUncheckedCreateInput = {
    id?: string
    userId: string
    reason?: string | null
    status?: $Enums.AccountDeletionRequestStatus
    userSnapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    processedByAdminId?: string | null
  }

  export type AccountDeletionRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountDeletionRequestStatusFieldUpdateOperationsInput | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountDeletionRequestsNestedInput
  }

  export type AccountDeletionRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountDeletionRequestStatusFieldUpdateOperationsInput | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountDeletionRequestCreateManyInput = {
    id?: string
    userId: string
    reason?: string | null
    status?: $Enums.AccountDeletionRequestStatus
    userSnapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    processedByAdminId?: string | null
  }

  export type AccountDeletionRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountDeletionRequestStatusFieldUpdateOperationsInput | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountDeletionRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountDeletionRequestStatusFieldUpdateOperationsInput | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    entity: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    entity: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnalysisListRelationFilter = {
    every?: AnalysisWhereInput
    some?: AnalysisWhereInput
    none?: AnalysisWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AccountDeletionRequestListRelationFilter = {
    every?: AccountDeletionRequestWhereInput
    some?: AccountDeletionRequestWhereInput
    none?: AccountDeletionRequestWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type ListingApplicationListRelationFilter = {
    every?: ListingApplicationWhereInput
    some?: ListingApplicationWhereInput
    none?: ListingApplicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountDeletionRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    priceLabel?: SortOrder
    rooms?: SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    surface?: SortOrder
    price?: SortOrder
    rooms?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    priceLabel?: SortOrder
    rooms?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    priceLabel?: SortOrder
    rooms?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    surface?: SortOrder
    price?: SortOrder
    rooms?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type EnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumListingApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingApplicationStatus | EnumListingApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingApplicationStatus[] | ListEnumListingApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingApplicationStatus[] | ListEnumListingApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingApplicationStatusFilter<$PrismaModel> | $Enums.ListingApplicationStatus
  }

  export type ListingScalarRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type ListingApplicationListingIdUserIdCompoundUniqueInput = {
    listingId: string
    userId: string
  }

  export type ListingApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    budget?: SortOrder
    phone?: SortOrder
    profession?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    childrenCount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingApplicationAvgOrderByAggregateInput = {
    childrenCount?: SortOrder
  }

  export type ListingApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    budget?: SortOrder
    phone?: SortOrder
    profession?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    childrenCount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    budget?: SortOrder
    phone?: SortOrder
    profession?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    childrenCount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingApplicationSumOrderByAggregateInput = {
    childrenCount?: SortOrder
  }

  export type EnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumListingApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingApplicationStatus | EnumListingApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingApplicationStatus[] | ListEnumListingApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingApplicationStatus[] | ListEnumListingApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumListingApplicationStatusFilter<$PrismaModel>
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type EnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumMaturityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.MaturityLevel | EnumMaturityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.MaturityLevel[] | ListEnumMaturityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaturityLevel[] | ListEnumMaturityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumMaturityLevelFilter<$PrismaModel> | $Enums.MaturityLevel
  }

  export type EnumCommercialPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.CommercialPriority | EnumCommercialPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.CommercialPriority[] | ListEnumCommercialPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommercialPriority[] | ListEnumCommercialPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumCommercialPriorityFilter<$PrismaModel> | $Enums.CommercialPriority
  }

  export type EnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type AnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectType?: SortOrder
    city?: SortOrder
    district?: SortOrder
    budget?: SortOrder
    budgetRange?: SortOrder
    propertyType?: SortOrder
    surface?: SortOrder
    surfaceRange?: SortOrder
    urgency?: SortOrder
    objective?: SortOrder
    message?: SortOrder
    profession?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    childrenCount?: SortOrder
    personalNotes?: SortOrder
    consentAccepted?: SortOrder
    score?: SortOrder
    maturityLevel?: SortOrder
    commercialPriority?: SortOrder
    profileType?: SortOrder
    recommendedService?: SortOrder
    strengths?: SortOrder
    missingInfo?: SortOrder
    recommendations?: SortOrder
    nextAction?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisAvgOrderByAggregateInput = {
    budget?: SortOrder
    surface?: SortOrder
    childrenCount?: SortOrder
    score?: SortOrder
  }

  export type AnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectType?: SortOrder
    city?: SortOrder
    district?: SortOrder
    budget?: SortOrder
    budgetRange?: SortOrder
    propertyType?: SortOrder
    surface?: SortOrder
    surfaceRange?: SortOrder
    urgency?: SortOrder
    objective?: SortOrder
    message?: SortOrder
    profession?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    childrenCount?: SortOrder
    personalNotes?: SortOrder
    consentAccepted?: SortOrder
    score?: SortOrder
    maturityLevel?: SortOrder
    commercialPriority?: SortOrder
    profileType?: SortOrder
    recommendedService?: SortOrder
    nextAction?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectType?: SortOrder
    city?: SortOrder
    district?: SortOrder
    budget?: SortOrder
    budgetRange?: SortOrder
    propertyType?: SortOrder
    surface?: SortOrder
    surfaceRange?: SortOrder
    urgency?: SortOrder
    objective?: SortOrder
    message?: SortOrder
    profession?: SortOrder
    maritalStatus?: SortOrder
    hasChildren?: SortOrder
    childrenCount?: SortOrder
    personalNotes?: SortOrder
    consentAccepted?: SortOrder
    score?: SortOrder
    maturityLevel?: SortOrder
    commercialPriority?: SortOrder
    profileType?: SortOrder
    recommendedService?: SortOrder
    nextAction?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisSumOrderByAggregateInput = {
    budget?: SortOrder
    surface?: SortOrder
    childrenCount?: SortOrder
    score?: SortOrder
  }

  export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type EnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMaturityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaturityLevel | EnumMaturityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.MaturityLevel[] | ListEnumMaturityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaturityLevel[] | ListEnumMaturityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumMaturityLevelWithAggregatesFilter<$PrismaModel> | $Enums.MaturityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaturityLevelFilter<$PrismaModel>
    _max?: NestedEnumMaturityLevelFilter<$PrismaModel>
  }

  export type EnumCommercialPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommercialPriority | EnumCommercialPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.CommercialPriority[] | ListEnumCommercialPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommercialPriority[] | ListEnumCommercialPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumCommercialPriorityWithAggregatesFilter<$PrismaModel> | $Enums.CommercialPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommercialPriorityFilter<$PrismaModel>
    _max?: NestedEnumCommercialPriorityFilter<$PrismaModel>
  }

  export type EnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnalysisHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    originalAnalysisId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userPhone?: SortOrder
    snapshot?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type AnalysisHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    originalAnalysisId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userPhone?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type AnalysisHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    originalAnalysisId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userPhone?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumAccountDeletionRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountDeletionRequestStatus | EnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountDeletionRequestStatus[] | ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountDeletionRequestStatus[] | ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountDeletionRequestStatusFilter<$PrismaModel> | $Enums.AccountDeletionRequestStatus
  }

  export type AccountDeletionRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    userSnapshot?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    processedByAdminId?: SortOrder
  }

  export type AccountDeletionRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    processedByAdminId?: SortOrder
  }

  export type AccountDeletionRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    processedByAdminId?: SortOrder
  }

  export type EnumAccountDeletionRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountDeletionRequestStatus | EnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountDeletionRequestStatus[] | ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountDeletionRequestStatus[] | ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountDeletionRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountDeletionRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountDeletionRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountDeletionRequestStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AccountDeletionRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountDeletionRequestCreateWithoutUserInput, AccountDeletionRequestUncheckedCreateWithoutUserInput> | AccountDeletionRequestCreateWithoutUserInput[] | AccountDeletionRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountDeletionRequestCreateOrConnectWithoutUserInput | AccountDeletionRequestCreateOrConnectWithoutUserInput[]
    createMany?: AccountDeletionRequestCreateManyUserInputEnvelope
    connect?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ListingCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ListingCreateWithoutCreatedByInput, ListingUncheckedCreateWithoutCreatedByInput> | ListingCreateWithoutCreatedByInput[] | ListingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCreatedByInput | ListingCreateOrConnectWithoutCreatedByInput[]
    createMany?: ListingCreateManyCreatedByInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ListingApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<ListingApplicationCreateWithoutUserInput, ListingApplicationUncheckedCreateWithoutUserInput> | ListingApplicationCreateWithoutUserInput[] | ListingApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingApplicationCreateOrConnectWithoutUserInput | ListingApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ListingApplicationCreateManyUserInputEnvelope
    connect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
  }

  export type AnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AccountDeletionRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountDeletionRequestCreateWithoutUserInput, AccountDeletionRequestUncheckedCreateWithoutUserInput> | AccountDeletionRequestCreateWithoutUserInput[] | AccountDeletionRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountDeletionRequestCreateOrConnectWithoutUserInput | AccountDeletionRequestCreateOrConnectWithoutUserInput[]
    createMany?: AccountDeletionRequestCreateManyUserInputEnvelope
    connect?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ListingCreateWithoutCreatedByInput, ListingUncheckedCreateWithoutCreatedByInput> | ListingCreateWithoutCreatedByInput[] | ListingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCreatedByInput | ListingCreateOrConnectWithoutCreatedByInput[]
    createMany?: ListingCreateManyCreatedByInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ListingApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListingApplicationCreateWithoutUserInput, ListingApplicationUncheckedCreateWithoutUserInput> | ListingApplicationCreateWithoutUserInput[] | ListingApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingApplicationCreateOrConnectWithoutUserInput | ListingApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ListingApplicationCreateManyUserInputEnvelope
    connect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutUserInput | AnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutUserInput | AnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutUserInput | AnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AccountDeletionRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountDeletionRequestCreateWithoutUserInput, AccountDeletionRequestUncheckedCreateWithoutUserInput> | AccountDeletionRequestCreateWithoutUserInput[] | AccountDeletionRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountDeletionRequestCreateOrConnectWithoutUserInput | AccountDeletionRequestCreateOrConnectWithoutUserInput[]
    upsert?: AccountDeletionRequestUpsertWithWhereUniqueWithoutUserInput | AccountDeletionRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountDeletionRequestCreateManyUserInputEnvelope
    set?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
    disconnect?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
    delete?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
    connect?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
    update?: AccountDeletionRequestUpdateWithWhereUniqueWithoutUserInput | AccountDeletionRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountDeletionRequestUpdateManyWithWhereWithoutUserInput | AccountDeletionRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountDeletionRequestScalarWhereInput | AccountDeletionRequestScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ListingUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ListingCreateWithoutCreatedByInput, ListingUncheckedCreateWithoutCreatedByInput> | ListingCreateWithoutCreatedByInput[] | ListingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCreatedByInput | ListingCreateOrConnectWithoutCreatedByInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutCreatedByInput | ListingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ListingCreateManyCreatedByInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutCreatedByInput | ListingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutCreatedByInput | ListingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ListingApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListingApplicationCreateWithoutUserInput, ListingApplicationUncheckedCreateWithoutUserInput> | ListingApplicationCreateWithoutUserInput[] | ListingApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingApplicationCreateOrConnectWithoutUserInput | ListingApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ListingApplicationUpsertWithWhereUniqueWithoutUserInput | ListingApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListingApplicationCreateManyUserInputEnvelope
    set?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    disconnect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    delete?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    connect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    update?: ListingApplicationUpdateWithWhereUniqueWithoutUserInput | ListingApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListingApplicationUpdateManyWithWhereWithoutUserInput | ListingApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListingApplicationScalarWhereInput | ListingApplicationScalarWhereInput[]
  }

  export type AnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutUserInput | AnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutUserInput | AnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutUserInput | AnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AccountDeletionRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountDeletionRequestCreateWithoutUserInput, AccountDeletionRequestUncheckedCreateWithoutUserInput> | AccountDeletionRequestCreateWithoutUserInput[] | AccountDeletionRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountDeletionRequestCreateOrConnectWithoutUserInput | AccountDeletionRequestCreateOrConnectWithoutUserInput[]
    upsert?: AccountDeletionRequestUpsertWithWhereUniqueWithoutUserInput | AccountDeletionRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountDeletionRequestCreateManyUserInputEnvelope
    set?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
    disconnect?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
    delete?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
    connect?: AccountDeletionRequestWhereUniqueInput | AccountDeletionRequestWhereUniqueInput[]
    update?: AccountDeletionRequestUpdateWithWhereUniqueWithoutUserInput | AccountDeletionRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountDeletionRequestUpdateManyWithWhereWithoutUserInput | AccountDeletionRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountDeletionRequestScalarWhereInput | AccountDeletionRequestScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ListingCreateWithoutCreatedByInput, ListingUncheckedCreateWithoutCreatedByInput> | ListingCreateWithoutCreatedByInput[] | ListingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCreatedByInput | ListingCreateOrConnectWithoutCreatedByInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutCreatedByInput | ListingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ListingCreateManyCreatedByInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutCreatedByInput | ListingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutCreatedByInput | ListingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ListingApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListingApplicationCreateWithoutUserInput, ListingApplicationUncheckedCreateWithoutUserInput> | ListingApplicationCreateWithoutUserInput[] | ListingApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingApplicationCreateOrConnectWithoutUserInput | ListingApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ListingApplicationUpsertWithWhereUniqueWithoutUserInput | ListingApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListingApplicationCreateManyUserInputEnvelope
    set?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    disconnect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    delete?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    connect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    update?: ListingApplicationUpdateWithWhereUniqueWithoutUserInput | ListingApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListingApplicationUpdateManyWithWhereWithoutUserInput | ListingApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListingApplicationScalarWhereInput | ListingApplicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ListingCreateimageUrlsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutListingsCreatedInput = {
    create?: XOR<UserCreateWithoutListingsCreatedInput, UserUncheckedCreateWithoutListingsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type ListingApplicationCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingApplicationCreateWithoutListingInput, ListingApplicationUncheckedCreateWithoutListingInput> | ListingApplicationCreateWithoutListingInput[] | ListingApplicationUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingApplicationCreateOrConnectWithoutListingInput | ListingApplicationCreateOrConnectWithoutListingInput[]
    createMany?: ListingApplicationCreateManyListingInputEnvelope
    connect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
  }

  export type ListingApplicationUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingApplicationCreateWithoutListingInput, ListingApplicationUncheckedCreateWithoutListingInput> | ListingApplicationCreateWithoutListingInput[] | ListingApplicationUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingApplicationCreateOrConnectWithoutListingInput | ListingApplicationCreateOrConnectWithoutListingInput[]
    createMany?: ListingApplicationCreateManyListingInputEnvelope
    connect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListingUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type UserUpdateOneWithoutListingsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutListingsCreatedInput, UserUncheckedCreateWithoutListingsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsCreatedInput
    upsert?: UserUpsertWithoutListingsCreatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsCreatedInput, UserUpdateWithoutListingsCreatedInput>, UserUncheckedUpdateWithoutListingsCreatedInput>
  }

  export type ListingApplicationUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingApplicationCreateWithoutListingInput, ListingApplicationUncheckedCreateWithoutListingInput> | ListingApplicationCreateWithoutListingInput[] | ListingApplicationUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingApplicationCreateOrConnectWithoutListingInput | ListingApplicationCreateOrConnectWithoutListingInput[]
    upsert?: ListingApplicationUpsertWithWhereUniqueWithoutListingInput | ListingApplicationUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingApplicationCreateManyListingInputEnvelope
    set?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    disconnect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    delete?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    connect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    update?: ListingApplicationUpdateWithWhereUniqueWithoutListingInput | ListingApplicationUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingApplicationUpdateManyWithWhereWithoutListingInput | ListingApplicationUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingApplicationScalarWhereInput | ListingApplicationScalarWhereInput[]
  }

  export type ListingApplicationUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingApplicationCreateWithoutListingInput, ListingApplicationUncheckedCreateWithoutListingInput> | ListingApplicationCreateWithoutListingInput[] | ListingApplicationUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingApplicationCreateOrConnectWithoutListingInput | ListingApplicationCreateOrConnectWithoutListingInput[]
    upsert?: ListingApplicationUpsertWithWhereUniqueWithoutListingInput | ListingApplicationUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingApplicationCreateManyListingInputEnvelope
    set?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    disconnect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    delete?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    connect?: ListingApplicationWhereUniqueInput | ListingApplicationWhereUniqueInput[]
    update?: ListingApplicationUpdateWithWhereUniqueWithoutListingInput | ListingApplicationUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingApplicationUpdateManyWithWhereWithoutListingInput | ListingApplicationUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingApplicationScalarWhereInput | ListingApplicationScalarWhereInput[]
  }

  export type ListingCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ListingCreateWithoutApplicationsInput, ListingUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutApplicationsInput
    connect?: ListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutListingApplicationsInput = {
    create?: XOR<UserCreateWithoutListingApplicationsInput, UserUncheckedCreateWithoutListingApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumListingApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingApplicationStatus
  }

  export type ListingUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ListingCreateWithoutApplicationsInput, ListingUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutApplicationsInput
    upsert?: ListingUpsertWithoutApplicationsInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutApplicationsInput, ListingUpdateWithoutApplicationsInput>, ListingUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneRequiredWithoutListingApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutListingApplicationsInput, UserUncheckedCreateWithoutListingApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingApplicationsInput
    upsert?: UserUpsertWithoutListingApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingApplicationsInput, UserUpdateWithoutListingApplicationsInput>, UserUncheckedUpdateWithoutListingApplicationsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type AnalysisCreatestrengthsInput = {
    set: string[]
  }

  export type AnalysisCreatemissingInfoInput = {
    set: string[]
  }

  export type AnalysisCreaterecommendationsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType
  }

  export type EnumUrgencyFieldUpdateOperationsInput = {
    set?: $Enums.Urgency
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumMaturityLevelFieldUpdateOperationsInput = {
    set?: $Enums.MaturityLevel
  }

  export type EnumCommercialPriorityFieldUpdateOperationsInput = {
    set?: $Enums.CommercialPriority
  }

  export type AnalysisUpdatestrengthsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AnalysisUpdatemissingInfoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AnalysisUpdaterecommendationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisStatus
  }

  export type UserUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysesInput
    upsert?: UserUpsertWithoutAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalysesInput, UserUpdateWithoutAnalysesInput>, UserUncheckedUpdateWithoutAnalysesInput>
  }

  export type UserCreateNestedOneWithoutAccountDeletionRequestsInput = {
    create?: XOR<UserCreateWithoutAccountDeletionRequestsInput, UserUncheckedCreateWithoutAccountDeletionRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountDeletionRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAccountDeletionRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountDeletionRequestStatus
  }

  export type UserUpdateOneRequiredWithoutAccountDeletionRequestsNestedInput = {
    create?: XOR<UserCreateWithoutAccountDeletionRequestsInput, UserUncheckedCreateWithoutAccountDeletionRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountDeletionRequestsInput
    upsert?: UserUpsertWithoutAccountDeletionRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountDeletionRequestsInput, UserUpdateWithoutAccountDeletionRequestsInput>, UserUncheckedUpdateWithoutAccountDeletionRequestsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumListingApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingApplicationStatus | EnumListingApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingApplicationStatus[] | ListEnumListingApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingApplicationStatus[] | ListEnumListingApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingApplicationStatusFilter<$PrismaModel> | $Enums.ListingApplicationStatus
  }

  export type NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumListingApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingApplicationStatus | EnumListingApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingApplicationStatus[] | ListEnumListingApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingApplicationStatus[] | ListEnumListingApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumListingApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type NestedEnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMaturityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.MaturityLevel | EnumMaturityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.MaturityLevel[] | ListEnumMaturityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaturityLevel[] | ListEnumMaturityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumMaturityLevelFilter<$PrismaModel> | $Enums.MaturityLevel
  }

  export type NestedEnumCommercialPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.CommercialPriority | EnumCommercialPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.CommercialPriority[] | ListEnumCommercialPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommercialPriority[] | ListEnumCommercialPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumCommercialPriorityFilter<$PrismaModel> | $Enums.CommercialPriority
  }

  export type NestedEnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type NestedEnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMaturityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaturityLevel | EnumMaturityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.MaturityLevel[] | ListEnumMaturityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaturityLevel[] | ListEnumMaturityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumMaturityLevelWithAggregatesFilter<$PrismaModel> | $Enums.MaturityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaturityLevelFilter<$PrismaModel>
    _max?: NestedEnumMaturityLevelFilter<$PrismaModel>
  }

  export type NestedEnumCommercialPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommercialPriority | EnumCommercialPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.CommercialPriority[] | ListEnumCommercialPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommercialPriority[] | ListEnumCommercialPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumCommercialPriorityWithAggregatesFilter<$PrismaModel> | $Enums.CommercialPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommercialPriorityFilter<$PrismaModel>
    _max?: NestedEnumCommercialPriorityFilter<$PrismaModel>
  }

  export type NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAccountDeletionRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountDeletionRequestStatus | EnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountDeletionRequestStatus[] | ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountDeletionRequestStatus[] | ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountDeletionRequestStatusFilter<$PrismaModel> | $Enums.AccountDeletionRequestStatus
  }

  export type NestedEnumAccountDeletionRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountDeletionRequestStatus | EnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountDeletionRequestStatus[] | ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountDeletionRequestStatus[] | ListEnumAccountDeletionRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountDeletionRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountDeletionRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountDeletionRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountDeletionRequestStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnalysisCreateWithoutUserInput = {
    id?: string
    projectType: $Enums.ProjectType
    city: string
    district?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    budgetRange?: string | null
    propertyType?: string | null
    surface?: number | null
    surfaceRange?: string | null
    urgency: $Enums.Urgency
    objective?: string | null
    message?: string | null
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    personalNotes?: string | null
    consentAccepted: boolean
    score: number
    maturityLevel: $Enums.MaturityLevel
    commercialPriority: $Enums.CommercialPriority
    profileType: string
    recommendedService: string
    strengths?: AnalysisCreatestrengthsInput | string[]
    missingInfo?: AnalysisCreatemissingInfoInput | string[]
    recommendations?: AnalysisCreaterecommendationsInput | string[]
    nextAction: string
    status?: $Enums.AnalysisStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    projectType: $Enums.ProjectType
    city: string
    district?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    budgetRange?: string | null
    propertyType?: string | null
    surface?: number | null
    surfaceRange?: string | null
    urgency: $Enums.Urgency
    objective?: string | null
    message?: string | null
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    personalNotes?: string | null
    consentAccepted: boolean
    score: number
    maturityLevel: $Enums.MaturityLevel
    commercialPriority: $Enums.CommercialPriority
    profileType: string
    recommendedService: string
    strengths?: AnalysisCreatestrengthsInput | string[]
    missingInfo?: AnalysisCreatemissingInfoInput | string[]
    recommendations?: AnalysisCreaterecommendationsInput | string[]
    nextAction: string
    status?: $Enums.AnalysisStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisCreateOrConnectWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    create: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput>
  }

  export type AnalysisCreateManyUserInputEnvelope = {
    data: AnalysisCreateManyUserInput | AnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountDeletionRequestCreateWithoutUserInput = {
    id?: string
    reason?: string | null
    status?: $Enums.AccountDeletionRequestStatus
    userSnapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    processedByAdminId?: string | null
  }

  export type AccountDeletionRequestUncheckedCreateWithoutUserInput = {
    id?: string
    reason?: string | null
    status?: $Enums.AccountDeletionRequestStatus
    userSnapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    processedByAdminId?: string | null
  }

  export type AccountDeletionRequestCreateOrConnectWithoutUserInput = {
    where: AccountDeletionRequestWhereUniqueInput
    create: XOR<AccountDeletionRequestCreateWithoutUserInput, AccountDeletionRequestUncheckedCreateWithoutUserInput>
  }

  export type AccountDeletionRequestCreateManyUserInputEnvelope = {
    data: AccountDeletionRequestCreateManyUserInput | AccountDeletionRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    propertyType: string
    city: string
    district?: string | null
    address?: string | null
    surface?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceLabel?: string | null
    rooms?: number | null
    imageUrls?: ListingCreateimageUrlsInput | string[]
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ListingApplicationCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    propertyType: string
    city: string
    district?: string | null
    address?: string | null
    surface?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceLabel?: string | null
    rooms?: number | null
    imageUrls?: ListingCreateimageUrlsInput | string[]
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ListingApplicationUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutCreatedByInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutCreatedByInput, ListingUncheckedCreateWithoutCreatedByInput>
  }

  export type ListingCreateManyCreatedByInputEnvelope = {
    data: ListingCreateManyCreatedByInput | ListingCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ListingApplicationCreateWithoutUserInput = {
    id?: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutApplicationsInput
  }

  export type ListingApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    listingId: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingApplicationCreateOrConnectWithoutUserInput = {
    where: ListingApplicationWhereUniqueInput
    create: XOR<ListingApplicationCreateWithoutUserInput, ListingApplicationUncheckedCreateWithoutUserInput>
  }

  export type ListingApplicationCreateManyUserInputEnvelope = {
    data: ListingApplicationCreateManyUserInput | ListingApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    update: XOR<AnalysisUpdateWithoutUserInput, AnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput>
  }

  export type AnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    data: XOR<AnalysisUpdateWithoutUserInput, AnalysisUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisUpdateManyWithWhereWithoutUserInput = {
    where: AnalysisScalarWhereInput
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalysisScalarWhereInput = {
    AND?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
    OR?: AnalysisScalarWhereInput[]
    NOT?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
    id?: StringFilter<"Analysis"> | string
    userId?: StringFilter<"Analysis"> | string
    projectType?: EnumProjectTypeFilter<"Analysis"> | $Enums.ProjectType
    city?: StringFilter<"Analysis"> | string
    district?: StringNullableFilter<"Analysis"> | string | null
    budget?: DecimalNullableFilter<"Analysis"> | Decimal | DecimalJsLike | number | string | null
    budgetRange?: StringNullableFilter<"Analysis"> | string | null
    propertyType?: StringNullableFilter<"Analysis"> | string | null
    surface?: FloatNullableFilter<"Analysis"> | number | null
    surfaceRange?: StringNullableFilter<"Analysis"> | string | null
    urgency?: EnumUrgencyFilter<"Analysis"> | $Enums.Urgency
    objective?: StringNullableFilter<"Analysis"> | string | null
    message?: StringNullableFilter<"Analysis"> | string | null
    profession?: StringNullableFilter<"Analysis"> | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"Analysis"> | $Enums.MaritalStatus | null
    hasChildren?: BoolNullableFilter<"Analysis"> | boolean | null
    childrenCount?: IntNullableFilter<"Analysis"> | number | null
    personalNotes?: StringNullableFilter<"Analysis"> | string | null
    consentAccepted?: BoolFilter<"Analysis"> | boolean
    score?: IntFilter<"Analysis"> | number
    maturityLevel?: EnumMaturityLevelFilter<"Analysis"> | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFilter<"Analysis"> | $Enums.CommercialPriority
    profileType?: StringFilter<"Analysis"> | string
    recommendedService?: StringFilter<"Analysis"> | string
    strengths?: StringNullableListFilter<"Analysis">
    missingInfo?: StringNullableListFilter<"Analysis">
    recommendations?: StringNullableListFilter<"Analysis">
    nextAction?: StringFilter<"Analysis"> | string
    status?: EnumAnalysisStatusFilter<"Analysis"> | $Enums.AnalysisStatus
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
    updatedAt?: DateTimeFilter<"Analysis"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AccountDeletionRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountDeletionRequestWhereUniqueInput
    update: XOR<AccountDeletionRequestUpdateWithoutUserInput, AccountDeletionRequestUncheckedUpdateWithoutUserInput>
    create: XOR<AccountDeletionRequestCreateWithoutUserInput, AccountDeletionRequestUncheckedCreateWithoutUserInput>
  }

  export type AccountDeletionRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountDeletionRequestWhereUniqueInput
    data: XOR<AccountDeletionRequestUpdateWithoutUserInput, AccountDeletionRequestUncheckedUpdateWithoutUserInput>
  }

  export type AccountDeletionRequestUpdateManyWithWhereWithoutUserInput = {
    where: AccountDeletionRequestScalarWhereInput
    data: XOR<AccountDeletionRequestUpdateManyMutationInput, AccountDeletionRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountDeletionRequestScalarWhereInput = {
    AND?: AccountDeletionRequestScalarWhereInput | AccountDeletionRequestScalarWhereInput[]
    OR?: AccountDeletionRequestScalarWhereInput[]
    NOT?: AccountDeletionRequestScalarWhereInput | AccountDeletionRequestScalarWhereInput[]
    id?: StringFilter<"AccountDeletionRequest"> | string
    userId?: StringFilter<"AccountDeletionRequest"> | string
    reason?: StringNullableFilter<"AccountDeletionRequest"> | string | null
    status?: EnumAccountDeletionRequestStatusFilter<"AccountDeletionRequest"> | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonFilter<"AccountDeletionRequest">
    createdAt?: DateTimeFilter<"AccountDeletionRequest"> | Date | string
    processedAt?: DateTimeNullableFilter<"AccountDeletionRequest"> | Date | string | null
    processedByAdminId?: StringNullableFilter<"AccountDeletionRequest"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ListingUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutCreatedByInput, ListingUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ListingCreateWithoutCreatedByInput, ListingUncheckedCreateWithoutCreatedByInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutCreatedByInput, ListingUncheckedUpdateWithoutCreatedByInput>
  }

  export type ListingUpdateManyWithWhereWithoutCreatedByInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    propertyType?: StringFilter<"Listing"> | string
    city?: StringFilter<"Listing"> | string
    district?: StringNullableFilter<"Listing"> | string | null
    address?: StringNullableFilter<"Listing"> | string | null
    surface?: FloatNullableFilter<"Listing"> | number | null
    price?: DecimalNullableFilter<"Listing"> | Decimal | DecimalJsLike | number | string | null
    priceLabel?: StringNullableFilter<"Listing"> | string | null
    rooms?: IntNullableFilter<"Listing"> | number | null
    imageUrls?: StringNullableListFilter<"Listing">
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    createdById?: StringNullableFilter<"Listing"> | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type ListingApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: ListingApplicationWhereUniqueInput
    update: XOR<ListingApplicationUpdateWithoutUserInput, ListingApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<ListingApplicationCreateWithoutUserInput, ListingApplicationUncheckedCreateWithoutUserInput>
  }

  export type ListingApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: ListingApplicationWhereUniqueInput
    data: XOR<ListingApplicationUpdateWithoutUserInput, ListingApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ListingApplicationUpdateManyWithWhereWithoutUserInput = {
    where: ListingApplicationScalarWhereInput
    data: XOR<ListingApplicationUpdateManyMutationInput, ListingApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type ListingApplicationScalarWhereInput = {
    AND?: ListingApplicationScalarWhereInput | ListingApplicationScalarWhereInput[]
    OR?: ListingApplicationScalarWhereInput[]
    NOT?: ListingApplicationScalarWhereInput | ListingApplicationScalarWhereInput[]
    id?: StringFilter<"ListingApplication"> | string
    listingId?: StringFilter<"ListingApplication"> | string
    userId?: StringFilter<"ListingApplication"> | string
    budget?: StringFilter<"ListingApplication"> | string
    phone?: StringFilter<"ListingApplication"> | string
    profession?: StringNullableFilter<"ListingApplication"> | string | null
    maritalStatus?: EnumMaritalStatusNullableFilter<"ListingApplication"> | $Enums.MaritalStatus | null
    hasChildren?: BoolNullableFilter<"ListingApplication"> | boolean | null
    childrenCount?: IntNullableFilter<"ListingApplication"> | number | null
    message?: StringNullableFilter<"ListingApplication"> | string | null
    status?: EnumListingApplicationStatusFilter<"ListingApplication"> | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFilter<"ListingApplication"> | Date | string
    updatedAt?: DateTimeFilter<"ListingApplication"> | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestCreateNestedManyWithoutUserInput
    listingsCreated?: ListingCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedCreateNestedManyWithoutUserInput
    listingsCreated?: ListingUncheckedCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUncheckedUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutListingsCreatedInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    listingApplications?: ListingApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListingsCreatedInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    listingApplications?: ListingApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListingsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsCreatedInput, UserUncheckedCreateWithoutListingsCreatedInput>
  }

  export type ListingApplicationCreateWithoutListingInput = {
    id?: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutListingApplicationsInput
  }

  export type ListingApplicationUncheckedCreateWithoutListingInput = {
    id?: string
    userId: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingApplicationCreateOrConnectWithoutListingInput = {
    where: ListingApplicationWhereUniqueInput
    create: XOR<ListingApplicationCreateWithoutListingInput, ListingApplicationUncheckedCreateWithoutListingInput>
  }

  export type ListingApplicationCreateManyListingInputEnvelope = {
    data: ListingApplicationCreateManyListingInput | ListingApplicationCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListingsCreatedInput = {
    update: XOR<UserUpdateWithoutListingsCreatedInput, UserUncheckedUpdateWithoutListingsCreatedInput>
    create: XOR<UserCreateWithoutListingsCreatedInput, UserUncheckedCreateWithoutListingsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsCreatedInput, UserUncheckedUpdateWithoutListingsCreatedInput>
  }

  export type UserUpdateWithoutListingsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    listingApplications?: ListingApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    listingApplications?: ListingApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListingApplicationUpsertWithWhereUniqueWithoutListingInput = {
    where: ListingApplicationWhereUniqueInput
    update: XOR<ListingApplicationUpdateWithoutListingInput, ListingApplicationUncheckedUpdateWithoutListingInput>
    create: XOR<ListingApplicationCreateWithoutListingInput, ListingApplicationUncheckedCreateWithoutListingInput>
  }

  export type ListingApplicationUpdateWithWhereUniqueWithoutListingInput = {
    where: ListingApplicationWhereUniqueInput
    data: XOR<ListingApplicationUpdateWithoutListingInput, ListingApplicationUncheckedUpdateWithoutListingInput>
  }

  export type ListingApplicationUpdateManyWithWhereWithoutListingInput = {
    where: ListingApplicationScalarWhereInput
    data: XOR<ListingApplicationUpdateManyMutationInput, ListingApplicationUncheckedUpdateManyWithoutListingInput>
  }

  export type ListingCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description: string
    propertyType: string
    city: string
    district?: string | null
    address?: string | null
    surface?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceLabel?: string | null
    rooms?: number | null
    imageUrls?: ListingCreateimageUrlsInput | string[]
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutListingsCreatedInput
  }

  export type ListingUncheckedCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description: string
    propertyType: string
    city: string
    district?: string | null
    address?: string | null
    surface?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceLabel?: string | null
    rooms?: number | null
    imageUrls?: ListingCreateimageUrlsInput | string[]
    status?: $Enums.ListingStatus
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingCreateOrConnectWithoutApplicationsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutApplicationsInput, ListingUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutListingApplicationsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    listingsCreated?: ListingCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutListingApplicationsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    listingsCreated?: ListingUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutListingApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingApplicationsInput, UserUncheckedCreateWithoutListingApplicationsInput>
  }

  export type ListingUpsertWithoutApplicationsInput = {
    update: XOR<ListingUpdateWithoutApplicationsInput, ListingUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ListingCreateWithoutApplicationsInput, ListingUncheckedCreateWithoutApplicationsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutApplicationsInput, ListingUncheckedUpdateWithoutApplicationsInput>
  }

  export type ListingUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutListingsCreatedNestedInput
  }

  export type ListingUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutListingApplicationsInput = {
    update: XOR<UserUpdateWithoutListingApplicationsInput, UserUncheckedUpdateWithoutListingApplicationsInput>
    create: XOR<UserCreateWithoutListingApplicationsInput, UserUncheckedCreateWithoutListingApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingApplicationsInput, UserUncheckedUpdateWithoutListingApplicationsInput>
  }

  export type UserUpdateWithoutListingApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutListingApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    listingsCreated?: ListingCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    listingsCreated?: ListingUncheckedCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUncheckedUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAnalysesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    listingsCreated?: ListingCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalysesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    listingsCreated?: ListingUncheckedCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
  }

  export type UserUpsertWithoutAnalysesInput = {
    update: XOR<UserUpdateWithoutAnalysesInput, UserUncheckedUpdateWithoutAnalysesInput>
    create: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalysesInput, UserUncheckedUpdateWithoutAnalysesInput>
  }

  export type UserUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUncheckedUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountDeletionRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    listingsCreated?: ListingCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountDeletionRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    listingsCreated?: ListingUncheckedCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountDeletionRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountDeletionRequestsInput, UserUncheckedCreateWithoutAccountDeletionRequestsInput>
  }

  export type UserUpsertWithoutAccountDeletionRequestsInput = {
    update: XOR<UserUpdateWithoutAccountDeletionRequestsInput, UserUncheckedUpdateWithoutAccountDeletionRequestsInput>
    create: XOR<UserCreateWithoutAccountDeletionRequestsInput, UserUncheckedCreateWithoutAccountDeletionRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountDeletionRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountDeletionRequestsInput, UserUncheckedUpdateWithoutAccountDeletionRequestsInput>
  }

  export type UserUpdateWithoutAccountDeletionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountDeletionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUncheckedUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    listingsCreated?: ListingCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    listingsCreated?: ListingUncheckedCreateNestedManyWithoutCreatedByInput
    listingApplications?: ListingApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    accountDeletionRequests?: AccountDeletionRequestUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    listingsCreated?: ListingUncheckedUpdateManyWithoutCreatedByNestedInput
    listingApplications?: ListingApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnalysisCreateManyUserInput = {
    id?: string
    projectType: $Enums.ProjectType
    city: string
    district?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    budgetRange?: string | null
    propertyType?: string | null
    surface?: number | null
    surfaceRange?: string | null
    urgency: $Enums.Urgency
    objective?: string | null
    message?: string | null
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    personalNotes?: string | null
    consentAccepted: boolean
    score: number
    maturityLevel: $Enums.MaturityLevel
    commercialPriority: $Enums.CommercialPriority
    profileType: string
    recommendedService: string
    strengths?: AnalysisCreatestrengthsInput | string[]
    missingInfo?: AnalysisCreatemissingInfoInput | string[]
    recommendations?: AnalysisCreaterecommendationsInput | string[]
    nextAction: string
    status?: $Enums.AnalysisStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AccountDeletionRequestCreateManyUserInput = {
    id?: string
    reason?: string | null
    status?: $Enums.AccountDeletionRequestStatus
    userSnapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    processedByAdminId?: string | null
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    propertyType: string
    city: string
    district?: string | null
    address?: string | null
    surface?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceLabel?: string | null
    rooms?: number | null
    imageUrls?: ListingCreateimageUrlsInput | string[]
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingApplicationCreateManyUserInput = {
    id?: string
    listingId: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    surfaceRange?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    personalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    maturityLevel?: EnumMaturityLevelFieldUpdateOperationsInput | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFieldUpdateOperationsInput | $Enums.CommercialPriority
    profileType?: StringFieldUpdateOperationsInput | string
    recommendedService?: StringFieldUpdateOperationsInput | string
    strengths?: AnalysisUpdatestrengthsInput | string[]
    missingInfo?: AnalysisUpdatemissingInfoInput | string[]
    recommendations?: AnalysisUpdaterecommendationsInput | string[]
    nextAction?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    surfaceRange?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    personalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    maturityLevel?: EnumMaturityLevelFieldUpdateOperationsInput | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFieldUpdateOperationsInput | $Enums.CommercialPriority
    profileType?: StringFieldUpdateOperationsInput | string
    recommendedService?: StringFieldUpdateOperationsInput | string
    strengths?: AnalysisUpdatestrengthsInput | string[]
    missingInfo?: AnalysisUpdatemissingInfoInput | string[]
    recommendations?: AnalysisUpdaterecommendationsInput | string[]
    nextAction?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    surfaceRange?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    personalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    maturityLevel?: EnumMaturityLevelFieldUpdateOperationsInput | $Enums.MaturityLevel
    commercialPriority?: EnumCommercialPriorityFieldUpdateOperationsInput | $Enums.CommercialPriority
    profileType?: StringFieldUpdateOperationsInput | string
    recommendedService?: StringFieldUpdateOperationsInput | string
    strengths?: AnalysisUpdatestrengthsInput | string[]
    missingInfo?: AnalysisUpdatemissingInfoInput | string[]
    recommendations?: AnalysisUpdaterecommendationsInput | string[]
    nextAction?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDeletionRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountDeletionRequestStatusFieldUpdateOperationsInput | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountDeletionRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountDeletionRequestStatusFieldUpdateOperationsInput | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountDeletionRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountDeletionRequestStatusFieldUpdateOperationsInput | $Enums.AccountDeletionRequestStatus
    userSnapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ListingApplicationUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ListingApplicationUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ListingApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingApplicationCreateManyListingInput = {
    id?: string
    userId: string
    budget: string
    phone: string
    profession?: string | null
    maritalStatus?: $Enums.MaritalStatus | null
    hasChildren?: boolean | null
    childrenCount?: number | null
    message?: string | null
    status?: $Enums.ListingApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingApplicationUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListingApplicationsNestedInput
  }

  export type ListingApplicationUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingApplicationUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    hasChildren?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childrenCount?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingApplicationStatusFieldUpdateOperationsInput | $Enums.ListingApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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