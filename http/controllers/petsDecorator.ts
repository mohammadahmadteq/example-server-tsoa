export function Get(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function(...args: any[]) {
        const result = await originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}

export function Post(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function(...args: any[]) {
        const result = await originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}