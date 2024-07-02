import { Searchbar } from "./Searchbar";

export const AppBar = () => {
  return (
    <div className="flex justify-between">
      <div>Youtube</div>
      <div>
        <Searchbar />
      </div>
      <div>Sign in</div>
    </div>
  );
};
