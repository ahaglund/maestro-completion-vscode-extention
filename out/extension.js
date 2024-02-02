"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const commands = getCommands();
    const provider = vscode.languages.registerCompletionItemProvider('yaml', {
        provideCompletionItems(document, position, token, context) {
            const completionItems = [];
            for (let command of commands) {
                const completionItem = new vscode.CompletionItem(command.name);
                completionItem.insertText = new vscode.SnippetString(command.insertText);
                completionItem.documentation = new vscode.MarkdownString(command.documentation);
                completionItems.push(completionItem);
            }
            return completionItems;
        }
    }, "-");
    context.subscriptions.push(provider);
}
exports.activate = activate;
function getCommands() {
    return [
        {
            name: " addMedia",
            insertText: " addMedia: \n    - ",
            documentation: "Allows you to add media to the device's gallery for both Android and iOS, making them accessible for use in your application flow."
        },
        {
            name: " assertVisible",
            insertText: " assertVisible: ",
            documentation: "To assert whether an element is visible. This command will wait for view to appear if it is not visible yet."
        },
        {
            name: " assertNotVisible",
            insertText: " assertNotVisible: ",
            documentation: "To assert whether an element is not visible. This command will wait for view to disappear if it is currently visible."
        },
        {
            name: " assertTrue",
            insertText: " assertTrue: \$\{${1}\}",
            documentation: "Asserts whether given value is either true or non-empty (or truthy in Javascript terms)."
        },
        {
            name: " back (Android only)",
            insertText: " back",
            documentation: "The following command navigates user to the previous screen (Android-only at the moment)."
        },
        {
            name: " clearKeychain (ios only)",
            insertText: " clearKeychain",
            documentation: "Clears the entire iOS keychain (not applicable on Android)."
        },
        {
            name: " clearState",
            insertText: " clearState",
            documentation: "Clears the application state."
        },
        {
            name: " copyTextFrom",
            insertText: " copyTextFrom:\n    id: ${1}",
            documentation: "You can copy text from an element and save it in-memory, to paste later with 'pasteText'. To find the element you wish to copy text from you can use Selectors. For a full list of what selectors are available, please refer to the Selectors page."
        },
        {
            name: " evalScript",
            insertText: " evalScript: \$\{${1}\}",
            documentation: "Allows you to specify JavaScript directly in your Maestro flow."
        },
        {
            name: " eraseText",
            insertText: " eraseText",
            documentation: "The eraseText command removes characters from the currently selected text field (if any) and can be used as such."
        },
        {
            name: " extendedWaitUntil (visible)",
            insertText: " extendedWaitUntil:\n    visible: ${1}\n    timeout: ${2} # Timeout in milliseconds",
            documentation: "Waits until an element becomes visible. Fails if the element is not visible after the timeout expires. This command will complete as soon as element becomes visible and is not going to wait for timeout to expire."
        },
        {
            name: " extendedWaitUntil (notVisible)",
            insertText: " extendedWaitUntil:\n    notVisible: ${1}\n    timeout: ${2} # Timeout in milliseconds",
            documentation: "Waits until an element disappears. Fails if the element is visible after the timeout expires. This command will complete as soon as element disappears and is not going to wait for timeout to expire."
        },
        {
            name: " hideKeyboard",
            insertText: " hideKeyboard",
            documentation: "Hides the software keyboard. Note: on iOS, hideKeyboard can be flaky. Read more here: https://maestro.mobile.dev/troubleshooting/known-issues#ios-hidekeyboard-flaky"
        },
        {
            name: " id",
            insertText: "  id: ",
            documentation: ""
        },
        {
            name: " inputText",
            insertText: " inputText: ",
            documentation: "Inputs text (regardless of whether any text field is currently focused or not)"
        },
        {
            name: " inputRandomEmail",
            insertText: " inputRandomEmail",
            documentation: "Inputs a random Email address (regardless of whether any text field is currently focused or not)"
        },
        {
            name: " inputRandomPersonName",
            insertText: " inputRandomPersonName",
            documentation: "Inputs a random person name (regardless of whether any text field is currently focused or not)"
        },
        {
            name: " inputRandomNumber",
            insertText: " inputRandomNumber",
            documentation: "Inputs a random integer number (regardless of whether any text field is currently focused or not)"
        },
        {
            name: " inputRandomText",
            insertText: " inputRandomText",
            documentation: "Inputs a random unstructured text (regardless of whether any text field is currently focused or not)"
        },
        {
            name: " launchApp",
            insertText: " launchApp",
            documentation: "Launches the app under test."
        },
        {
            name: " openLink",
            insertText: " openLink: ",
            documentation: "Opens a link on a device (i.e. a deep link)"
        },
        {
            name: " pressKey",
            insertText: " pressKey: ${1|Enter,Lock,Home,Backspace,Volume up,Volume down,Back,Power|}",
            documentation: "Allows you to press a set of special keys"
        },
        {
            name: " pasteText",
            insertText: " pasteText",
            documentation: "Paste any text copied with copyTextFrom into the currently focused field. Note: make sure your text field is in focus before using this command."
        },
        {
            name: " repeat",
            insertText: " repeat:\n    ${1|times: ,while:\n |} ${3}\n    commands:\n      - ",
            documentation: "Paste any text copied with copyTextFrom into the currently focused field. Note: make sure your text field is in focus before using this command."
        },
        {
            name: " notVisible",
            insertText: "notVisible: ",
            documentation: ""
        },
        {
            name: " runFlow",
            insertText: " runFlow:${1| ,\n    file:\n    env:\n|}",
            documentation: "If you'd like to avoid duplication of code or otherwise modularize your Flow files, you can use the runFlow command to run commands from another file."
        },
        {
            name: " runScript",
            insertText: " runScript:${1| ,\n    file:\n    env:\n      |}",
            documentation: "Runs a provided JavaScript file."
        },
        {
            name: " scroll",
            insertText: " scroll",
            documentation: "To do a simple vertical scroll you can simply run this command."
        },
        {
            name: " scrollUntilVisible",
            insertText: " scrollUntilVisible:\n    element:",
            documentation: "To scroll towards a direction until an element becomes visible in the view hierarchy, use this command"
        },
        {
            name: " setLocation",
            insertText: " setLocation: \n    latitude: ${1:number}\n    longitude: ${2:number}",
            documentation: "Applies a mock geolocation to the device."
        },
        {
            name: " startRecording",
            insertText: " startRecording: ${1:name}",
            documentation: "Starts a screen recording"
        },
        {
            name: " stopApp",
            insertText: " stopApp",
            documentation: "Stops current application if it is running."
        },
        {
            name: " stopRecording",
            insertText: " stopRecording: ${1:name}",
            documentation: "Stops a running screen recording"
        },
        {
            name: " swipe (percentage)",
            insertText: " swipe:\n    start: ${1:width}%, ${2:height}%\n    end: ${3:width}%, ${4:height}%$0",
            documentation: "You can specify start and end coordinates in percentages to make the swipe gesture consistent across different screen dimensions"
        },
        {
            name: " swipe (direction)",
            insertText: " swipe: ${1|LEFT,RIGHT,DOWN,UP|}",
            documentation: "Swiping in RIGHT, LEFT, UP, or DOWN directions."
        },
        {
            name: " swipe (elements)",
            insertText: " swipe: \n    id: ${1:id}\n    direction: ${2|LEFT,RIGHT,DOWN,UP|}",
            documentation: "You can specify elements as a starting point for swipe commands. It will swipe from the middle of the element in the direction you specify."
        },
        {
            name: " swipe (coordinates)",
            insertText: " swipe: \n    start: ${1:x}, ${2:y}\n    end: ${3:x}, ${4:y}$0",
            documentation: "You can specify start and end points for the swipe to have more control."
        },
        {
            name: " takeScreenshot",
            insertText: " takeScreenshot: ${1:filename_without_extension}",
            documentation: "Saves a screenshot in a PNG file"
        },
        {
            name: " tapOn",
            insertText: " tapOn:${1| ,\n    id: |}",
            documentation: "Taps an element on the screen"
        },
        {
            name: " doubleTapOn",
            insertText: " doubleTapOn:${1| ,\n    id: |}",
            documentation: "It will double tap on a selected element or point."
        },
        {
            name: " travel",
            insertText: " travel:\n    points:\n      - ${1:lat},${2:long}\n      - ${3:lat},${4:long}\n      - ${5:lat},${6:long}\n      - ${7:lat},${8:long}\n    speed: ${0:number}",
            documentation: "The travel command can be used to mock the motion of the user, by specifying a set of points (lat/long coordinates) and a speed."
        },
        {
            name: " true",
            insertText: " true: ",
            documentation: ""
        },
        {
            name: " waitForAnimationToEnd",
            insertText: " waitForAnimationToEnd ${1| ,:\n    timeout: |}",
            documentation: "Waits until an ongoing animation/video is fully finished and screen becomes static."
        },
    ];
}
//# sourceMappingURL=extension.js.map