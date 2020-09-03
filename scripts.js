// Ejercicio 1. Encriptar y desencriptar mensajes usando el mensaje, las funciones de encriptar y desencriptar dadas por parámetro y una clave secreta
function secret(numbers, encryptDecrypt, key) {
  return numbers.map((num) => encryptDecrypt(num, key));
}

// Ejercicio 2. Máximo común divisor de 2 números
mcd = (a, b) => (b === 0 ? a : mcd(b, a % b));
