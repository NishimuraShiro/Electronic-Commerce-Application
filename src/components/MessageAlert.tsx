import { Alert } from "@mui/material";

interface MessageAlertProps {
  isError: boolean;
  errorMessages: string[];
  setErrorMessages: (messages: string[]) => void;
  isSuccess: boolean;
  successMessage: string;
  onSuccessClose: () => void;
}

export const MessageAlert: React.FC<MessageAlertProps> = ({
  isError,
  errorMessages,
  setErrorMessages,
  isSuccess,
  successMessage,
  onSuccessClose
}) => {
  const handleErrorClose = (index: number) => {
    const newErrorMessages = errorMessages.filter((_, i) => i !== index);
    setErrorMessages(newErrorMessages);
  };

  return (
    <>
      {isError &&
        errorMessages.map((message, index) => (
          <Alert
            key={index}
            className="mt-2"
            severity="error"
            onClose={() => handleErrorClose(index)}
          >
            {message}
          </Alert>
        ))}
      {isSuccess && (
        <Alert severity="success" onClose={onSuccessClose}>
          {successMessage}
        </Alert>
      )}
    </>
  );
};

export default MessageAlert;
