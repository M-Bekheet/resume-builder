import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "./features/resume/personalDetailsSlice";
import technicalSkillsReducer from "./features/resume/technicalSkillsSlice";
import employmentsReducer from "./features/resume/employmentsSlice";
import certificatesReducer from "./features/resume/certificatesSlice";
import educationsReducer from "./features/resume/educationSlice";
import sectionsOrderReducer from "./features/resume/sectionOrderSlice";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const rootReducer = combineSlices({
  personalDetails: personalDetailsReducer,
  technicalSkills: technicalSkillsReducer,
  employments: employmentsReducer,
  certificates: certificatesReducer,
  educations: educationsReducer,
  sectionsOrder: sectionsOrderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore();
  } else {
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

export const persistor = persistStore(makeStore());
