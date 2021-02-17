export const copyToClipboard = (str) => {
  const clipboard = window.navigator.clipboard;
  return clipboard.writeText(str);
};
