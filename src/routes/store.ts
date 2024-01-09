import { writable } from 'svelte/store';

export const count = writable(
  {
    flavor: 'none',
    user: 'tim'
  }
);