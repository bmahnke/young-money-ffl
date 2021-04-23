function injuryTextStatus(status) {
  let text;
  switch (status) {
    case 'SUSPENSION':
      text = 'S';
      break;
    case 'QUESTIONABLE':
      text = 'Q';
      break;
    case 'PROBABLE':
      text = 'P';
      break;
    case 'ACTIVE':
      text = 'A';
      break;
    case 'DOUBTFUL':
      text = 'D';
      break;
    case 'INJURY_RESERVE':
      text = 'IR';
      break;
    case 'OUT':
      text = 'O';
      break;
    case 'SEVEN_DAY_DL':
    case 'TEN_DAY_DL':
    case 'FIFTEEN_DAY_DL':
    case 'SIXTY_DAY_DL':
      text = 'DL';
      break;
    default:
      break;
  }

  return text;
}

function injuryIconStatus(status) {
  let icon;
  switch (status) {
    case 'SUSPENSION':
      icon = 'minus_circle';
      break;
    case 'DOUBTFUL':
    case 'QUESTIONABLE':
      icon = 'question_mark_circle';
      break;
    case 'PROBABLE':
    case 'ACTIVE':
      icon = 'check';
      break;
    case 'INJURY_RESERVE':
    case 'OUT':
    case 'SEVEN_DAY_DL':
    case 'TEN_DAY_DL':
    case 'FIFTEEN_DAY_DL':
    case 'SIXTY_DAY_DL':
      icon = 'ban';
      break;
    default:
      break;
  }

  return icon;
}

function injuryColorStatus(status) {
  let color = 'black';
  switch (status) {
    case 'SUSPENSION':
    case 'OUT':
    case 'INJURY_RESERVE':
    case 'SEVEN_DAY_DL':
    case 'TEN_DAY_DL':
    case 'FIFTEEN_DAY_DL':
    case 'SIXTY_DAY_DL':
      color = 'red';
      break;
    case 'PROBABLE':
      color = 'orange';
      break;
    case 'ACTIVE':
      color = 'green';
      break;
    case 'QUESTIONABLE':
    case 'DOUBTFUL':
      color = 'yellow';
      break;
    default:
      break;
  }

  return color;
}

export {
  injuryColorStatus,
  injuryIconStatus,
  injuryTextStatus
}