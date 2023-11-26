const { createHash } = require('crypto');

export const mapper = (input1, input2) => {
    const hash = createHash('sha256');
    return hash.update(`${input1}${process.env.NEXT_PUBLIC_HASH_SECRET}${input2}`).digest('hex').slice(5, 21);
}


