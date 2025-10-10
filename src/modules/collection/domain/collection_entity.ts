import type { Workspace } from "@/modules/workspace/domain/workspace_entity"

export type Collection = {
    id:number,
    workspace: Workspace
    name: string,
    icon: string,
}