import { getPreferenceValues } from "@raycast/api";
import { spawnSync } from 'child_process';

const { aerospacePath } = getPreferenceValues();

export function run(path: string, args: string[]): { success: boolean; output: string; error?: string } {
  const proc = spawnSync(path, args);
  
  if (proc.error) {
    return { 
      success: false, 
      output: '', 
      error: `Command failed: ${proc.error.message}` 
    };
  }
  
  if (proc.status !== 0) {
    return { 
      success: false, 
      output: proc.stdout.toString(), 
      error: proc.stderr.toString() 
    };
  }

  return { 
    success: true, 
    output: proc.stdout.toString() 
  };
}

export function runFocusWindow(windowId: string): void {
	const result = run(aerospacePath, [
		'focus',
		'--window-id',
		windowId
	]);
	
	if (!result.success) {
		console.error('Failed to focus window:', result.error);
	}
}

export function runListWindows(): { success: boolean; output: string; error?: string } {
	return run(aerospacePath, [
		'list-windows',
		'--all',
		'--format',
		'%{window-id} %{app-name} %{window-title} %{workspace} %{app-bundle-id} %{app-bundle-path}',
		'--json',
	]);
}

export function runMoveWindowToWorkspace(windowId: string, workspaceId: string): void {
	const result = run(aerospacePath, [
		'move-node-to-workspace',
		'--window-id',
		windowId,
		workspaceId,
		'--focus-follows-window'
	]);
	
	if (!result.success) {
		console.error('Failed to move window:', result.error);
	}
}

export function runGetCurrentWorkspace(): { success: boolean; output: string; error?: string } {
	return run(aerospacePath, [
		'list-workspaces',
		'--focused',
	]);
}

