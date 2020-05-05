declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
declare module 'react-contentful-image';

declare module '*.svg' {
  const content: string;
  export default content;
}
