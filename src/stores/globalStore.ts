import create from 'zustand';

interface Store {
    showDraw: boolean;
    toggleShowDraw: (value: boolean) => void;
    showOverlay: boolean;
    toggleShowOverlay: (value: boolean) => void;
}

// Specifically allowing any here: set funciton expects unknown
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): Store => ({
    // Global state to toggle the draw
    showDraw: false,
    toggleShowDraw: (value: boolean) => set(() => ({ showDraw: value })),

    // Global state to toggle the overlay
    showOverlay: false,
    toggleShowOverlay: (value: boolean) => set(() => ({ showOverlay: value }))
});

const useGlobalStore = create<Store>(store);

export default useGlobalStore;
