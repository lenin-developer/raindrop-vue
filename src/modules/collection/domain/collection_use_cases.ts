import type { Collection } from "./collection_entity"

export interface CollectionEntityRepository {
    createCollection(collection: Collection): Promise<void>,
    deleteCollection(id: number): Promise<void>,
    editCollection(collection: Collection): Promise<void>
    getCollectionsByWorkspace(): Promise<void>
    getAllCollections(): Promise<void>
}