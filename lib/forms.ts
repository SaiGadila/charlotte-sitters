export const submissionEmail = "aparna10kalyanam@gmail.com";

export const parentFormEndpoint =
  process.env.NEXT_PUBLIC_PARENT_FORM_ENDPOINT || `https://formsubmit.co/${submissionEmail}`;

export const sitterFormEndpoint =
  process.env.NEXT_PUBLIC_SITTER_FORM_ENDPOINT || `https://formsubmit.co/${submissionEmail}`;
