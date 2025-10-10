import type { Collection } from '../domain/collection_entity'
import type { CollectionEntityRepository } from '../domain/collection_use_cases'

const createCollection = async (repository: CollectionEntityRepository, collection: Collection) => {
  try {
    //validaciones
    const res = await repository.createCollection(collection)
    // guardar en store
  } catch (error) {
    //errores
  }
}

const deleteCollection = async (repository: CollectionEntityRepository, id: number) => {
    try {
        //validaciones
        const res = await repository.deleteCollection(id)
      } catch (error) {
        //errores
      }
}


const editCollection = async (repository: CollectionEntityRepository,  collection: Collection) => {
    try {
        //validaciones
        const res = await repository.editCollection(collection)
      } catch (error) {
        //errores
      }
}

const getCollectionsByWorkspace = async (repository: CollectionEntityRepository) => {
    try {
        //validaciones
        const res = await repository.getCollectionsByWorkspace()
      } catch (error) {
        //errores
      }
}

const getAllCollections = async (repository: CollectionEntityRepository) => {
    try {
        //validaciones
        const res = await repository.getAllCollections()
      } catch (error) {
        //errores
      }
}

export const collectionService = (repository: CollectionEntityRepository) => {
  return {
    createCollection: (collection: Collection) => createCollection(repository, collection),
    deleteCollection: (id: number) => deleteCollection(repository, id),
    editCollection: (collection: Collection) => editCollection(repository, collection),
    getCollectionsByWorkspace: () => getCollectionsByWorkspace(repository),
    getAllCollections: () => getAllCollections(repository)
  }
}
