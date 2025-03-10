interface ResponseMessageProps {
  message: string;
}

export default function ResponseMessage({ message }: ResponseMessageProps) {
  return message ? (
    <p
      style={{
        marginTop: "15px",
        color: message.includes("failed") ? "red" : "green",
      }}
    >
      Server Response: {message}
    </p>
  ) : null;
}
