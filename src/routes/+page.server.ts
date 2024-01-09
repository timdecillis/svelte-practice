import { count } from "./store";

export const actions = {
  user: async ({request}) => {
    debugger;
    const formData = await request.formData();
    const user = formData.get('newUser') as string;

    count.update((store) => {
      return {...store, user: 'foobar'};
    })
  },
  flavor: async ({request}) => {
    const formData = await request.formData();
    const flavor = formData.get('flavor') as string;

    count.update((store) => {
      return {...store, flavor};
    })
  }
};