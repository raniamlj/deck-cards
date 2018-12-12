import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'



chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(chaiJestSnapshot)
  .use(createChaiEnzyme())
  .use(sinonChai)

expect.addSnapshotSerializer(enzymeToJSON)