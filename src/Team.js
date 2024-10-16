import { Character } from './Character';

export class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    if (character instanceof Character) {
      this.members.push(character);
    } else {
      throw new Error('Must be a character');
    }
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    const members = this.members;

    return {
      next: function () {
        if (currentIndex < members.length) {
          return { value: members[currentIndex++], done: false };
        }
        return { done: true };
      }
    };
  }
}