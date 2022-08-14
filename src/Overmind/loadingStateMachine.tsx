import { statemachine } from "overmind/lib/statemachine";

export type States =
  | {
      current: "IDLE";
    }
  | {
      current: "LOADING";
    }
  | {
      current: "REFRESH";
    };

export type Events =
  | {
      type: "FETCH";
    }
  | {
      type: "REFRESH";
    }
  | {
      type: "ERROR";
    }
  | {
      type: "SUCCESS";
    };
type BaseState = {
  loading: boolean;
};
export const loading = statemachine<States, Events>({
  IDLE: {
    FETCH: () => ({ current: "LOADING" }),
  },
  LOADING: {
    ERROR: () => ({ current: "REFRESH" }),
    SUCCESS: () => ({ current: "IDLE" }),
  },
  REFRESH: {
    REFRESH: () => ({
      current: "LOADING",
    }),
  },
});
// export type LoadingMachine = StateMachine<States, Events, BaseState>;
