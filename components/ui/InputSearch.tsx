export default function InputSearch() {
  return (
    <fieldset
      className={`fieldset w-full rounded-box`}
      style={{ borderColor: "var(--color-accent)" }}
    >
      <input
        type="text"
        maxLength={20}
        minLength={3}
        placeholder="Search..."
        className={`input input-bordered w-full`}
        style={{
          backgroundColor: "var(--color-card)",
          color: "var(--color-foreground)",
          borderColor: "var(--color-accent)",
        }}
      />
    </fieldset>
  );
}
