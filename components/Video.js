import { createElement } from 'react-native-web';

const Video = ({ source, poster }) => {
  const attrs = {
    src: source,
    poster: poster,
    controls: 'controls',
  };
  return createElement('video', attrs);
};
export default Video;
