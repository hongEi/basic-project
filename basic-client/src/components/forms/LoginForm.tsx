import InputField from "@/components/ui/Inputbox";
import SubmitButton from "@/components/ui/Button";

interface LoginFormProps {
  id: string;
  pw: string;
  onIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPwChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LoginForm({
  id,
  pw,
  onIdChange,
  onPwChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      <InputField
        label="ID"
        type="text"
        value={id}
        onChange={onIdChange}
        placeholder="Enter ID"
      />
      <InputField
        label="Password"
        type="password"
        value={pw}
        onChange={onPwChange}
        placeholder="Enter Password"
      />
      <SubmitButton />
    </form>
  );
}
