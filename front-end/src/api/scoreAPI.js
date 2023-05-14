const BASE_URL = 'http://localhost:4000/api/v1';

export function postScore(winner, board_state) {
  const body = JSON.stringify({
    winner: winner.toUpperCase(),
    board: board_state
  });

  return fetch(`${BASE_URL}/score`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: body
  })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}