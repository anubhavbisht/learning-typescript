type TStore = Record<string, number>
export const storeInventory: TStore = {};

// Adding products and their quantities to the inventory.
storeInventory.apple = 50;
storeInventory.banana = 100;
storeInventory.orange = 75;

// Alternatively, you could use bracket notation:
// storeInventory["apple"] = 50;
// storeInventory["banana"] = 100;
// storeInventory["orange"] = 75;