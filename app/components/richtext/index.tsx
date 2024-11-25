import { useRef, useEffect, memo, useState } from 'react';
import 'jodit/es2015/jodit.min.css';

import { LinkPlugin } from './plugins/link';

import styles from './jodit.module.css';
import { Textarea } from '@/components/ui/textarea';

interface IRichtext {
  label: string;
  onChange: (htmlOutput: string) => void;
  value: string;
  name: string;
}

export const RichtextEditor = memo(({ label, onChange, value }: IRichtext) => {
  const editorContainerRef = useRef<HTMLTextAreaElement | null>(null);
  console.log('value', value)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);
  const [editorInstanceCreated, setEditorInstanceCreated] = useState(false);

  useEffect(() => {
    if (editorContainerRef.current) {
      const initEditor = async () => {
        const { Jodit } = await import('jodit');
        const editor = Jodit.make(editorContainerRef.current as HTMLTextAreaElement, {
          showCharsCounter: false,
          showWordsCounter: false,
          showXPathInStatusbar: false,
          buttons: ['bold', 'italic', 'strikethrough', 'link', 'ul', 'ol', 'undo', 'redo'],
          disablePlugins:
            'add-new-line,print,preview,table,table-keyboard-navigation,select-cells,resize-cells,file,video,media,image,image-processor,image-properties,xpath,tab,stat,search,powered-by-jodit,mobile,justify,inline-popup,indent,iframe,fullsize',
          useSearch: false,
          askBeforePasteHTML: false,
          askBeforePasteFromWord: false,
          defaultActionOnPaste: 'insert_as_html',
          maxHeight: 200,
          link: LinkPlugin,
        });
        editor.value = value;
        editorRef.current = editor;
        setEditorInstanceCreated(true);
      };
      initEditor();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editorRef.current && editorInstanceCreated) {
      editorRef.current.value = value;
    }
  }, [value, editorInstanceCreated]);

  useEffect(() => {
    if (editorRef.current && editorInstanceCreated) {
      editorRef.current.events.on('change', onChange);
    }
  }, [onChange, editorInstanceCreated]);

  return (
    <div className={`${styles.editor_wrapper} mb-4`}>

      <Textarea
        ref={editorContainerRef}
        className={`p-4 rounded-md min-h-[200px] min-w-full bg-[rgba(0,0,0,0.06)]`}
      ></Textarea>
    </div>
  );
});

RichtextEditor.displayName = 'RichtextEditor';
