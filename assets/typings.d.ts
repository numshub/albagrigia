interface Color {
    code: string,
    rgb_approx: string,
    rgb_hex: string,
    name: string
}

declare module "colors.json" {
    const value: { [id: string]: Color };
    export default value;
}

declare module "default_colors.json" {
    const value: { [id: string]: string };
    export default value;
}