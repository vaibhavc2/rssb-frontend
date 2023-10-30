function getFuncName() {
  return getFuncName.caller.name;
}

export { getFuncName };
