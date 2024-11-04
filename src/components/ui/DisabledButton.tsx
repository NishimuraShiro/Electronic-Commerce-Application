export const DisabledButton = (props: { buttonName: string }) => {
  return (
    <button
      className="w-72 h-12 mx-auto mt-12 rounded-3xl bg-white border-gray-300 text-center border block"
      disabled
    >
      <p className="text-gray-300">{props.buttonName}</p>
    </button>
  );
};
