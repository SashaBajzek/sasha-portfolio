// Move keyboard and screen reader focus to a heading after an in-page nav link is used.
// react-scroll handles the smooth scroll, so preventScroll keeps the focus call from jumping the page.
export const focusHeading = id => {
  document.getElementById(id)?.focus({preventScroll: true})
}
