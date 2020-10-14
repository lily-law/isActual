const isActual = {
  number(n: any): boolean {
    return n !== null && !Array.isArray(n) && !isNaN(n) && !(typeof n === 'string' && n.trim() === '')
  },
}
export default isActual
