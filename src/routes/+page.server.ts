import { count } from "./store";

export const actions = {
  default: async ({request}) => {
    const formData = await request.formData();
    const user = formData.get('username') as string;

    count.update((store) => {
      return {...store, user}
    })
  }
};