interface InputProps {
  name: string;
  type: string;
  label: string;
  error?: string;
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
}

export const Input = ({
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
}: InputProps) => {
  return (
    <fieldset className={`fieldset w-full rounded-box ${classBox}`}>
      <legend className="fieldset-legend pb-1">{label}</legend>
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        className={`input input-bordered w-full ${classInput}`}
      />
      {true && (
        <p
          role="alert"
          style={{ marginTop: "-5px" }}
          className="text-sm text-red-500"
        >
          {"Campo requerido"}
        </p>
      )}
    </fieldset>
  );
};
