// Custom module so there is not longer an error
// when importing SVG in typescript to use with webpack
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
// Allow import of js files
declare module 'react-swipeable-views';
declare module 'react-swipeable-views-utils';
