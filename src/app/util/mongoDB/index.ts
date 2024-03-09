import {
  Db,
  MongoClient,
  ServerApiVersion,
  InsertOneResult,
  OptionalId,
} from "mongodb";

const uri = process.env.MONGODB_URI;
let db: Db;

const client = new MongoClient(uri!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function createUniqueIndex(
  collectionName: string,
  fieldName: string
): Promise<void> {
  const collection = getCollection<any>(collectionName);

  // Create a unique index on the specified field, to avoid duplication
  await collection.createIndex({ [fieldName]: 1 }, { unique: true });
}

export async function connectDatabase() {
  try {
    await client.connect();
    db = await client.db(process.env.MONGODB_NAME);

    // Create a unique index on the 'uniqueField' field in the 'your_collection_name' collection
    await createUniqueIndex(
      process.env.MONGODB_USER_COLLECTION_NAME!,
      process.env.MONGODB_USER_COLLECTION_NAME_UNIQUE_FIELD!
    );
  } catch (error) {
    console.error("connectDatabase ::", error);
    await client.close();
  }
}

export function getCollection<T extends Document>(collectionName: string) {
  return db.collection<T>(collectionName);
}

export async function insertDocument<T extends Document>(
  collectionName: string,
  document: OptionalId<T>
): Promise<InsertOneResult<T> | boolean> {
  try {
    const collection = getCollection<T>(collectionName);
    const options: { bypassDocumentValidation?: boolean } = {};
    if ("_id" in document && document._id === undefined) {
      options.bypassDocumentValidation = true;
    }
    const insertedData = await collection.insertOne(document as any, options);
    console.log("insertDocument ::", insertedData);
    return insertedData;
  } catch (error) {
    console.error("insertDocument error ::", error, (error as any).code);
    if ((error as any).code === 11000) {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
}
