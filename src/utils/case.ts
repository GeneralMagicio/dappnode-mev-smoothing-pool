/**
 * Converts a string to camelCase
 * @param str String to convert
 * @returns String converted to camelCase
 * @example
 * toCamelCase('foo_bar') // returns 'fooBar'
 */
function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (match, char) => char.toUpperCase())
}

/**
 * Checks if a value is a Record
 * @param value Value to check
 * @returns True if the value is a Record, false otherwise
 * @example
 * isRecord({ foo: 'bar' }) // returns true
 * isRecord(['foo', 'bar']) // returns false
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Converts all keys in an object to camelCase
 * @param obj Object to convert
 * @returns Object with all keys converted to camelCase
 * @example
 * convertKeysToCamelCase({ foo_bar: 'baz' }) // returns { fooBar: 'baz' }
 * convertKeysToCamelCase({ foo_bar: { bar_baz: 'qux' } }) // returns { fooBar: { barBaz: 'qux' } }
 */
export function convertKeysToCamelCase<T>(obj: Record<string, unknown>): T {
  const result: Record<string, unknown> = {}

  Object.keys(obj).forEach((key) => {
    const camelCaseKey = toCamelCase(key)
    const value = obj[key]

    if (isRecord(value)) {
      result[camelCaseKey] = convertKeysToCamelCase(value)
    } else {
      result[camelCaseKey] = value
    }
  })

  return result as T
}
