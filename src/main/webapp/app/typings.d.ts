declare const VERSION: string;
declare const SERVER_API_URL: string;
declare const DEVELOPMENT: string;

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@product/entities-routes' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@product/entities-menu' {
  const _default: () => JSX.Element;
  export default _default;
}
