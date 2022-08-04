import { atom } from "recoil";

export const selectedChatState = atom({
    key: 'selectedChatState',
    default: {}
});

export const messagesList = atom({
    key: 'messagesList',
    default: {}
});