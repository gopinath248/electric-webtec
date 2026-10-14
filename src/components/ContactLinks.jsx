function normalizePhoneNumber(number) {
  return String(number).replace(/[^\d+]/g, "");
}

export const phoneContacts = [
  { number: "+917904202229", label: "+91 79042 02229" },
  { number: "+916369874985", label: "+91 63698 74985" }
];

export function PhoneLink({ number, children, className = "" }) {
  return (
    <a
      href={`tel:${normalizePhoneNumber(number)}`}
      className={`no-underline transition-opacity duration-300 hover:opacity-80 ${className}`.trim()}
    >
      {children ?? number}
    </a>
  );
}

export function PhoneContactList({
  className = "",
  linkClassName = "",
  separator = ", "
}) {
  return (
    <span className={className}>
      {phoneContacts.map((contact, index) => (
        <span key={contact.number}>
          {index > 0 ? separator : null}
          <PhoneLink number={contact.number} className={linkClassName}>
            {contact.label}
          </PhoneLink>
        </span>
      ))}
    </span>
  );
}

export function EmailLink({ email, children, className = "" }) {
  return (
    <a
      href={`mailto:${email}`}
      className={`no-underline transition-opacity duration-300 hover:opacity-80 ${className}`.trim()}
    >
      {children ?? email}
    </a>
  );
}
