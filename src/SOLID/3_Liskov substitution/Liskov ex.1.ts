// Liskov substitution principle

class Person {

}

class Member extends Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {

}

function openSecretDoor(member: Member) {
  member.access()
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany());

