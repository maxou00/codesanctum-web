
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-test.codesanctum.org/graphql",
  documents: "core/**/*",
  generates: {
    "core/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
