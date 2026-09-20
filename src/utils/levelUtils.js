export const MAX_LEVEL = 50;

export function getXpNeededForNextLevel(level) {
  return Math.min(level * 25, 250);
}

export function getMaxTotalXp() {
  let totalXp = 0;

  for (let level = 1; level < MAX_LEVEL; level++) {
    totalXp += getXpNeededForNextLevel(level);
  }

  return totalXp;
}

export const MAX_TOTAL_XP = getMaxTotalXp();

export function getLevelTitle(level) {
  if (level <= 5) {
    return 'New Newbie';
  }

  if (level <= 10) {
    return 'Permit Learner';
  }

  if (level <= 15) {
    return 'Rookie Rider';
  }

  if (level <= 20) {
    return 'Developing Rider';
  }

  if (level <= 25) {
    return 'Road Student';
  }

  if (level <= 30) {
    return 'Skilled Rider';
  }

  if (level <= 35) {
    return 'Road Ready';
  }

  if (level <= 40) {
    return 'Experienced Rider';
  }

  if (level <= 45) {
    return 'Veteran Rider';
  }

  if (level < 50) {
    return 'Motorcycle Master';
  }

  return 'Road God';
}

export function calculateLevel(totalXp) {
  let level = 1;
  let remainingXp = totalXp;

  while (level < MAX_LEVEL) {
    const xpNeeded = getXpNeededForNextLevel(level);

    if (remainingXp < xpNeeded) {
      break;
    }

    remainingXp -= xpNeeded;
    level++;
  }

  if (level === MAX_LEVEL) {
    return {
      level,
      title: getLevelTitle(level),
      currentLevelXp: 0,
      xpNeeded: 0,
      progressPercentage: 100,
      isMaxLevel: true,
    };
  }

  const xpNeeded = getXpNeededForNextLevel(level);

  return {
    level,
    title: getLevelTitle(level),
    currentLevelXp: remainingXp,
    xpNeeded,
    progressPercentage: Math.round(
      (remainingXp / xpNeeded) * 100
    ),
    isMaxLevel: false,
  };
}

export function calculateQuestionXp(streak) {
  const normalXp = 10 + (streak - 1);
  const tenAnswerBonus = streak >= 10 ? 1 : 0;

  return normalXp + tenAnswerBonus;
}