if (!('canParse' in URL)) {
  URL.canParse = function canParse(url, base) {
    try {
      new URL(url, base);
      return true;
    } catch {
      return false;
    }
  };
}
