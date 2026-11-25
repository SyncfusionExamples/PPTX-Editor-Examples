import { useEffect, useRef, type ClipboardEvent, type KeyboardEvent } from 'react';
import {
  PptxEditorComponent,
  Toolbar,
  ThumbnailView,
  Magnification,
  Navigation,
  SlideShow,
  RibbonItemId,
  RibbonTabId,
  Inject
} from '@syncfusion/ej2-react-pptxeditor';

// Block copy and cut.
const blockClipboard = (event: ClipboardEvent<HTMLDivElement>): void => {
  event.preventDefault();
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
};

// Block Ctrl/Cmd+S and Ctrl/Cmd+P.
const blockSaveAndPrint = (event: KeyboardEvent<HTMLDivElement>): void => {
  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && (key === 's' || key === 'p')) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }
};

function App() {
  const editorRef = useRef<PptxEditorComponent | null>(null);

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) {
      return;
    }

    // Hide Copy on the Home tab.
    editor.hideRibbonItem(RibbonItemId.Copy);

    // Hide the Home tab
    //  editor.hideRibbonTab(RibbonTabId.Home);
  }, []);

  return (
    <div
      className='control-section'
      onCopyCapture={blockClipboard}
      onCutCapture={blockClipboard}
      onKeyDownCapture={blockSaveAndPrint}
    >
      {/*
        PptxEditorComponent properties:
        enableTextSelection={false} disables text selection.
        enableDownload={false} disables File -> Export.
        enableCopy={false} disables copying.
        documentPath specifies the PPTX file to load.
      */}
      <PptxEditorComponent
        ref={editorRef}
        id='editor'
        enableTextSelection={false}
        enableDownload={false}
        enableCopy={false}
        documentPath='/documents/Sample.pptx'
      >
        {/* Inject modules except Print disables File -> Print. */}
        <Inject services={[Toolbar, ThumbnailView, Magnification, Navigation, SlideShow]} />
      </PptxEditorComponent>
    </div>
  );
}

export default App;
