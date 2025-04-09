import type { WorkspaceEntityRepository } from "../domain/workspace_use_cases";
import type { Workspace } from '../domain/workspace_entity';


const createWorkspace = async (workspace: Workspace) => {

}

const deleteWorkspace = async (id: number) =>{

}

const editWorkspace = async (workspace: Workspace) => {

}

const setWorkspaceAsDefault = async (id:number) => {

}

const getAllWorkspace = async() =>{

}

export const WorkspaceRepository = (): WorkspaceEntityRepository => {
    return {
        createWorkspace,
        deleteWorkspace,
        editWorkspace,
        setWorkspaceAsDefault,
        getAllWorkspace
    }
}