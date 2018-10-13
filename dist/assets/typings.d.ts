interface Color {
    code: string,
    rgb_approx: string,
    rgb_hex: string,
    name: string
}

declare module "*.json" {
    const value: { [id: string]: Color };
    export default value;
}