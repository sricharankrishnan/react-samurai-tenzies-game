/* node module imports */
import produce from "immer";

export const performUnlockCardById = produce((draft, cardId) => {
  if (Object.keys(draft).length > 0) {
    draft[cardId].isLocked = false;
  }
});
