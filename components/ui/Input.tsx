interface InputProps {
  name: string;
  type: string;
  label: string;
  error?: string[];
  classBox?: string;
  inputMode?:
    | "search"
    | "none"
    | "email"
    | "tel"
    | "text"
    | "url"
    | "numeric"
    | "decimal";
  minLength?: number;
  maxLength?: number;
  classInput?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
}

export default function Input({
  name,
  type,
  label,
  error,
  classBox,
  inputMode,
  minLength,
  maxLength,
  classInput,
  placeholder,
  defaultValue,
  required,
}: InputProps) {
  return (
    <fieldset
      className={`fieldset w-full rounded-box ${classBox}`}
      style={{ borderColor: "var(--color-accent)" }}
    >
      <legend
        className="fieldset-legend pb-1 w-full"
        style={{ color: "var(--color-accent)" }}
      >
        {label}
      </legend>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        inputMode={inputMode}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`input input-bordered w-full ${classInput}`}
        style={{
          backgroundColor: "var(--color-card)",
          color: "var(--color-foreground)",
          borderColor: "var(--color-accent)",
        }}
      />
      {error && (
        <p
          role="alert"
          style={{ marginTop: "-5px" }}
          className="text-sm text-red-500"
        >
          {error}
        </p>
      )}
    </fieldset>
  );
}
