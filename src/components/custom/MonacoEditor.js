import Editor from "@monaco-editor/react";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import React, { useCallback, useState } from "react";

export const MonacoEditor = (props) => {
  const { value, defaultValue, path, language, onChange } = props;
  const [code, setCode] = useState(defaultValue);

  const reformat = useCallback(
    (path, code) => {
      try {
        const formattedCode = prettier.format(code, {
          parser: language === "json" ? "json" : "babel",
          plugins: [parserBabel],
        });
        updateCode(path, formattedCode);
      } catch (e) {
        console.log(e);
      }
    },
    [updateCode]
  );

  const updateCode = useCallback(
    (path, code) => {
      // cache.localStorageSet(
      //   StorageDomain,
      //   {
      //     path,
      //     type: StorageType.Code,
      //   },
      //   {
      //     code,
      //     time: Date.now(),
      //   }
      // );
      setCode(code);
      onChange(code);
    },
    [setCode]
  );

  return (
    <Editor
      defaultValue={defaultValue}
      path={path}
      value={value}
      height={"100%"}
      defaultLanguage={language}
      onChange={(code) => updateCode(path, code)}
      wrapperProps={{
        onBlur: () => reformat(path, code),
      }}
    />
  );
};
