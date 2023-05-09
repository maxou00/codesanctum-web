/* eslint-disable @next/next/no-img-element */
import { CSSProperties, useMemo } from "react";
import { ChangeEvent, useCallback } from "react";
import { useRef } from "react";
import { MdAdd, MdClose, MdFileUpload } from "react-icons/md";
import { FcFile } from "react-icons/fc";

const styles: { [key: string]: CSSProperties } = {
  dropZone: {
    margin: "4px 8px",
    borderRadius: "4px",
    border: `1px solid #2196f3`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "24px",
  },
  fileRenderer: {
    width: "86px",
    height: "auto",
    objectFit: "contain",
    position: "relative",
  },
  iconClose: {
    background: "white",
    position: "absolute",
    top: "0",
    right: "0",
    transform: "translate(50%, -50%)",
  },
};

interface FileInputProps {
  maxFileCount?: number;
  accept: string | string[];
  files: File[];
  onChange?(files: File[]): any;
}

export function FileInput(props: FileInputProps) {
  const { files } = props;
  const hiddenInput = useRef<HTMLInputElement>();

  const setFiles = useCallback(
    (next: File[]) => {
      if (props.onChange) {
        props.onChange(next);
      }
    },
    [props]
  );

  const onAppendFile = useCallback(() => {
    if (hiddenInput.current) {
      hiddenInput.current.click();
    }
  }, [hiddenInput]);

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let inputFiles = [...files];
      let targetFiles = ev.target.files;

      if (!targetFiles) {
        return [];
      }

      for (let i = 0; i < targetFiles.length; i++) {
        if (props.maxFileCount && props.maxFileCount > inputFiles.length) {
          let file = targetFiles.item(i);
          if (file) {
            inputFiles.push(file);
          }
        } else {
          break;
        }
      }
      setFiles(inputFiles);
    },
    [files, setFiles, props]
  );

  const onRemoveFile = useCallback(
    (f: File) => {
      let next = files.filter((file) => file !== f);
      setFiles(next);
    },
    [files, setFiles]
  );

  return (
    <div>
      <div style={styles.dropZone}>
        {files.length === 0 && (
          <div onClick={onAppendFile}>
            <MdFileUpload size={64} color={`#2196f3`} />
          </div>
        )}
        {files.map((f, i) => {
          return (
            <div className="m-2" key={`${f.name}-${i}`}>
              <RenderFile file={f} onDelete={() => onRemoveFile(f)} />
            </div>
          );
        })}
        {props.maxFileCount &&
          files.length > 0 &&
          files.length < props.maxFileCount && (
            <button aria-label="add a file" onClick={onAppendFile}>
              <MdAdd size={18} />
            </button>
          )}
      </div>
      <input
        multiple={Boolean(props.maxFileCount && props.maxFileCount > 1)}
        accept={
          typeof props.accept === "string"
            ? props.accept
            : props.accept.join(",")
        }
        type="file"
        hidden
        ref={hiddenInput as any}
        onChange={onInputChange}
      />
    </div>
  );
}

interface RenderProps {
  file: File;
  onDelete?(): any;
}

function RenderFile(props: RenderProps) {
  const url = useMemo(() => {
    if (!props.file.type.match("^image")) {
      return "";
    }
    return URL.createObjectURL(props.file);
  }, [props]);

  return (
    <div style={styles.fileRenderer}>
      {url && <img src={url} width="100%" alt={props.file.name} />}
      {!url && (
        <div className="py-2">
          <FcFile size={40} />
        </div>
      )}
      <div className="my-2">
        <p
          style={{
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {props.file.name}
        </p>
      </div>
      {props.onDelete && (
        <button
          aria-label="delete file"
          style={styles.iconClose}
          onClick={props.onDelete}
        >
          <MdClose size={16} />
        </button>
      )}
    </div>
  );
}
