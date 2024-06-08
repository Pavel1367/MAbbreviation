/* eslint-disable */
interface ElectronAPI {
  receiveLog: (callback: (message: string) => void) => void;
}

interface Window {
  electron: ElectronAPI;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}
