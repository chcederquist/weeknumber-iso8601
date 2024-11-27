# weeknumber-iso8601

A lightweight(217 bytes minified) function to calculate the ISO 8601 week number for a given Date-object. Includes TS-definition.

## Installation

Install via npm:

```bash
npm install weeknumber-iso8601
```

## Usage

```typescript
import { getWeekNumberISO8601 } from 'weeknumber-iso8601';

const date = new Date('2024-11-13');
const weekNumber = getWeekNumberISO8601(date);
console.log(`Week number: ${weekNumber}`);
```

## Example

```typescript
const date1 = new Date('2024-01-03'); // Early January
console.log(`Week number: ${getWeekNumberISO8601(date1)}`); // Should return 1

const date2 = new Date('2024-12-31'); // End of the year
console.log(`Week number: ${getWeekNumberISO8601(date2)}`); // Should return the last week number of 2024
```

## License

This library is open source and licensed under the MIT-0 License. (No attribution needed in your minified bundle)