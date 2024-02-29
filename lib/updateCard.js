export async function updateCard(e) {
  const { name, value } = e.target;
  let fieldToUpdate = document.getElementById(name);
  fieldToUpdate.innerText = value;
  }
