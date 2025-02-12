export function getById(id: number) {
    return new Promise(resolve => setTimeout(() => {
        resolve({id: 1, name: 'Tommy'});
    }, 3000));
}

export function getList() {
    return new Promise(resolve => setTimeout(() => {
        resolve([{id: 1, name: 'Tommy'}, {id: 2, name: 'Bob'}]);
    }, 3000));
}
