import initButtons from "./buttons";
import { TICK_RATE } from "./constants";
import game from "./gameState";

function init() {
  console.log("starting game");
  initButtons(game.handleUserAction)

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
