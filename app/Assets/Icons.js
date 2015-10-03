'use strict';

let icons = {
  star: 'data:image/png;base64,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',
  starActive: 'data:image/png;base64,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',
  board: 'data:image/png;base64,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',
  boardActive: 'data:image/png;base64,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',
};

export { icons as default };
