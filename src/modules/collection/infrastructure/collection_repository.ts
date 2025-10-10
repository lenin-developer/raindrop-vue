import type { Collection } from '../domain/collection_entity'
import type { CollectionEntityRepository } from '../domain/collection_use_cases'


export const CollectionRepository = (): CollectionEntityRepository => {
  return {
    createCollection: async (collection: Collection) => {
        // adapter
        // fetch
        
        // adapter
    },
    deleteCollection: async (id: number) => {},
    editCollection: async (collection: Collection) => {},
    getCollectionsByWorkspace: async () => {},
    getAllCollections: async () => {}
  }
}
