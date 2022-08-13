import { IContext } from "overmind";
import { state } from "./state";
import * as actions from "./actions";
import { createActionsHook, createStateHook } from "overmind-react";
import * as effects from "./effects";

export const config = {
  state,
  actions,
  effects,
};

export type Context = IContext<{
  state: typeof config.state;
  actions: typeof config.actions;
  effects: typeof config.effects;
}>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
