// 참고 : https://github.com/emotion-js/emotion/issues/1123

const emotionPresetOptions = {};

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
    undefined,
    emotionPresetOptions
);

module.exports = {
    babel: {
        plugins: [...emotionBabelPreset.plugins],
    },
};
