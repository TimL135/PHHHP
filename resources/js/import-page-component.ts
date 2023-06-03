export function importPageComponent(name: string, pages: Record<string, any>) {
    for (const path in pages) {
        if (name.includes('::') && path.toLowerCase().includes(`modules/${name.split('::')[0].toLowerCase()}`)) {
            if (path.endsWith(`${name.split("::")[1].replaceAll('.', '/')}.vue`)) {
                return typeof pages[path] === 'function' ? pages[path]() : pages[path];
            }
        } else if (path.endsWith(`${name.replaceAll('.', '/')}.vue`)) {
            return typeof pages[path] === 'function' ? pages[path]() : pages[path];
        }
    }

    throw new Error(`Page not found: ${name}`);
}
