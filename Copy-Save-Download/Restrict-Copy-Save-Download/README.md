## React PPTX Editor \- Restricted Viewer Sample

This sample demonstrates how to configure the **Syncfusion React PPTX Editor** as a restricted presentation viewer in a secure environment. It disables common user actions such as copying, downloading, printing, and browser save/print shortcuts.

### Features

- Loads and displays PPTX presentations.
- Disables copying through editor commands using `enableCopy={false}`.
- Disables text selection using `enableTextSelection={false}`.
- Disables presentation export using `enableDownload={false}`.
- Disables print functionality using `enablePrint={false}`.
- Blocks native `Copy` and `Cut` operations.
- Blocks browser save (`Ctrl/Cmd + S`) and print (`Ctrl/Cmd + P`) shortcuts.
- Demonstrates how to hide ribbon commands such as **Copy**.

> **Note:** These restrictions help prevent content extraction from within the application. However, complete prevention of content capture is not possible in browser\-based applications, as users may still use external tools such as operating system screen\-capture utilities.

---

## Prerequisites

- Node.js 18\+
- React 18\+
- Syncfusion React PPTX Editor package

---

## Installation

Install the required packages:

```Shell
npm install
```

---

## Configuration Options

| Property | Description |
| --- | --- |
| `enableCopy={false}` | Disables copy operations provided by the PPTX Editor. |
| `enableTextSelection={false}` | Prevents users from selecting slide content. |
| `enableDownload={false}` | Disables the **File → Export** option. |
| `enablePrint={false}` | Disables the **File → Print** option. |

---

## Additional Restrictions

### Hide Copy Command

```Typescript
editor.hideRibbonItem(RibbonItemId.Copy);
```

### Hide Home Ribbon Tab

```Typescript
editor.hideRibbonTab(RibbonTabId.Home);
```

### Block Native Copy and Cut

```Typescript
onCopyCapture={blockClipboard}
onCutCapture={blockClipboard}
```

### Block Browser Save and Print Shortcuts

```Typescript
onKeyDownCapture={blockSaveAndPrint}
```

This prevents:

- `Ctrl + S` / `Cmd + S`
- `Ctrl + P` / `Cmd + P`

from triggering browser save or print dialogs.

---

## Running the Sample

Start the development server:

```Shell
npm run dev
```

Open the application in your browser and load a PPTX document to verify the restrictions.

---

## Expected Behavior

| Action | Result |
| --- | --- |
| Copy from ribbon | Disabled |
| Copy via context menu | Blocked |
| Copy via keyboard shortcuts | Blocked |
| Text selection | Disabled |
| Export/Download | Disabled |
| Print from application | Disabled |
| Ctrl/Cmd \+ S | Blocked |
| Ctrl/Cmd \+ P | Blocked |

---

## Security Considerations

The sample restricts content interactions within the application by disabling editor commands and intercepting browser events. While this helps enforce content protection requirements, browser\-based applications cannot completely prevent content capture through operating system\-level screenshot tools, screen recording software, or external devices.

