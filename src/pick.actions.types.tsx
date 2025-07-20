import { Window, Workspaces } from "./types";

interface ActionProps {
	item: Window;
	revalidateWorkspaces: () => Promise<Workspaces | null>;
}

export type PickEmptyWorkspacesActionProps = ActionProps & {
	emptyWorkspaces: string[];
};

export type PickAnyWorkspaceActionProps = ActionProps;

export type MoveWindowActionProps = Omit<ActionProps, "revalidateWorkspaces">;

export type MoveWindowToCurrentActionProps = ActionProps;
