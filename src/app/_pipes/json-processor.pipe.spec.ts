import { JsonProcessorPipe } from './json-processor.pipe';

describe('JsonProcessorPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonProcessorPipe();
    expect(pipe).toBeTruthy();
  });
});
