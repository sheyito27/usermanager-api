// Molde para crear repositorios

export function createRepository<T extends { id: number }>(initialData: T[]) {
    let data = initialData;
  
    return {

        findAll: () => data,
        
        findOne: (id: number) => {
            return data.find(item => item.id === id);
        },

        addOne: (newItem: T) => {
            data.push(newItem);
            return newItem;

        },

  
        updateOne: (id: number, updates: Partial<T>) => {
            const item = data.find(i => i.id === id);
            if (!item) return null;
            Object.assign(item, updates);
            return item;
        },


        deleteOne: (id: number) => {
            const index = data.findIndex(i => i.id === id);
            if (index === -1) return null;
            return data.splice(index, 1)[0];

        },
    };
}