declare module '*.module.scss' {
    const content: Record<string, string>;
    export = content;
}

declare module '*.jpg' {
    const file_name: string;
    export default file_name;
}
