import TextField, {
  TextFieldProps,
  TextFieldVariants
} from "@mui/material/TextField";

export const InputField = () => {
  return (
    <div>
      <TextField
        className="w-[288px]"
        id="outlined-basic"
        placeholder="入力してください"
        variant="outlined"
      />
    </div>
  );
};
