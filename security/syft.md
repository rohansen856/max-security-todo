# Syft

[syft](https://github.com/anchore/syft)

### Command

```sh
syft dir:./ -o json > sbom.json
```

### Output

```sh
 ✔ Indexed file system                                                                                                                                                            .
 ✔ Cataloged contents                                                                                              cdb4ee2aea69cc6a83331bbe96dc2caa9a299d21329efb0336fc02a82e1839a8
   ├── ✔ Packages                        [85 packages]
   ├── ✔ Executables                     [0 executables]
   ├── ✔ File metadata                   [1 locations]
   └── ✔ File digests                    [1 files]
[0000]  WARN no explicit name and version provided for directory source, deriving artifact ID from the given path (which is not ideal)
```
