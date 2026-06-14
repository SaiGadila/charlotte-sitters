type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
};

export function FormField({
  label,
  name,
  type = "text",
  inputMode,
  placeholder,
  required = true,
  children
}: FormFieldProps) {
  const id = `${name}-field`;

  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      {children ?? (
        <input
          id={id}
          name={name}
          type={type}
          inputMode={inputMode}
          required={required}
          placeholder={placeholder}
          className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-base font-normal text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
        />
      )}
    </label>
  );
}
