export const ButtonAboutAuth = (props: {
  buttonColor: string;
  buttonName: string;
}) => {
  return (
    <button
      type="submit"
      className={`w-72 h-12 mx-auto mt-12 rounded-3xl ${props.buttonColor} text-center text-xl block`}
    >
      <p>{props.buttonName}</p>
    </button>
  );
};
