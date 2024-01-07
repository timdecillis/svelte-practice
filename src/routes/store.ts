import { writable } from 'svelte/store';

export const count = writable(
  {
    count: 0,
    user: 'tim'
  }
);