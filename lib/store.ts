import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialog/dialogSlice";
import certificatesReducer from "./features/resume/certificatesSlice";
import educationsReducer from "./features/resume/educationSlice";
import employmentsReducer from "./features/resume/employmentsSlice";
import personalDetailsReducer from "./features/resume/personalDetailsSlice";
import sectionsOrderReducer from "./features/resume/sectionOrderSlice";
import technicalSkillsReducer from "./features/resume/technicalSkillsSlice";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { PersistConfig, persistReducer, persistStore } from "redux-persist";

const rootReducer = combineSlices({
  personalDetails: personalDetailsReducer,
  technicalSkills: technicalSkillsReducer,
  employments: employmentsReducer,
  certificates: certificatesReducer,
  educations: educationsReducer,
  sectionsOrder: sectionsOrderReducer,
  dialog: dialogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  blacklist: ["dialog"],
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
          serializableCheck: false,
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
