import {
  BROWSER_NOT_APPLY_COPY,
  RETRY_COPY,
  SUCCESS_COPY,
} from "@/utils/constants/alertMessages";

export const copyClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(SUCCESS_COPY);
      })
      .catch(() => {
        alert(RETRY_COPY);
      });
  } else {
    if (!document.queryCommandSupported("copy")) {
      return alert(BROWSER_NOT_APPLY_COPY);
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert(SUCCESS_COPY);
  }
};
