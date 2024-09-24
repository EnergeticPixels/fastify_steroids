const registered = []

export async function store(user) {
  registered.push(user);
}

export function data() {
  return registered;
}
