import Inputbox from "@/components/ui/Inputbox";
import Button from "@/components/ui/Button";

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
      <Inputbox
        label="ID"
        type="text"
        value={id}
        onChange={onIdChange}
        placeholder="Enter ID"
      />
      <Inputbox
        label="Password"
        type="password"
        value={pw}
        onChange={onPwChange}
        placeholder="Enter Password"
      />
      <Button />
    </form>
  );
}
