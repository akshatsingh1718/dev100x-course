import { atom, selector } from "recoil";
import axios from "axios";

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector2",
  get: ({ get }) => {
    const nots = get(notificationsAtom);
    return nots.network + nots.jobs + nots.messaging + nots.notifications;
  },
});

export const notificationsAtom = atom({
  key: "notificationsAtom2",
  default: selector({
    key: "notificationsSelector2",
    get: async () => {
        await new Promise(r => setTimeout(r, 3000));
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});
