# execute-safe

## Usage
```
import {safe} from 'execute-safe';

const parseResult = (r) => r.foo;

const result = {foo: 'bar'};

const result = safe(parseResult)(result);  // result: 'bar'
```
