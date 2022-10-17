const records = [{
  id: 1,
  first: "Reynaldo",
  last: "Matute",
  avatar: "https://placekitten.com/g/200/200",
  twitter: "rmatute",
  notes: "He is a great software developer",
  favorite: true,
},
{
  id: 2,
  first: "Santos",
  last: "Matute",
  avatar: "https://placekitten.com/g/200/201",
  twitter: "smatute",
  notes: "He is a great software developer",
  favorite: true,
}
];
export function getContacts(id) {
  if (id) {
    return records.find(p => p.id == id);
  }else {
    return records;
  }
}

export function createContact(id, object) {

}

export function updateContact(id, object) {
  return {
    id: 1,
    first: "Reynaldo",
    last: "Matute",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  }
}

export function deleteContact(id) {

}