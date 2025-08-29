interface SelectProps {
  name: string;
  label: string;
  value?: string;
  options: { value: string; label: string }[];
  classBox?: string;
  classSelect?: string;
  disabled?: boolean;
}

export default function Select({
  name,
  label,
  value,
  options,
  classSelect = "",
  classBox = "",
  disabled = false,
}: SelectProps) {
  return (
    <fieldset
      className={`fieldset w-full rounded-box ${classBox}`}
      style={{ borderColor: "var(--color-accent)" }}
    >
      <legend
        className="fieldset-legend pb-1"
        style={{ color: "var(--color-accent)" }}
      >
        {label}
      </legend>
      <select
        name={name}
        defaultValue={value}
        disabled={disabled}
        className={`select select-bordered w-full ${classSelect}`}
        style={{
          backgroundColor: "var(--color-card)",
          color: "var(--color-foreground)",
          borderColor: "var(--color-accent)",
        }}
      >
        <option
          value=""
          disabled
          style={{ backgroundColor: "var(--color-background)" }}
        >
          Select
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            style={{ backgroundColor: "var(--color-background)" }}
          >
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
