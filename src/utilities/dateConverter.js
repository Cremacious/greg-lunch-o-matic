export const currentDate = new Date(Date.now()).toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

export const newCommentId = Date.now();