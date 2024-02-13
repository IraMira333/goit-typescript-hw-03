class Key {
  constructor(private signature = Math.random()) {}
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[] = [];
  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  key: Key;
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(false, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
