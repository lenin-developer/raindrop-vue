import type { Workspace } from './workspace_entity';

export interface WorkspaceEntityRepository {
    createWorkspace(workspace: Workspace): Promise<void>,
    deleteWorkspace(id: number): Promise<void>,
    editWorkspace(workspace: Workspace): Promise<void>,
    setWorkspaceAsDefault(id:number): Promise<void>,
    getAllWorkspace(): Promise<void>
}

