function list(clients) {
  const html = clients.map(client => {
    return `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$ ${client.balance.toFixed(2)}</strong>
    </li>`;
  }).join('');
  
  return html;
}

function order(clients, property) {
  return clients.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
}

function total(clients) {
  return clients.reduce((acc, client) => acc + client.balance, 0);
}

function info(index) {
  return clients.find(client => client.index === index);
}

function search(query) {
  const lowerQuery = query.toLowerCase();
  return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
}