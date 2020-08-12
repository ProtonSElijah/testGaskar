export function create(name, duration, leader, administrator) {
    return {
        type: 'CREATE',
        name,
        duration,
        leader,
        administrator
    };
}

export function toOpen() {
    return {
        type: 'OPEN',
    };
}

export function toClose() {
    return {
        type: "CLOSE",
    }
}
