import postcssPresetEnv from 'postcss-preset-env';

export default () => {
  return {
    plugins: [
      postcssPresetEnv({
        stage: 2,
        // features: {
        //   'nesting-rules': true,
        //   'custom-media-queries': true
        //   /**
        //    * "blank-pseudo-class": false,
        //    * "focus-visible-pseudo-class": false,
        //    * "focus-within-pseudo-class": false,
        //    * "has-pseudo-class": false,
        //    * "prefers-color-scheme-query": false
        //    */
        // }
      })
    ]
  }
}
