import { Alert } from "@mui/material";

interface ErrorAlertMessageProps {
  errorMessages: string[];
  setErrorMessages: (messages: string[]) => void;
}

export const ErrorAlertMessage: React.FC<ErrorAlertMessageProps> = ({
  errorMessages,
  setErrorMessages
}) => {
  const handleErrorClose = (index: number) => {
    const newErrorMessages = errorMessages.filter((_, i) => i !== index);
    setErrorMessages(newErrorMessages);
  };

  return (
    <>
      {errorMessages.map((message, index) => (
        <Alert
          key={index}
          className="mt-2"
          severity="error"
          onClose={() => handleErrorClose(index)}
        >
          {message}
        </Alert>
      ))}
    </>
  );
};
