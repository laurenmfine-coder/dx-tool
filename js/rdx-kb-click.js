/**
 * Keyboard-activation helper for non-button elements.
 *
 * When a <div>, <span>, or other non-button element handles a click, it
 * also needs to handle keyboard activation (Enter or Space) for users
 * who navigate without a mouse — keyboard-only users, screen-reader
 * users, voice-control users, switch-control users.
 *
 * The standard WCAG 2.1 AA pattern is to:
 *   1. Set role="button" so assistive tech announces it correctly
 *   2. Set tabindex="0" so it appears in the keyboard tab order
 *   3. Wire onkeydown to fire the same action as onclick
 *
 * This helper is the third piece. Use it on any non-button interactive
 * element like:
 *
 *   <div role="button" tabindex="0"
 *        onclick="doThing()"
 *        onkeydown="rdxKbClick(event)">...</div>
 *
 * On Enter or Space, it prevents the default action (page scroll on
 * Space) and triggers a click on the element.
 */
window.rdxKbClick = function(event) {
  if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault();
    if (event.currentTarget && typeof event.currentTarget.click === 'function') {
      event.currentTarget.click();
    } else if (event.target && typeof event.target.click === 'function') {
      event.target.click();
    }
  }
};
