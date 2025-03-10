interface InputboxProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function Inputbox({ label, type, value, onChange, placeholder }: InputboxProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={{ marginBottom: '5px' }}>{label}: </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: '8px', fontSize: '16px' }}
      />
    </div>
  );
}