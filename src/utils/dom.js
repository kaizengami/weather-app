export const toHtml = string => {
    const template = document.createElement('template');
    template.innerHTML = string.trim();

    return template.content;
};

export const clearChildren = node => {
    node.innerHTML = '';
    return node;
};

export const append = (node, child) => {
    if (Array.isArray(child)) {
        node.append(...child);
    } else {
        node.append(child);
    }

    return node;
};

export const bindAll = (context, ...names) => {
    names.forEach(name => {
        if (typeof context[name] === 'function') {
            context[name] = context[name].bind(context);
        } else {
            throw Error(
                `Expected function ${name}. Instead received: ${typeof context[name]}`
            );
        }
    });
};
