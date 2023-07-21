import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
