# Grype

[grype](https://github.com/anchore/grype?tab=readme-ov-file#installation)

### Command

```sh
grype dir:./
```

### Output

```sh
 ✔ Indexed file system                                                                                                                                                            .
 ✔ Vulnerability DB                [updated]
 ✔ Cataloged contents                                                                                              cdb4ee2aea69cc6a83331bbe96dc2caa9a299d21329efb0336fc02a82e1839a8
   ├── ✔ Packages                        [85 packages]
   ├── ✔ Executables                     [0 executables]
   ├── ✔ File metadata                   [1 locations]
   └── ✔ File digests                    [1 files]
 ✔ Scanned for vulnerabilities     [0 vulnerability matches]
   ├── by severity: 0 critical, 0 high, 0 medium, 0 low, 0 negligible
   └── by status:   0 fixed, 0 not-fixed, 0 ignored
[0000]  WARN no explicit name and version provided for directory source, deriving artifact ID from the given path (which is not ideal)
No vulnerabilities found
```

### Command

```sh
grype sbom:syft.json
```

### Output

```sh
 ✔ Scanned for vulnerabilities     [0 vulnerability matches]
   ├── by severity: 0 critical, 0 high, 0 medium, 0 low, 0 negligible
   └── by status:   0 fixed, 0 not-fixed, 0 ignored
No vulnerabilities found
```
