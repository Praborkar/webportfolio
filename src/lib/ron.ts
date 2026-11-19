// Lets any part of the page open the Ron chat, optionally with a question already sent.
export const RON_OPEN_EVENT = "ron:open";

export function openRon(question?: string) {
  window.dispatchEvent(new CustomEvent(RON_OPEN_EVENT, { detail: { question } }));
}
