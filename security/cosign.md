# Grype

[grype](https://github.com/anchore/grype?tab=readme-ov-file#installation)

### Command

```sh
cosign sign-blob --yes --output-signature sbom.sig --output-certificate sbom.cert sbom.json
```

### Output

```sh
Using payload from: sbom.json
Generating ephemeral keys...
Retrieving signed certificate...

        The sigstore service, hosted by sigstore a Series of LF Projects, LLC, is provided pursuant to the Hosted Project Tools Terms of Use, available at https://lfprojects.org/policies/hosted-project-tools-terms-of-use/.
        Note that if your submission includes personal data associated with this signed artifact, it will be part of an immutable record.
        This may include the email address associated with the account with which you authenticate your contractual Agreement.
        This information will be used for signing this artifact and will be stored in public transparency logs and cannot be removed later, and is subject to the Immutable Record notice at https://lfprojects.org/policies/hosted-project-tools-immutable-records/.

By typing 'y', you attest that (1) you are not submitting the personal data of any other person; and (2) you understand and agree to the statement and the Agreement terms at the URLs listed above.
Your browser will now be opened to:
https://oauth2.sigstore.dev/auth/auth?access_type=online&client_id=sigstore&code_challenge=034FhDaEyooD1G9T5vBd-2UkPytXrvYd7c9PPIEM2Bg&code_challenge_method=S256&nonce=2xEg9FdU7k9Wx260wILcEJQzy1r&redirect_uri=http%3A%2F%2Flocalhost%3A39825%2Fauth%2Fcallback&response_type=code&scope=openid+email&state=2xEg9Dt01yVtQqUch3Go8zzlQwo
Successfully verified SCT...
tlog entry created with index: 214592698
Wrote signature to file sbom.sig
Wrote certificate to file sbom.cert
```
