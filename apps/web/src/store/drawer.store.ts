import { create } from "zustand";

export type DrawerView =
  | "workflow"
  | "execution"
  | "schedule"
  | "connection"
  | "plugin"
  | null;

interface DrawerStore {
  open: boolean;

  view: DrawerView;

  width: number;

  openDrawer(view: DrawerView): void;

  closeDrawer(): void;

  toggleDrawer(view: DrawerView): void;

  setWidth(width: number): void;
}

export const useDrawerStore = create<DrawerStore>((set, get) => ({
  open: false,

  view: null,

  width: 420,

  openDrawer(view) {
    set({
      open: true,
      view,
    });
  },

  closeDrawer() {
    set({
      open: false,
      view: null,
    });
  },

  toggleDrawer(view) {
    const state = get();

    if (state.open && state.view === view) {
      set({
        open: false,
        view: null,
      });

      return;
    }

    set({
      open: true,
      view,
    });
  },

  setWidth(width) {
    set({
      width: Math.min(
        600,
        Math.max(320, width),
      ),
    });
  },
}));