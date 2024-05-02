// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
	///// MOVING IN UI
	/// Activate flutter build
	const buildFlutter = vscode.commands.registerCommand('vscode-touchbar-extension.flutterbuild', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', true);
	});

	/// Closing build options
	const closeBuild = vscode.commands.registerCommand('vscode-touchbar-extension.closebuild', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', false);
	});

	/// Closing git
	const closeGit = vscode.commands.registerCommand('vscode-touchbar-extension.closegit', () => {
		vscode.commands.executeCommand('setContext', 'enableGit', false);
	});

	/// Close tools
	const closeTools = vscode.commands.registerCommand('vscode-touchbar-extension.closetools', () => {
		vscode.commands.executeCommand('setContext', 'enableTools', false);
	});

	/// Open tools	
	const openTools = vscode.commands.registerCommand('vscode-touchbar-extension.fluttertools', () => {
		vscode.commands.executeCommand('setContext', 'enableTools', true);
	});

	const git = vscode.commands.registerCommand('vscode-touchbar-extension.git', () => {
		vscode.commands.executeCommand('setContext', 'enableGit', true);
	});


	///// FLUTTER TOOLS
	/// Activate build single apk
	const buildSingleApk = vscode.commands.registerCommand('vscode-touchbar-extension.build.singleapk', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', false);
		const terminal = vscode.window.createTerminal('Flutter Build APK');
		terminal.show();
		terminal.sendText("flutter clean");
		terminal.sendText("flutter build apk --release");
	});

	/// Activate build single appbundle
	const buildSingleAppbundle = vscode.commands.registerCommand('vscode-touchbar-extension.build.singleappbundle', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', false);
		const terminal = vscode.window.createTerminal('Flutter Build Appbundle');
		terminal.show();
		terminal.sendText("flutter clean");
		terminal.sendText("flutter build appbundle --release");
	});

	/// Activate build split per abi
	const buildSplitABI = vscode.commands.registerCommand('vscode-touchbar-extension.build.splitabi', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', false);
		const terminal = vscode.window.createTerminal('Flutter Build ABI');
		terminal.show();
		terminal.sendText("flutter clean");
		terminal.sendText("flutter build apk --split-per-abi --release");
	});

	/// Activate flutter clean
	const cleanFlutter = vscode.commands.registerCommand('vscode-touchbar-extension.flutterclean', () => {
		const terminal = vscode.window.createTerminal('Flutter Clean Terminal');
		terminal.show();
		terminal.sendText("flutter clean");
	});

	/// Activate devtools
	const devtools = vscode.commands.registerCommand('vscode-touchbar-extension.devtools', () => {
		const terminal = vscode.window.createTerminal('Flutter DevTools Terminal');
		terminal.show();
		terminal.sendText("flutter pub global run devtools");

	});
	// Activate flutter pub get
	const flutterPubGet = vscode.commands.registerCommand('vscode-touchbar-extension.flutterpubget', () => {
		const terminal = vscode.window.createTerminal('Flutter Pub Get Terminal');
		terminal.show();
		terminal.sendText("flutter pub get");
	});

	///// FIREBASE TOOLS
	// Activate firebase deploy
	const firebaseDeploy = vscode.commands.registerCommand('vscode-touchbar-extension.firebasedeploy', () => {
		const terminal = vscode.window.createTerminal('Build Web and Deploy Firebase Terminal');
		terminal.show();
		terminal.sendText("flutter build web");
		terminal.sendText("firebase deploy --only hosting");
	});

	///// GIT TOOLS

	// Activate git commit 
	const commit = vscode.commands.registerCommand('vscode-touchbar-extension.gitcommit', () => {
		vscode.commands.executeCommand('git.commit');
		vscode.commands.executeCommand('setContext', 'enableGit', false);
	});

	/// Activate git push
	const push = vscode.commands.registerCommand('vscode-touchbar-extension.gitpush', () => {
		vscode.commands.executeCommand('git.push');
		vscode.commands.executeCommand('setContext', 'enableGit', false);
	});
	/// Activate git stash
	const stash = vscode.commands.registerCommand('vscode-touchbar-extension.gitstash', () => {
		vscode.commands.executeCommand('git.stash');
		vscode.commands.executeCommand('setContext', 'enableGit', false);
	});

	context.subscriptions.push(cleanFlutter, flutterPubGet, buildFlutter, buildSingleApk, buildSingleAppbundle, buildSplitABI, closeBuild, firebaseDeploy, git, closeGit, commit, push, stash, openTools, closeTools, devtools);
}

// this method is called when your extension is deactivated
export function deactivate() { }
