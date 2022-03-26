module.exports = {
  list: ["chore",  "feat", "fix", "perf", "refactor", "style", "test"],
  maxMessageLength: 64,
  minMessageLength: 5,
  questions: ["type", "scope", "subject", "body", "breaking", "issues", "lerna"],
  scopes: ["movie", "tvshow"],
  types: {
      chore: {
          description: "Build process or auxiliary tool changes",
          value: "chore",
      },
      feat: {
          description: "A new feature",
          value: "feat",
      },
      fix: {
          description: "A bug fix",
          value: "fix",
      },
      perf: {
          description: "A code change that improves performance",
          value: "perf",
      },
      refactor: {
          description: "A code change that neither fixes a bug or adds a feature",
          value: "refactor",
      },
      style: {
          description: "Markup, white-space, formatting, missing semi-colons...",
          value: "style",
      },
      test: {
          description: "Adding missing tests",
          value: "test",
      },
  },
};