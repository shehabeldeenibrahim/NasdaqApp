import { IContext } from "overmind";
import { state } from "./state";
import * as actions from "./actions";
import { createActionsHook, createStateHook } from "overmind-react";

export const config = {
  state,
  actions,
};

export type Context = IContext<{
  state: typeof config.state;
  actions: typeof config.actions;
}>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
