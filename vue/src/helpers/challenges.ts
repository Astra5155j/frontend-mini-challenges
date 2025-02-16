interface Challenge {
  title: string
  link: string
  difficulty: string
  developer?: string
  tags?: string[]
  isNew?: boolean
}

export const challenges = new Map<string, Challenge>([
  [
    'counter',
    {
      title: 'Counter',
      link: '/counter',
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'accordion',
    {
      title: 'Accordion',
      link: '#',
      difficulty: 'easy',
    },
  ],
  [
    'light-dark-mode',
    {
      title: 'Light Dark Mode',
      link: '#',
      difficulty: 'easy',
    },
  ],
  [
    'table-colorizer',
    {
      title: 'Table Colorizer',
      link: '#',
      difficulty: 'easy',
    },
  ],
  [
    'Guess-the-number',
    {
      title: 'Guess the number',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'pagination',
    {
      title: 'Pagination',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'stack',
    {
      title: 'Stack',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'star-Rating',
    {
      title: 'Star Rating',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'telephone-formatter',
    {
      title: 'Telephone formatter',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic Tac Toe',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'expense-tracker',
    {
      title: 'Expense Tracker',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    '25-5-clock',
    {
      title: '25-5 Clock',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'email-templates',
    {
      title: 'Email Templates',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'toast-popup',
    {
      title: 'Toast Popup',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'password-strength',
    {
      title: 'Password Strength',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'column-table',
    {
      title: 'Column Table',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'todo-list',
    {
      title: 'Todo List',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'investment-calculator',
    {
      title: 'Investment Calculator',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'stopwatch',
    {
      title: 'Stopwatch',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'progressbar',
    {
      title: 'Progressbar',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'food-recipe',
    {
      title: 'Food Recipe',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'password-generator',
    {
      title: 'Password Generator',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'match-pair',
    {
      title: 'Match Pair',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'infinite-scrolling',
    {
      title: 'Infinite Scrolling (online)',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'file-explorer',
    {
      title: 'File Explorer',
      link: '#',
      difficulty: 'hard',
    },
  ],
  [
    'autocomplete-offline',
    {
      title: 'Typeahead / Autocomplete (offline)',
      link: '#',
      difficulty: 'hard',
    },
  ],
  [
    'autocomplete-online',
    {
      title: 'Typeahead / Autocomplete (online)',
      link: '#',
      difficulty: 'hard',
    },
  ],
  [
    'emoji-editor',
    {
      title: 'Emoji Editor',
      link: '#',
      difficulty: 'hard',
    },
  ],
  [
    'sort-table',
    {
      title: 'Sort Table',
      link: '#',
      difficulty: 'hard',
    },
  ],
]);
