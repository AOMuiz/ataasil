/**
 * Several little utilities for this project.
 *
 */

export function getFirstLetters(username) {
  return username.split(" ").map((word) => word[0]);
}

export function isNotNullOrUndefined(value) {
  return value !== null && value !== undefined;
}
