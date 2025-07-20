export type Window = {
	"app-name": string;
	"window-id": string;
	"window-title": string;
	"workspace": string;
	"app-bundle-id": string;
	"app-bundle-path": string;
};

export type Workspace = {
	windows: Array<Window>;
};

export type Workspaces = Array<Workspace & { id: string }>;

export type Preferences = {
	aerospacePath: string;
}
