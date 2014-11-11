function interpret (str) {
  var trimmedStr = str.trim ();
  var parts = trimmedStr.split('');
  var action = parts.shift();
  return [action,parts.join('')];
  }