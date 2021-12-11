import { TypedUseSelectorHook, useSelector as useAppSelector, useDispatch as useAppDispatch } from "react-redux";
import { ActionType, RootState } from "./store";

export const useDispatch = () => useAppDispatch<ActionType>();

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
