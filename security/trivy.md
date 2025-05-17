# Trivy

[trivy](https://trivy.dev/)

### Commmand

```sh
trivy fs --scanners vuln,secret,misconfig /path/to/myproject
```

### Output

```sh
2025-05-17T22:27:41+05:30       INFO    [vuln] Vulnerability scanning is enabled
2025-05-17T22:27:41+05:30       INFO    [misconfig] Misconfiguration scanning is enabled
2025-05-17T22:27:43+05:30       INFO    [secret] Secret scanning is enabled
2025-05-17T22:27:43+05:30       INFO    [secret] If your scanning is slow, please try '--scanners vuln' to disable secret scanning
2025-05-17T22:27:43+05:30       INFO    [secret] Please see also https://trivy.dev/v0.62/docs/scanner/secret#recommendation for faster secret detection
2025-05-17T22:27:43+05:30       INFO    Number of language-specific files       num=1
2025-05-17T22:27:43+05:30       INFO    [npm] Detecting vulnerabilities...
2025-05-17T22:27:43+05:30       INFO    Detected config files   num=1

Report Summary

┌───────────────────┬────────────┬─────────────────┬─────────┬───────────────────┐
│      Target       │    Type    │ Vulnerabilities │ Secrets │ Misconfigurations │
├───────────────────┼────────────┼─────────────────┼─────────┼───────────────────┤
│ package-lock.json │    npm     │        0        │    -    │         -         │
├───────────────────┼────────────┼─────────────────┼─────────┼───────────────────┤
│ Dockerfile        │ dockerfile │        -        │    -    │         2         │
└───────────────────┴────────────┴─────────────────┴─────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


Dockerfile (dockerfile)

Tests: 28 (SUCCESSES: 26, FAILURES: 2)
Failures: 2 (UNKNOWN: 0, LOW: 1, MEDIUM: 0, HIGH: 1, CRITICAL: 0)

AVD-DS-0002 (HIGH): Specify at least 1 USER command in Dockerfile with non-root user as argument
══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
Running containers with 'root' user can lead to a container escape situation. It is a best practice to run containers as non-root users, which can be done by adding a 'USER' statement to the Dockerfile.

See https://avd.aquasec.com/misconfig/ds002
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────


AVD-DS-0026 (LOW): Add HEALTHCHECK instruction in your Dockerfile
══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
You should add HEALTHCHECK instruction in your docker container images to perform the health check on running containers.

See https://avd.aquasec.com/misconfig/ds026
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
```
