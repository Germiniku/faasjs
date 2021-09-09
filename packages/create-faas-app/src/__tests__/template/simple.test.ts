import { readFileSync } from 'fs'
import { generate } from '../../template'

describe('template/simple', function () {
  it('should work', async function () {
    const result = await generate('simple', { name: 'test' }, __dirname + '/tmp/simple')

    for (const file of result.files) {
      expect(readFileSync(file.filename).toString()).toEqual(file.template(result.arguments))
    }
  })
})
