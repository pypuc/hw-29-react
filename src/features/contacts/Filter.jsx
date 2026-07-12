import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "./contactsSlice";

export default function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <label className="filter">
      Пошук за іменем
      <input
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}
