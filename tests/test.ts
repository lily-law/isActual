import isActual from '../src/index'
const args = process.argv.slice(2)
const verbose = args.length > 0 && args[0].toLowerCase() == 'verbose'

console.group('isActual.number')
test('null', isActual.number(null), false)
test('[1]', isActual.number([1]), false)
test('NaN', isActual.number(NaN), false)
test("''", isActual.number(''), false)
test("'   '", isActual.number('   '), false)
test("'12 test 3'", isActual.number('12 test 3'), false)

test(0, isActual.number(0), true)
test(0.5, isActual.number(0.5), true)
test("'0'", isActual.number('0'), true)
test("'0.5'", isActual.number('0.5'), true)
test("'123'", isActual.number('123'), true)
test(123, isActual.number(123), true)
console.log('End of Test')
console.groupEnd()

function test(name: string | number, input: any, expectedOutput: any) {
  console.group()
  if (verbose) {
    console.log(name + ': ')
    console.log(input)
  }
  const condition = JSON.stringify(input) === JSON.stringify(expectedOutput)
  condition && console.log('OK: ' + name)
  console.assert(condition, `return from ${name} not as expected`)
  console.groupEnd()
}
