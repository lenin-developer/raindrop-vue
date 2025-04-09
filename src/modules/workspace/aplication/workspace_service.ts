import type { Workspace } from '../domain/workspace_entity'
import type { WorkspaceEntityRepository } from '../domain/workspace_use_cases'

const createWorkspace = async (repository: WorkspaceEntityRepository, workspace: Workspace) => {
  repository.createWorkspace(workspace)
}
const deleteWorkspace = async (repository: WorkspaceEntityRepository, id: number) => {
  repository.deleteWorkspace(id)
}
const editWorkspace = async (repository: WorkspaceEntityRepository, workspace: Workspace) => {
  repository.editWorkspace(workspace)
}
const setWorkspaceAsDefault = async (repository: WorkspaceEntityRepository, id: number) => {
  repository.setWorkspaceAsDefault(id)
}
const getAllWorkspace = async (repository: WorkspaceEntityRepository) => {
  repository.getAllWorkspace()
}

export const WorspaceService = (repository: WorkspaceEntityRepository) => {
  return {
    createWorkspace: (workspace: Workspace) => createWorkspace(repository, workspace),
    deleteWorkspace: (id: number) => deleteWorkspace(repository, id),
    editWorkspace: (workspace: Workspace) => editWorkspace(repository, workspace),
    setWorkspaceAsDefault: (id: number) => setWorkspaceAsDefault(repository,id),
    getAllWorkspace: () => getAllWorkspace(repository)
  }
}
