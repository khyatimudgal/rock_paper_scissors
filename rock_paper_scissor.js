const gameChoices = ['rock', 'paper', 'scissors']

let totalRounds = 0
let currentRound = 0
let wins = 0
let losses = 0
let ties = 0
let roundHistory = []

function setRounds(n) {
  totalRounds = n
  currentRound = 0
  wins = 0
  losses = 0
  ties = 0
  roundHistory = []

  document.getElementById('round-selector').style.display = 'none'
  document.getElementById('game-over').style.display     = 'none'
  document.getElementById('game-area').style.display     = 'block'
  document.getElementById('history').style.display       = 'block'
  document.getElementById('keyboard-hint').style.display = 'block'
  document.getElementById('match-result').textContent = ''
  document.getElementById('match-detail').textContent = ''
  document.getElementById('match-result').className = ''

  updateRoundInfo()
  updateScoreboard()
  renderHistory()
}

function play(userChoice) {
  if (currentRound >= totalRounds) return

  const computerChoice = gameChoices[Math.floor(Math.random() * 3)]
  currentRound += 1

  const resultEl = document.getElementById('match-result')
  const detailEl = document.getElementById('match-detail')

  detailEl.textContent = `You: ${emoji(userChoice)}  vs  Computer: ${emoji(computerChoice)}`
  resultEl.className = ''

  let roundResult = ''

  if (userChoice === computerChoice) {
    ties += 1
    resultEl.textContent = "It's a Tie!"
    resultEl.classList.add('tie')
    roundResult = `Round ${currentRound}: Tie — ${emoji(userChoice)} vs ${emoji(computerChoice)}`
  } else if (
    (userChoice === 'rock'     && computerChoice === 'scissors') ||
    (userChoice === 'paper'    && computerChoice === 'rock')     ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    wins += 1
    resultEl.textContent = 'You Win!'
    resultEl.classList.add('win')
    roundResult = `Round ${currentRound}: You Won — ${emoji(userChoice)} vs ${emoji(computerChoice)}`
  } else {
    losses += 1
    resultEl.textContent = 'You Lose!'
    resultEl.classList.add('lose')
    roundResult = `Round ${currentRound}: You Lost — ${emoji(userChoice)} vs ${emoji(computerChoice)}`
  }

  roundHistory.unshift(roundResult)
  updateScoreboard()
  updateRoundInfo()
  renderHistory()

  if (currentRound >= totalRounds) {
    setTimeout(showGameOver, 800)
  }
}

function showGameOver() {
  document.getElementById('game-area').style.display  = 'none'
  document.getElementById('game-over').style.display  = 'block'

  const gameResultEl = document.getElementById('game-result')
  gameResultEl.className = ''

  if (wins > losses) {
    gameResultEl.textContent = `🎉 You won the game! ${wins} - ${losses}`
    gameResultEl.classList.add('win')
  } else if (losses > wins) {
    gameResultEl.textContent = `💀 Computer won the game! ${losses} - ${wins}`
    gameResultEl.classList.add('lose')
  } else {
    gameResultEl.textContent = `🤝 It's a draw! ${wins} - ${losses}`
    gameResultEl.classList.add('tie')
  }
}

function newGame() {
  document.getElementById('game-over').style.display      = 'none'
  document.getElementById('round-selector').style.display = 'block'
  document.getElementById('history').style.display        = 'none'
  document.getElementById('keyboard-hint').style.display  = 'none'
}

function updateRoundInfo() {
  document.getElementById('current-round').textContent = currentRound + 1 > totalRounds ? totalRounds : currentRound + 1
  document.getElementById('total-rounds').textContent = totalRounds
}

function updateScoreboard() {
  document.getElementById('your-score').textContent     = wins
  document.getElementById('tie-score').textContent      = ties
  document.getElementById('computer-score').textContent = losses
}

function renderHistory() {
  const list = document.getElementById('history-list')
  list.innerHTML = ''
  if (roundHistory.length === 0) {
    list.innerHTML = '<li id="empty-history">No rounds played yet</li>'
    return
  }
  roundHistory.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    list.appendChild(li)
  })
}

function emoji(choice) {
  if (choice === 'rock')     return '🪨'
  if (choice === 'paper')    return '📄'
  if (choice === 'scissors') return '✂️'
}

function clearHistory() {
  roundHistory = []
  renderHistory()
}

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase()
  if (key === 'r') play('rock')
  if (key === 'p') play('paper')
  if (key === 's') play('scissors')
})
