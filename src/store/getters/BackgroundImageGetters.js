export default {
  backgroundStyle(state) {
    if (state.backgroundImageUrl === undefined) {
      return;
    }
    const reqUrl = require(`./../../assets/bg-images/${state.backgroundImageUrl}.jpg`);
    return `--bg-image: url(${reqUrl})`;
  },
};
