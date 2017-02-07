import Unexpected from 'unexpected';

const expect: (a: any, b: string, c: any)=>never = Unexpected.clone();

export default expect;
