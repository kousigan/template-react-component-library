// config.js
module.exports = {
    source: ["./style-dictionary/properties/**/*.json"],
    parsers: [{
        pattern: /\.json$/,
        parse: ({ filePath, contents }) => {
            console.log(filePath,contents)
          return JSON.parse(contents);
        }
      }],
    transform: {
      // Now we can use the transform 'myTransform' below
      myTransform: {
        type: 'name',
        transformer: (token) => token.path.join('_').toUpperCase()
      }
    },
    // Same with formats, you can now write them directly to this config
    // object. The name of the format is the key.
    format: {
      myFormat: ({dictionary, platform}) => {
        return dictionary.allTokens.map(token => `${token.name}: ${token.value}`).join('\n');
      }
    },
    platforms: {
        scss: {
            transformGroup: "css",
            buildPath: "./src/style-dictionary-dist/",
            prefix: "ink",
            files: [{
              destination: "variables.scss",
              format: "scss/variables"
            }]
          },
    }
  }