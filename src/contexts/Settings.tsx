import { NetworkType } from "@airgap/beacon-sdk";
import constate from "constate";
import { useState } from 'react';

export enum Theme {
  Default,
  Light,
  Dark
}

const switch_theme = (t : Theme, defaultDark : boolean) : Theme => {
  switch (t) {
    case Theme.Default : return defaultDark ? Theme.Light : Theme.Dark
    case Theme.Light   : return Theme.Dark
    case Theme.Dark    : return Theme.Light
  }
}

export const [
  SettingsProvider,
  useTheme,
  useAppName,
  useEndpoint,
  useContractAddress,
  useNetwork,
] = constate(
  () => {
    const [settingState, setState] = useState({
      app_name        : 'User-Visits DAPP',
      endpoint        : 'https://ghostnet.ecadinfra.com',
      contract        : 'KT1DJFkky5RmqWETrC5tPoJZpKyovAn9kooR',
      network         :  NetworkType.GHOSTNET,
      theme           :  Theme.Default,
    });
    return { settingState };
  },
  v => v.settingState.theme,
  v => v.settingState.app_name,
  v => v.settingState.endpoint,
  v => v.settingState.contract,
  v => v.settingState.network,
);